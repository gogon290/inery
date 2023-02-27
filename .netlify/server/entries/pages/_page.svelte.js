import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, i as is_promise, n as noop, v as validate_component } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { modal_id } = $$props;
  let { modal_title } = $$props;
  let { action_button_class = "btn btn-primary" } = $$props;
  if ($$props.modal_id === void 0 && $$bindings.modal_id && modal_id !== void 0)
    $$bindings.modal_id(modal_id);
  if ($$props.modal_title === void 0 && $$bindings.modal_title && modal_title !== void 0)
    $$bindings.modal_title(modal_title);
  if ($$props.action_button_class === void 0 && $$bindings.action_button_class && action_button_class !== void 0)
    $$bindings.action_button_class(action_button_class);
  return `<input type="${"checkbox"}"${add_attribute("id", modal_id, 0)} class="${"modal-toggle"}">
<div class="${"modal modal-bottom sm:modal-middle"}"><div class="${"modal-box relative"}"><label${add_attribute("for", modal_id, 0)} class="${"btn btn-sm btn-circle absolute right-2 top-2"}">✕</label>
    <h3 class="${"font-bold text-lg mb-4"}">${escape(modal_title)}</h3>
    ${slots.body ? slots.body({}) : ``}
    <div class="${"modal-action"}"><label${add_attribute("for", modal_id, 0)}${add_attribute("class", action_button_class, 0)}>Submit</label></div></div></div>`;
});
const api_store = writable("Please click the button above...");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $api_store, $$unsubscribe_api_store;
  $$unsubscribe_api_store = subscribe(api_store, (value) => $api_store = value);
  let create_id;
  let read_id;
  let update_id;
  let destroy_id;
  $$unsubscribe_api_store();
  return `${$$result.head += `<!-- HEAD_svelte-t55dz7_START -->${$$result.title = `<title>Gogon-Dapp</title>`, ""}<!-- HEAD_svelte-t55dz7_END -->`, ""}

<div class="${"container mx-auto min-h-screen px-20 pb-20 pt-20"}"><div class="${"flex justify-center"}"><div class="${"avatar relative cursor-pointer mb-4"}"><div class="${"w-8 h-8 rounded-full absolute z-20 bottom-0 right-0"}"></div>
            <div class="${"w-24 mask mask-square bordered"}"></div></div></div>
    <div class="${"mb-10 text-center"}"><div class="${"text-4xl animate__animated animate__fadeIn animate__delay-1s text-red-400 font-bold "}">Inery Task 5 by Gogon
        </div>
        <div class="${"mt-4 animate__animated animate__fadeIn animate__delay-1s text-white "}">Simple Dapps click the button below to run a simple transaction with Inery Blockchain <br>
     <p>Inery Task 5, by <a href="${"https://github.com/gogon290"}" class="${"text-dark"}">@gogon290</a>.</p></div></div>

    <div class="${"flex"}"><div class="${"flex flex-col flex-direction: row; justify-left items-left animate__animated animate__fadeIn animate__delay-2s"}" style="${"gap: 50px; margin-left: 10px;"}"><label for="${"modal-create"}" class="${"btn bg-white text-red-500 btn-error"}" style="${"width: 150px; margin-right: 10px;"}">Create</label>
            <label for="${"modal-read"}" class="${"btn bg-white text-red-500 btn-error"}" style="${"width: 150px; margin-right: 10px;"}">View</label>
            <label for="${"modal-update"}" class="${"btn bg-white text-red-500 btn-error"}" style="${"width: 150px; margin-right: 10px;"}">Update</label>
            <label for="${"modal-destroy"}" class="${"btn bg-white text-red-500 btn-error"}" style="${"width: 150px; margin-right: 10px;"}">Delete</label></div>

            
            <div class="${"flex w-full flex-col justify-right items-right mockup-code animate__animated animate__fadeIn animate__delay-3s"}" style="${"margin-right: 10px;"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
                    <pre data-prefix="${"$"}"><code>Please wait..</code></pre>    
                `;
    }
    return function(api) {
      return ` 
                    <pre data-prefix="${"$"}"><code>${escape(JSON.stringify(api, null, 4))}</code></pre>    
                `;
    }(__value);
  }($api_store)}</div></div></div>

${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      modal_id: "modal-create",
      modal_title: "Build New Record on Inery"
    },
    {},
    {
      body: () => {
        return `<div slot="${"body"}" class="${"flex flex-col gap-4"}"><input type="${"text"}" placeholder="${"Type ID"}" class="${"input input-bordered w-full max-w-xs"}"${add_attribute("value", create_id, 0)}>
        <input type="${"text"}" placeholder="${"gogon290"}" class="${"input input-bordered w-full max-w-xs"}" disabled>
        <textarea class="${"textarea textarea-bordered w-full"}" placeholder="${"Type the details"}">${""}</textarea></div>`;
      }
    }
  )}

${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      modal_id: "modal-read",
      modal_title: "View Record by ID"
    },
    {},
    {
      body: () => {
        return `<div slot="${"body"}" class="${"flex flex-col gap-4"}"><input type="${"text"}" placeholder="${"Type ID"}" class="${"input input-bordered w-full max-w-xs"}"${add_attribute("value", read_id, 0)}></div>`;
      }
    }
  )}

${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      modal_id: "modal-update",
      modal_title: "Update Record by ID"
    },
    {},
    {
      body: () => {
        return `<div slot="${"body"}" class="${"flex flex-col gap-4"}"><input type="${"text"}" placeholder="${"Type ID"}" class="${"input input-bordered w-full max-w-xs"}"${add_attribute("value", update_id, 0)}>
        <textarea class="${"textarea textarea-bordered w-full"}" placeholder="${"Type the data..."}">${""}</textarea></div>`;
      }
    }
  )}

${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      modal_id: "modal-destroy",
      modal_title: "Delete Record by ID"
    },
    {},
    {
      body: () => {
        return `<div slot="${"body"}" class="${"flex flex-col gap-4"}"><input type="${"text"}" placeholder="${"Type ID"}" class="${"input input-bordered w-full max-w-xs"}"${add_attribute("value", destroy_id, 0)}></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
