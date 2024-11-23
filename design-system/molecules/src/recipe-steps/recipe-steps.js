import { GenericComponent } from "../../../_genericComponent.js";

class RecipeSteps extends GenericComponent {
  steps = [];
  templateFn = () => {
    let result = "<ul>";
    for (const step of this.steps) {
      result += `<li><recipe-step>${step}</recipe-step></òl>`;
    }
    return result + "</ul>";
  };
  stylesheet = "/design-system/molecules/src/recipe-steps/recipe-steps.css";

  static observedAttributes = ["steps"];
  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "steps" && newValue) this.steps = JSON.parse(atob(newValue));
    this.render();
  }
}

customElements.define("recipe-steps", RecipeSteps);
