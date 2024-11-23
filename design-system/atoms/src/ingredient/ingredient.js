import { GenericComponent } from "../../../_genericComponent.js";

class Ingredient extends GenericComponent {
  templateFn = () => {
    const name = this.getAttribute("name");
    const quantity = this.getAttribute("quantity");
    return `${name} - ${quantity}`;
  };
  stylesheet = "/design-system/atoms/src/ingredient/ingredient.css";

  static observedAttributes = ["name", "quantity"];

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define("recipe-ingredient", Ingredient);
