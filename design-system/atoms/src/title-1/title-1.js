import { GenericComponent } from "../../../_genericComponent.js";

class Title1 extends GenericComponent {
  templateFn = () => `<h1><slot></slot></h1>`;
  stylesheet = "/design-system/atoms/src/title-1/title-1.css";

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}
}

customElements.define("title-1", Title1);
