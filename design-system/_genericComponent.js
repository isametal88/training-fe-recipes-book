export class GenericComponent extends HTMLElement {
  templateFn() {}
  stylesheet;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  init() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(this.createStylesheet(this.stylesheet));
    this.shadowRoot.appendChild(
      this.createTemplate(this.templateFn()).content.cloneNode(true)
    );
  }

  getTemplate() {
    return this.template;
  }

  createTemplate(template) {
    const templateElem = document.createElement("template");
    templateElem.innerHTML = template;
    return templateElem;
  }

  createStylesheet(stylesheet) {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", stylesheet);
    return linkElem;
  }
}
