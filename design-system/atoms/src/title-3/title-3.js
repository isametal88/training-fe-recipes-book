import { GenericComponent } from "../../../_genericComponent.js";

class Title3 extends GenericComponent {
  templateFn = () => `<h3><slot></slot></h3>`;
  stylesheet = "/design-system/atoms/src/title-3/title-3.css";

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}
}

customElements.define("title-3", Title3);
