import './app.element.scss';
import template from '!!raw-loader!./app.element.html';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'nx-conf-demo';
    this.innerHTML = template.replace('${title}', title);
  }
}

customElements.define('yonatan-root', AppElement);
