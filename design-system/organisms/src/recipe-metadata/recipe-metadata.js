import { GenericComponent } from "../../../_genericComponent.js";

class RecipeMetadata extends GenericComponent {
  templateFn = () => {
    return `<recipe-timing timing="${this.getAttribute(
      "timing"
    )}"></recipe-timing>
      <recipe-difficulty difficulty="${this.getAttribute(
        "difficulty"
      )}"></recipe-difficulty>`;
  };
  stylesheet =
    "/design-system/organisms/src/recipe-metadata/recipe-metadata.css";

  static observedAttributes = ["difficulty", "timing"];

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define("recipe-metadata", RecipeMetadata);
