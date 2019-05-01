import {
  match,
  not
} from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid')

});
