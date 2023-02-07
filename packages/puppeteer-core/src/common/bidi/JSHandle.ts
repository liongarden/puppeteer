/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ElementHandle} from '../../common/ElementHandle.js';
import {EvaluateFunc, HandleFor, HandleOr} from '../../common/types.js';
import {releaseReference} from './utils.js';
import {Page} from './Page.js';
import {JSHandle as BaseJSHandle} from '../../api/JSHandle.js';
import {BidiSerializer} from './Serializer.js';
import {Connection} from './Connection.js';
import {Reference} from './types.js';

export class JSHandle<T = unknown> extends BaseJSHandle {
  #disposed = false;
  #context;
  #remoteObject;

  constructor(
    context: Page, // TODO: Extract Execution Context
    remoteObject: Reference
  ) {
    super();
    this.#context = context;
    this.#remoteObject = remoteObject;
  }

  /**
   * @internal
   */
  override executionContext(): Page {
    return this.#context;
  }

  /**
   * @internal
   */
  override get client(): Connection {
    return this.#context.connection;
  }

  /**
   * @internal
   */
  override get disposed(): boolean {
    return this.#disposed;
  }

  override async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<[this, ...Params]> = EvaluateFunc<
      [this, ...Params]
    >
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    return this.#context.evaluate(pageFunction, this, ...args);
  }

  override async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<[this, ...Params]> = EvaluateFunc<
      [this, ...Params]
    >
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    return await this.#context.evaluateHandle(pageFunction, this, ...args);
  }

  override async getProperty<K extends keyof T>(
    propertyName: HandleOr<K>
  ): Promise<HandleFor<T[K]>>;
  override async getProperty(propertyName: string): Promise<HandleFor<unknown>>;
  override async getProperty<K extends keyof T>(
    propertyName: HandleOr<K>
  ): Promise<HandleFor<T[K]>> {
    return (await this.evaluateHandle((object, propertyName) => {
      // TODO:
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return object[propertyName as K];
    }, propertyName)) as any;
  }

  override async getProperties(): Promise<Map<string, JSHandle>> {
    const result = new Map<string, JSHandle>();
    const response = await this.evaluateHandle(object => {
      // TODO:
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return object[propertyName as K];
    });

    return result;
  }

  override async jsonValue(): Promise<T> {
    if (!this.#remoteObject.handle) {
      return BidiSerializer.deserialize(this.#remoteObject);
    }
    const value = await this.evaluate(object => {
      return object;
    });
    if (value === undefined) {
      throw new Error('Could not serialize referenced object');
    }
    // TODO:
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return value;
  }

  override asElement(): ElementHandle<Node> | null {
    return null;
  }

  override async dispose(): Promise<void> {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    await releaseReference(this.client, this.#remoteObject);
  }

  override toString(): string {
    if (!this.#remoteObject.handle) {
      return 'JSHandle:' + BidiSerializer.deserialize(this.#remoteObject);
    }

    return 'JSHandle@' + this.#remoteObject.type;
  }

  /**
   * Provides access to the
   * [Bidi.Script.RemoteReference](https://w3c.github.io/webdriver-bidi/#data-types-reference)
   * backing this handle.
   */
  override remoteObject(): Reference {
    return this.#remoteObject;
  }
}
