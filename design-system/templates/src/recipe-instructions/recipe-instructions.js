import { GenericComponent } from "../../../_genericComponent.js";

class RecipeInstructions extends GenericComponent {
  recipe = {};
  templateFn = () => {
    if (!!this.recipe.ingredients && !!this.recipe.preparation)
      return `
      <header>
        <title-3>${this.recipe.name}</title-3>
        <recipe-metadata timing="${this.recipe.preparation_time}" difficulty="${
        this.recipe.difficulty
      }"></recipe-metadata>
      </header>

      <main>
         <recipe-ingredients
        ingredients="${btoa(JSON.stringify(this.recipe.ingredients))}">
      </recipe-ingredients>

      <recipe-steps steps="${btoa(
        JSON.stringify(this.recipe.preparation)
      )}"></recipe-steps>
      </main>`;
    return "Seleziona una ricetta per visualizzarne le istruzioni";
  };

  stylesheet =
    "/design-system/templates/src/recipe-instructions/recipe-instructions.css";

  static observedAttributes = ["recipe"];

  constructor() {
    super();
    this.init();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "recipe" && !!newValue)
      this.recipe = JSON.parse(atob(newValue));
    this.render();
  }

  connectedCallback() {}
}

customElements.define("recipe-instructions", RecipeInstructions);
