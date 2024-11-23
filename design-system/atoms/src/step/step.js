import { GenericComponent } from "../../../_genericComponent.js";

class Step extends GenericComponent {
  templateFn = () => `<p><slot></slot></p>`;
  stylesheet = "/design-system/atoms/src/step/step.css";

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}
}

customElements.define("recipe-step", Step);
