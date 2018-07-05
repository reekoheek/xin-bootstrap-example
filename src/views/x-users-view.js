import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components';

class XUsersView extends View {
  get template () {
    return require('./x-users-view.html');
  }
}

define('x-users-view', XUsersView);
