import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'blox-connect';

/**
 * `blox-settings`
 * description
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxSettings extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <blox-connect eos="{{eos}}"></blox-connect>
      <template is="dom-if" if="{{join}}">
      <p>join</p>
      </template>
    `;
  }
  static get properties() {
    return {
      net: {
        type: String,
      },
      screen: {
        type: String,
        observer: '_screen'
      },
      url: {
        type: String,
      },
      ui: {
        type: Boolean,
        value: false,
      },
      eos: {
        type: Object,
      },
    };
  }

  _screen(){
    if (this.screen === 'join') {
      this.join = true;
    } else {
      this.join = false;
    }
  }

} window.customElements.define('blox-settings', BloxSettings);
