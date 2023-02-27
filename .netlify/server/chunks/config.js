import { JsonRpc, JsSignatureProvider, Api } from "ineryjs/dist/index.js";
const url = "https://tas.blockchain-servers.world";
const json_rpc = new JsonRpc(url);
const private_key = "5KBTVC7N3m6wq2k3NoPdawdas345831d32sd653dAg21a6ds23A";
const actor = "usman";
const account = "gogon";
const signature = new JsSignatureProvider([private_key]);
const api = new Api({
  rpc: json_rpc,
  signatureProvider: signature
});
export {
  api as a,
  account as b,
  actor as c
};
