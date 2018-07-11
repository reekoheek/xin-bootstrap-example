import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components';

class XUserSingleView extends View {
  get template () {
    return require('./x-user-single-view.html');
  }

  get props () {
    return Object.assign({}, super.props, {
      form: {
        type: Object,
        value: () => ({}),
      },
    });
  }

  focusing (parameters) {
    super.focusing(parameters);

    if (parameters.id) {
      throw new Error('Unimplemented yet with param id');
    } else {
      this.set('form', {});
    }
  }

  doSubmit (evt) {
    evt.preventDefault();

    // FIXME: mocked
    this.__app.navigate('/user/list');
  }
}

define('x-user-single-view', XUserSingleView);
