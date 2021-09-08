import styles from './app.element.scss';
import template from '!!raw-loader!./app.element.html';

const stylesElement = document.createElement('style');
stylesElement.innerHTML = styles;

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'nx-conf-demo';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template.replace('${title}', title);
    this.shadowRoot.append(stylesElement);
  }
}

customElements.define('yonatan-root', AppElement);
