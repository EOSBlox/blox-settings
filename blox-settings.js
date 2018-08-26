import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';
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
    button:hover {
        border: 1px solid #D3D5DA;
        background: #F0F0F1;
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
        width: 20px;
        height: 18px;
        background: url(../images/checkbox.svg) no-repeat;
        background-size: contain;
        vertical-align: middle;
        cursor: pointer;
        margin-top: 24px;
        outline:0;
        border: 0;
        padding:0;
        min-width:20px;
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
    .avatar-container{
      display:flex;
      border-bottom: 1px solid #CACCCF;
    }
    .avatar-container-single{
      display:flex;
    }
    .counter-container{
      display: flex;
      justify-content: space-between;
    }
    .avatar{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 10px 10px 10px 30px;
      background: url(../images/avatar.svg) no-repeat;
      background-size: contain;
      vertical-align: middle;
    }
    .avatar-large{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 10px;
      background: url(../images/avatar.svg) no-repeat;
      background-size: contain;
      vertical-align: middle;
      margin: 0 auto;
    }
    a{
      text-decoration: none;
    }
    h1 {
      margin: 10;
      font-size: 23px;
      color: #393d4d;
      margin-left: 8px;
    }
    .small{
      font-size: 13px;
      font-weight: 400;
      color: #9da1ab;
      position: relative;
      top: -7px;
    }
    .edit-container{
      text-align: center;
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
          <small class="comment">8 or more charectors </small>
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

      <template is="dom-if" if="{{login}}">
        <label for="join_password">Password</label>
        <input type="password" name="login_password" id="login_password" value="{{loginPassword::input}}" on-keyup="_loginPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{loginPasswordLength}}">
            <small class="comment"> ({{loginPasswordLength}})</small>
          </template>
        </div>
        <button type="button">Login</button>
      </template>

      <template is="dom-if" if="{{logout}}">
        <label for="join_password">Password</label>
        <input type="password" name="logout_password" id="logout_password" value="{{logoutPassword::input}}" on-keyup="_logoutPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{logoutPasswordLength}}">
            <small class="comment"> ({{logoutPasswordLength}})</small>
          </template>
        </div>
        <button type="button">Logout</button>
      </template>

      <template is="dom-if" if="{{deleteProfile}}">
        <label for="deleteProfile_password">Password</label>
        <input type="password" name="deleteProfile_password" id="deleteProfile_password" value="{{deleteProfilePassword::input}}" on-keyup="_deleteProfilePassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{deleteProfilePasswordLength}}">
            <small class="comment"> ({{deleteProfilePasswordLength}})</small>
          </template>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="password" id="accept_deleteProfile" value="{{deleteProfileCheckbox::input}}" on-mousedown="_deleteProfileCheckbox"> 
          <label for="accept_deleteProfile" class="checkbox-label">I accept that by deleting this profile I will loose access to it.
        </div>
        <button type="button">Delete Profile</button>
      </template>

      <template is="dom-if" if="{{deleteAccount}}">
        <div class="checkbox-container">
          <input type="checkbox" name="password" id="accept_deleteAccount" value="{{deleteAccountCheckbox::input}}" on-mousedown="_deleteAccountCheckbox"> 
          <label for="accept_deleteAccount" class="checkbox-label">I accept that by deleting this account I will loose access to all profiles within.
        </div>
        <button type="button">Delete Account</button>
      </template>

      <template is="dom-if" if="{{add}}">
        <label for="add_username">Username</label>
        <input type="text" name="add_username" id="add_username" value="{{addUsername::input}}" on-keyup="_addUsername">
        <div class="counter-container">
        <small class="comment">Exactly 12 characters </small>
        <template is="dom-if" if="{{addUsernameLength}}">
          <small class="comment"> ({{addUsernameLength}}/12)</small>
        </template>
        </div>
        <label for="add_password">Password</label>
        <input type="password" name="add_password" id="add_password" value="{{addPassword::input}}" on-keyup="_addPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{addPasswordLength}}">
            <small class="comment"> ({{addPasswordLength}})</small>
          </template>
        </div>
        <button type="button">Add Profile</button>
      </template>

      <template is="dom-if" if="{{backup}}">
        <template is="dom-if" if="{{backupUnlocked}}">
          <label for="backup_username">Username</label>
          <input type="text" name="backup_username" id="backup_username" value="{{backupUsername::input}}">
          <label for="backup_activePublicKey">Active Public Key</label>
          <input type="text" name="backup_activePublicKey" id="backup_activePublicKey" value="{{activePublicKey::input}}">
          <label for="backup_activePrivateKey">Active Private key</label>
          <input type="text" name="backup_activePrivateKey" id="backup_activePrivateKey" value="{{activePrivateKey::input}}">
          <label for="backup_ownerPublicKey">Owner Public Key</label>
          <input type="text" name="backup_ownerPublicKey" id="backup_ownerPublicKey" value="{{ownerPublicKey::input}}">
          <label for="backup_ownerPrivateKey">Owner Private Key</label>
          <input type="text" name="backup_ownerPrivateKey" id="backup_ownerPrivateKey" value="{{ownerPrivateKey::input}}">
        </template>
        <label for="backup_password">Password</label>
        <input type="password" name="backup_password" id="backup_password" value="{{backupPassword::input}}" on-keyup="_backupPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{backupPasswordLength}}">
            <small class="comment"> ({{backupPasswordLength}})</small>
          </template>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="password" id="accept_backup" value="{{backupCheckbox::input}}" on-mousedown="_backupCheckbox"> 
          <label for="accept_backup" class="checkbox-label">I accept that by sharing my private key I risk loosing control of my account.
        </div>
        <button type="button">Show Backup Details</button>
        <template is="dom-if" if="{{backupUnlocked}}">
          <button type="button">Copy All</button>
        </template>
      </template>

      <template is="dom-if" if="{{import}}">
        <label for="import_private_key">Private Key</label>
        <input type="text" name="import_private_key" id="import_private_key" value="{{importPrivateKey::input}}" on-keyup="_importPrivateKey">
        <div class="counter-container">
        <small class="comment">Exactly 52 characters </small>
        <template is="dom-if" if="{{importPrivateKeyLength}}">
          <small class="comment"> ({{importPrivateKeyLength}}/52)</small>
        </template>
        </div>
        <label for="import_password">Password</label>
        <input type="password" name="import_password" id="import_password" value="{{importPassword::input}}" on-keyup="_importPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{importPasswordLength}}">
            <small class="comment"> ({{importPasswordLength}})</small>
          </template>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="password" id="dont_forget_password" value="{{importCheckbox::input}}" on-mousedown="_importCheckbox"> 
          <label for="dont_forget_password" class="checkbox-label">I understand that if I forget or lose this password there is no other way of accessing this account.</label>
        </div>
        <button type="button">Import Profile</button>
      </template>

      <template is="dom-if" if="{{password}}">
        <label for="old_password">Old Password</label>
        <input type="password" name="old_password" id="old_password" value="{{oldPassword::input}}" on-keyup="_oldPassword">
        <div class="counter-container">
        <small class="comment">8 or more charectors </small>
        <template is="dom-if" if="{{oldPasswordLength}}">
          <small class="comment"> ({{oldPasswordLength}})</small>
        </template>
        </div>
        <label for="new_password">New Password</label>
        <input type="password" name="new_password" id="new_password" value="{{newPassword::input}}" on-keyup="_newPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{newPasswordLength}}">
            <small class="comment"> ({{newPasswordLength}})</small>
          </template>
        </div>
        <label for="confirm_password">Confirm Password</label>
        <input type="password" name="confirm_password" id="confirm_password" value="{{confirmPassword::input}}" on-keyup="_confirmPassword">
        <div class="counter-container">
          <small class="comment">8 or more charectors </small>
          <template is="dom-if" if="{{confirmPasswordLength}}">
            <small class="comment"> ({{confirmPasswordLength}})</small>
          </template>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="password" id="dont_forget_password" value="{{passwordCheckbox::input}}" on-mousedown="_passwordCheckbox"> 
          <label for="dont_forget_password" class="checkbox-label">I understand that if I forget or lose this password there is no other way of accessing this account.</label>
        </div>
        <button type="button">Change Password</button>
      </template>

      <template is="dom-if" if="{{active}}">
        <div class="avatar-container-single">
          <div class="avatar"></div>
          <h1>WillHill1234 </br><small class="small">@willhill1234</small></h1>
        </div>
      </template>

      <template is="dom-if" if="{{select}}">
        <a href="#">
          <div class="avatar-container">
            <div class="avatar"></div>
            <h1>WillHill1234 </br><small class="small">@willhill1234</small></h1>
          </div>
        </a>
        <a href="#">
          <div class="avatar-container">
            <div class="avatar"></div>
            <h1>JamesFishes </br><small class="small">@jamesfishes</small></h1>
          </div>
        </a>
      </template>

      <template is="dom-if" if="{{edit}}">
        <div class="edit-container">
          <div class="avatar-large"></div>
          <p>Change Photo</p>
        </div>
        <label for="join_username">Username</label>
        <input type="text" name="join_username" id="join_username" value="{{joinUsername::input}}" on-keyup="_joinUsername">
        <button type="button">Save Profile</button>
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
    if (this.screen === 'join') {this.join = true} else {this.join = false}
    if (this.screen === 'login') {this.login = true} else {this.login = false}
    if (this.screen === 'deleteAccount') {this.deleteAccount = true} else {this.deleteAccount = false}
    if (this.screen === 'deleteProfile') {this.deleteProfile = true} else {this.deleteProfile = false}
    if (this.screen === 'add') {this.add = true} else {this.add = false}
    if (this.screen === 'backup') {this.backup = true} else {this.backup = false}
    if (this.screen === 'import') {this.import = true} else {this.import = false}
    if (this.screen === 'password') {this.password = true} else {this.password = false}
    if (this.screen === 'active') {this.active = true} else {this.active = false}
    if (this.screen === 'select') {this.select = true} else {this.select = false}
    if (this.screen === 'edit') {this.edit = true} else {this.edit = false}
    if (this.screen === 'logout') {this.logout = true} else {this.logout = false}
  }


  //------------------------------------ JOIN
  _joinUsername(){
    this.joinUsernameLength = this.joinUsername.length
  }
  _joinPassword(){
    this.joinPasswordLength = this.joinPassword.length
  }
  _joinCheckbox(){
    if(this.joinCheckbox === undefined && this.joinCheckboxValue === undefined){
      this.joinCheckboxValue = true
    } else {
      this.joinCheckboxValue = !this.joinCheckboxValue;
    }
    if(this.joinCheckboxValue){
      this.updateStyles({'--btnOpacity': 1});
      this.updateStyles({'--btnCursor': 'pointer'});
    } else {
      this.updateStyles({'--btnOpacity': 0.3});
      this.updateStyles({'--btnCursor': 'not-allowed)'});
    }
  }
  //------------------------------------ LOGIN

  _loginPassword(){
    this.loginPasswordLength = this.loginPassword.length
    if(this.loginPasswordLength >= 8){
      this.updateStyles({'--btnOpacity': 1});
      this.updateStyles({'--btnCursor': 'pointer'});
    } else {
      this.updateStyles({'--btnOpacity': 0.3});
      this.updateStyles({'--btnCursor': 'not-allowed)'});
    }
  }

  //------------------------------------ LOG OUT

  _logoutPassword(){
    this.logoutPasswordLength = this.logoutPassword.length
    if(this.logoutPasswordLength >= 8){
      this.updateStyles({'--btnOpacity': 1});
      this.updateStyles({'--btnCursor': 'pointer'});
    } else {
      this.updateStyles({'--btnOpacity': 0.3});
      this.updateStyles({'--btnCursor': 'not-allowed)'});
    }
  }

  //------------------------------------ DeleteAccount


  _deleteAccountCheckbox(){
    if(this.deleteAccountCheckbox === undefined && this.deleteAccountCheckboxValue === undefined){
      this.deleteAccountCheckboxValue = true
    } else {
      this.deleteAccountCheckboxValue = !this.deleteAccountCheckboxValue;
    }
    if(this.deleteAccountCheckboxValue){
      this.updateStyles({'--btnOpacity': 1});
      this.updateStyles({'--btnCursor': 'pointer'});
    } else {
      this.updateStyles({'--btnOpacity': 0.3});
      this.updateStyles({'--btnCursor': 'not-allowed)'});
    }

  }

    //------------------------------------ DeleteProfile

    _deleteProfilePassword(){
      this.deleteProfilePasswordLength = this.deleteProfilePassword.length
    }
    _deleteProfileCheckbox(){
      if(this.deleteProfileCheckbox === undefined && this.deleteProfileCheckboxValue === undefined){
        this.deleteProfileCheckboxValue = true
      } else {
        this.deleteProfileCheckboxValue = !this.deleteProfileCheckboxValue;
      }
      if(this.deleteProfileCheckboxValue){
        this.updateStyles({'--btnOpacity': 1});
        this.updateStyles({'--btnCursor': 'pointer'});
      } else {
        this.updateStyles({'--btnOpacity': 0.3});
        this.updateStyles({'--btnCursor': 'not-allowed)'});
      }
    }
  
  //------------------------------------ Add
  _addUsername(){
    this.addUsernameLength = this.addUsername.length;
    this._addBtn();
  }
  _addPassword(){
    this.addPasswordLength = this.addPassword.length;
    this._addBtn();
  }
  _addBtn(){
    if(this.addUsernameLength === 12 && this.addPasswordLength >= 8){
      this.updateStyles({'--btnOpacity': 1});
      this.updateStyles({'--btnCursor': 'pointer'});
    } else {
      this.updateStyles({'--btnOpacity': 0.3});
      this.updateStyles({'--btnCursor': 'not-allowed)'});
    }
  }
  //------------------------------------ Backup

    _backupPassword(){
      this.backupPasswordLength = this.backupPassword.length
    }
    _backupCheckbox(){
      if(this.backupCheckbox === undefined && this.backupCheckboxValue === undefined){
        this.backupCheckboxValue = true
      } else {
        this.backupCheckboxValue = !this.backupCheckboxValue;
      }
      if(this.backupCheckboxValue){
        this.updateStyles({'--btnOpacity': 1});
        this.updateStyles({'--btnCursor': 'pointer'});
      } else {
        this.updateStyles({'--btnOpacity': 0.3});
        this.updateStyles({'--btnCursor': 'not-allowed)'});
      }
    }

//------------------------------------ Import

    _importPrivateKey(){
      this.importPrivateKeyLength = this.importPrivateKey.length
    }
    _importPassword(){
      this.importPasswordLength = this.importPassword.length
    }
    _importCheckbox(){
      if(this.importCheckbox === undefined && this.importCheckboxValue === undefined){
        this.importCheckboxValue = true
      } else {
        this.importCheckboxValue = !this.importCheckboxValue;
      }
      if(this.importCheckboxValue){
        this.updateStyles({'--btnOpacity': 1});
        this.updateStyles({'--btnCursor': 'pointer'});
      } else {
        this.updateStyles({'--btnOpacity': 0.3});
        this.updateStyles({'--btnCursor': 'not-allowed)'});
      }
    }

  //------------------------------------ Password

  _oldPassword(){
    this.oldPasswordLength = this.oldPassword.length
  }
  _newPassword(){
    this.newPasswordLength = this.newPassword.length
  }
  _confirmPassword(){
    this.confirmPasswordLength = this.confirmPassword.length
  }
  _passwordCheckbox(){
    if(this.passwordCheckbox === undefined && this.passwordCheckboxValue === undefined){
      this.passwordCheckboxValue = true
    } else {
      this.passwordCheckboxValue = !this.passwordCheckboxValue;
    }
    if(this.passwordCheckboxValue){
      this.updateStyles({'--btnOpacity': 1});
      this.updateStyles({'--btnCursor': 'pointer'});
    } else {
      this.updateStyles({'--btnOpacity': 0.3});
      this.updateStyles({'--btnCursor': 'not-allowed)'});
    }
  }


} window.customElements.define('blox-settings', BloxSettings);
