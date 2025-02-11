import "clsx";
import { l as bind_props, j as pop, m as fallback, o as stringify, p as push, q as head } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Control($$payload, $$props) {
  push();
  let estimatedCost = fallback($$props["estimatedCost"], () => writable(0), true);
  let mainSquareFootage = 1e3;
  let hasBasement = false;
  let basementSquareFootage = 500;
  $$payload.out += `<div${attr("class", `component-container ${stringify("")} svelte-19lzr34`)}><div class="form-group svelte-19lzr34"><h1 class="form-title svelte-19lzr34">Main Square Footage</h1> <div class="slider-input-group svelte-19lzr34"><input type="number"${attr("value", mainSquareFootage)} min="100" max="10000" aria-label="Main Square Footage" class="svelte-19lzr34"></div> <br> <input type="range" min="100" max="10000"${attr("value", mainSquareFootage)} aria-label="Main Square Footage Slider" class="svelte-19lzr34"></div> <div class="form-group checkbox-group svelte-19lzr34"><label for="hasBasement" class="checkbox-label svelte-19lzr34">Has Basement?</label> <div class="checkbox-container svelte-19lzr34"><input type="checkbox"${attr("checked", hasBasement, true)} id="hasBasement" aria-describedby="basementDescription"></div></div> <div class="form-group basement-group svelte-19lzr34"><div class="form-title svelte-19lzr34">Basement Square Footage</div> <div class="slider-input-group svelte-19lzr34"><input${attr("disabled", !hasBasement, true)} type="number"${attr("value", basementSquareFootage)} min="100" max="5000" aria-label="Basement Square Footage" class="svelte-19lzr34"></div> <br> <input${attr("disabled", !hasBasement, true)} type="range" min="100" max="5000"${attr("value", basementSquareFootage)} aria-label="Basement Square Footage Slider" class="svelte-19lzr34"></div> <button class="submit-btn svelte-19lzr34">Submit</button></div>`;
  bind_props($$props, { estimatedCost });
  pop();
}
function OutputComponent($$payload, $$props) {
  push();
  let estimatedCost = fallback($$props["estimatedCost"], () => writable(0), true);
  let cost = 0;
  estimatedCost.subscribe((value) => cost = value);
  $$payload.out += `<div class="estimated-cost svelte-xnpt7n"><p class="svelte-xnpt7n">Estimated Costs:<br></p> <p class="svelte-xnpt7n">$<span>${escape_html(cost.toFixed(2))}</span></p></div>`;
  bind_props($$props, { estimatedCost });
  pop();
}
const image = "/_app/immutable/assets/LEAP-logo-transparent.B3FTlTvZ.png";
function Navbar($$payload) {
  $$payload.out += `<div class="navbar svelte-5gfmyf"><img class="logo svelte-5gfmyf"${attr("src", image)} alt="LEAP Logo"></div>`;
}
const favicon = "data:image/png;base64,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";
function Main($$payload, $$props) {
  push();
  let estimatedCost = writable(0);
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="icon" type="image/x-icon"${attr("href", favicon)}>`;
  });
  $$payload.out += `<main class="svelte-ssccqx">`;
  Navbar($$payload);
  $$payload.out += `<!----> <div class="main-container svelte-ssccqx">`;
  Control($$payload, { estimatedCost });
  $$payload.out += `<!----> `;
  OutputComponent($$payload, { estimatedCost });
  $$payload.out += `<!----></div></main>`;
  pop();
}
function _page($$payload) {
  Main($$payload);
}
export {
  _page as default
};
