import { GenericComponent } from "../../../_genericComponent.js";

class RecipeInstructions extends GenericComponent {
  templateFn = () =>
    `<div class="recipe"><slot></slot>${this.getAttribute("people")}</div>`;
  stylesheet =
    "./design-system/organisms/src/recipe-instructions/recipe-instructions.css";

  static observedAttributes = ["people"];

  constructor() {
    super();
    this.init();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );
    this.render();
  }

  connectedCallback() {}
}

customElements.define("recipe-instructions", RecipeInstructions);
