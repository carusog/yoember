import { match, gte, and } from "@ember/object/controller";
import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',
  message: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('message.length', '5'),
  isDisabled: and('isValidEmail', 'isValidMessage'),

  actions: {

    sendMessage() {
      console.log('sending message');
    }
  }

});
