import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

export type Reference = Extract<
  Bidi.CommonDataTypes.RemoteValue,
  Bidi.CommonDataTypes.RemoteReference
>;

/**
 * @internal
 */
export interface Commands {
  'script.evaluate': {
    params: Bidi.Script.EvaluateParameters;
    returnType: Bidi.Script.EvaluateResult;
  };
  'script.callFunction': {
    params: Bidi.Script.CallFunctionParameters;
    returnType: Bidi.Script.CallFunctionResult;
  };
  'script.disown': {
    params: Bidi.Script.DisownParameters;
    returnType: Bidi.Script.DisownResult;
  };
  'browsingContext.create': {
    params: Bidi.BrowsingContext.CreateParameters;
    returnType: Bidi.BrowsingContext.CreateResult;
  };
  'browsingContext.close': {
    params: Bidi.BrowsingContext.CloseParameters;
    returnType: Bidi.BrowsingContext.CloseResult;
  };
  'session.status': {
    params: {context: string}; // TODO: Update Types in chromium bidi
    returnType: Bidi.Session.StatusResult;
  };
}
