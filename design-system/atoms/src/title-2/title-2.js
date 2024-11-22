import { GenericComponent } from "../../../_genericComponent.js";

class Title2 extends GenericComponent {
  templateFn = () => `<h2><slot></slot></h2>`;
  stylesheet = "./design-system/atoms/src/title-1/title-1.css";

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}
}

customElements.define("title-2", Title2);
