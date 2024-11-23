import { GenericComponent } from "../../../_genericComponent.js";

class Tag extends GenericComponent {
  templateFn = () => `<span><slot></slot></span>`;
  stylesheet = "/design-system/atoms/src/tag/tag.css";

  constructor() {
    super();
    this.init();
  }

  connectedCallback() {}
}

customElements.define("simple-tag", Tag);
