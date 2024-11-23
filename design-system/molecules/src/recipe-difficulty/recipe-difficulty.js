import { GenericComponent } from "../../../_genericComponent.js";

class RecipeDifficulty extends GenericComponent {
  templateFn = () => {
    return `<simple-tag class="${this.getDifficultyClass(
      this.getAttribute("difficulty")
    )}"> ${this.getDifficultySymbol(
      this.getAttribute("difficulty")
    )} ${this.getAttribute("difficulty")}</simple-tag>
    <dialog>test</dialog>`;
  };
  stylesheet =
    "/design-system/molecules/src/recipe-difficulty/recipe-difficulty.css";

  static observedAttributes = ["difficulty"];

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("simple-tag")
      .addEventListener("click", () => {
        this.openDialog();
      });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  getDifficultySymbol(difficulty) {
    switch (difficulty) {
      case "Facile":
        return "👨‍🍳";
      case "Media":
        return "👨‍🍳👨‍🍳";
      case "Difficile":
        return "👨‍🍳👨‍🍳👨‍🍳";
      default:
        return "";
    }
  }

  getDifficultyClass(difficulty) {
    switch (difficulty) {
      case "Facile":
        return "easy";
      case "Media":
        return "medium";
      case "Difficile":
        return "hard";
      default:
        return "";
    }
  }

  openDialog() {
    this.shadowRoot.querySelector("dialog").showModal();
  }
}

customElements.define("recipe-difficulty", RecipeDifficulty);
