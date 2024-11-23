import { GenericComponent } from "../../../_genericComponent.js";

class RecipeTiming extends GenericComponent {
  templateFn = () => {
    return `<simple-tag> &#9202; ${this.getAttribute("timing")}</simple-tag>`;
  };
  stylesheet = "/design-system/molecules/src/recipe-timing/recipe-timing.css";

  static observedAttributes = ["timing"];

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define("recipe-timing", RecipeTiming);
