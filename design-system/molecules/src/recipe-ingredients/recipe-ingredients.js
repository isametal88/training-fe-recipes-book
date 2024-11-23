import { GenericComponent } from "../../../_genericComponent.js";

class IngredientsList extends GenericComponent {
  ingredients = [];
  templateFn = () => {
    let result = "<ul>";
    for (const ingredient of this.ingredients) {
      result += `<li><recipe-ingredient name="${ingredient.name}" quantity="${ingredient.quantity}"></recipe-ingredient></li>`;
    }
    return result + "</ul>";
  };
  stylesheet =
    "/design-system/molecules/src/recipe-ingredients/recipe-ingredients.css";

  static observedAttributes = ["ingredients"];
  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "ingredients" && !!newValue)
      this.ingredients = JSON.parse(atob(newValue));
    this.render();
  }
}

customElements.define("recipe-ingredients", IngredientsList);
