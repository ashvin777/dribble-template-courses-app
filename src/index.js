import {LitElement, html, property} from '@polymer/lit-element';

class MyElement extends LitElement {

  static get properties() {
    return {
      foot: { type: String },
      whales: { type: Number}
    };
  }

  constructor() {
    super();
    this.addEventListener('click', async (e) => {
      this.whales++;
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
    });
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${this.foo}</h4>
      <div>whales: ${'🐳'.repeat(this.whales)}</div>
      <slot></slot>
    `;
  }

}
customElements.define('my-element', MyElement);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
  <my-element whales="5">hi</my-element>
  `;


  // let element = document.getElementById('test');
  // let i = 0;

  // setInterval(() => {
  //   element.setAttribute('mood', i++);
  // }, 1);
});