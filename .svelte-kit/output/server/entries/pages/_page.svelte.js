import "clsx";
import { w as writable } from "../../chunks/index.js";
import { l as bind_props, j as pop, m as fallback, o as stringify, p as push } from "../../chunks/index2.js";
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
const image = "/Leap-Web-Calculator/_app/immutable/assets/LEAP-logo-transparent.B3FTlTvZ.png";
function Navbar($$payload) {
  $$payload.out += `<div class="navbar svelte-5gfmyf"><img class="logo svelte-5gfmyf"${attr("src", image)} alt="LEAP Logo"></div>`;
}
function Main($$payload, $$props) {
  push();
  let estimatedCost = writable(0);
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
