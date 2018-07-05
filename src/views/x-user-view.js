import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components';

class XUserView extends View {
  get template () {
    return require('./x-user-view.html');
  }
}

define('x-user-view', XUserView);
