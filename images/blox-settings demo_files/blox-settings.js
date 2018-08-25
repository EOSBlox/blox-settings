import { html, PolymerElement } from "./node_modules/@polymer/polymer/polymer-element.js";
import { updateStyles } from "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js";
import "./node_modules/blox-connect/blox-connect.js";
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
        input {
        -webkit-appearance: none;
        line-height: 19px;
        border: 1px solid #CACCCF;
        border-radius: 2px;
        font-size: 13px;
        background: #FEFEFE;
        color: #393D4D;
        padding: 7px 8px;
        background: #F0F1F3;
        display: block;
        width: 100%;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .02);
        border-color: #C9CCD0 #CFD2D6 #CFD2D6;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        outline:0;
    }
    button {
        margin-top:17px;
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        font-weight: bold;
        padding: 0 12px;
        line-height: 36px;
        font-size: 14px;
        border: 1px solid;
        border-radius: 3px;
        color: #5A616F;
        text-shadow: 0 1px 0 #FFF;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        border-color: #d1d3d6 #d2d3d5 #bdbec0;
        background: #F4F4F5;
        background: -webkit-linear-gradient(top, #FFF, #F6F7F8);
        background: -ms-linear-gradient(top, #FFFFFF, #f9f9f9);
        background: -moz-linear-gradient(top, #FFFFFF, #f9f9f9);
        background: -o-linear-gradient(top, #FFFFFF, #f9f9f9);
        filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#f9f9f9');
        outline:0;
        opacity: var(--btnOpacity, 0.3);
        cursor: var(--btnCursor, not-allowed);
    }
    label {
        display: block;
        font-size: 12px;
        color: #393d4d;
        font-weight: bold;
        padding: 24px 0 7px;
        width: 340px;
    }
    .comment {
        display: block;
        line-height: 18px;
        color: #9da1ab;
        padding: 5px 0 0;
        margin: 0 0 -2px 0;
        font-size: 12px;
    }
    input[type="checkbox"] {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        background: url(../images/checkbox.svg) no-repeat;
        background-size: contain;
        vertical-align: middle;
        cursor: pointer;
        margin-top: 24px;
        outline:0;
        border: 0;
        padding:0;
    }
    input[type="checkbox"]:checked {
        background-image: url(../images/checkbox-selected.svg);
        outline:0;
    }
    .checkbox-label {
        color: #9da1ab;
        padding: 0 0 0 3px;
        line-height: 20px;
        margin: 23px 0 0;
        width: auto;
        font-weight: 400;
    }
    .checkbox-container{
      display:flex;
    }
    .counter-container{
      display: flex;
      justify-content: space-between;
    }
      </style>

      <blox-connect eos="{{eos}}"></blox-connect>

      <template is="dom-if" if="{{join}}">
        <label for="join_username">Username</label>
        <input type="text" name="join_username" id="join_username" value="{{joinUsername::input}}" on-keyup="_joinUsername">
        <div class="counter-container">
        <small class="comment">Exactly 12 characters </small>
        <template is="dom-if" if="{{joinUsernameLength}}">
          <small class="comment"> ({{joinUsernameLength}}/12)</small>
        </template>
        </div>
        <label for="join_password">Password</label>
        <input type="password" name="join_password" id="join_password" value="{{joinPassword::input}}" on-keyup="_joinPassword">
        <div class="counter-container">
          <small class="comment">More than 8 charectors </small>
          <template is="dom-if" if="{{joinPasswordLength}}">
            <small class="comment"> ({{joinPasswordLength}})</small>
          </template>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="password" id="dont_forget_password" value="{{joinCheckbox::input}}" on-mousedown="_joinCheckbox"> 
          <label for="dont_forget_password" class="checkbox-label">I understand that if I forget or lose this password there is no other way of accessing this account.</label>
        </div>
        <button type="button">Join</button>
      </template>
    `;
  }

  static get properties() {
    return {
      net: {
        type: String
      },
      screen: {
        type: String,
        observer: '_screen'
      },
      url: {
        type: String
      },
      ui: {
        type: Boolean,
        value: false
      },
      eos: {
        type: Object
      }
    };
  }

  _screen() {
    if (this.screen === 'join') {
      this.join = true;
    } else {
      this.join = false;
    }
  }

  _joinUsername() {
    this.joinUsernameLength = this.joinUsername.length;
  }

  _joinPassword() {
    this.joinPasswordLength = this.joinPassword.length;
  }

  _joinCheckbox() {
    if (this.joinCheckbox === undefined && this.joinCheckboxValue === undefined) {
      this.joinCheckboxValue = true;
    } else {
      this.joinCheckboxValue = !this.joinCheckboxValue;
    }

    if (this.joinCheckboxValue) {
      console.log('on');
      this.updateStyles({
        '--btnOpacity': 1
      });
      this.updateStyles({
        '--btnCursor': 'pointer'
      });
    } else {
      console.log('off');
      this.updateStyles({
        '--btnOpacity': 0.3
      });
      this.updateStyles({
        '--btnCursor': 'not-allowed)'
      });
    }
  }

}

window.customElements.define('blox-settings', BloxSettings);