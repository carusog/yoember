import {
  match,
  not
} from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',
  responseMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.emailAddress}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.emailAddress}`);
      this.set('emailAddress', '');
      setTimeout(() => {
        this.set('responseMessage', '');
      }, 3000);
    }

  }

});
