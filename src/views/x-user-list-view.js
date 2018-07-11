import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components';

import '../components/x-grid';
import '../components/x-pagination';

class XUserListView extends View {
  get template () {
    return require('./x-user-list-view.html');
  }

  get props () {
    return Object.assign({}, super.props, {
      rows: {
        type: Array,
        value: () => ([]),
      },

      skip: {
        type: Number,
      },

      limit: {
        type: Number,
        value: 10,
      },

      count: {
        type: Number,
      },
    });
  }

  focusing (parameters) {
    super.focusing(parameters);

    let skip = parameters.skip ? Number(parameters.skip) : 0;
    let limit = parameters.limit ? Number(parameters.limit) : this.limit;

    // FIXME: mocked
    let count = 15;
    let entries = [
      {
        firstname: 'Foo',
        username: 'foo',
      },
      {
        firstname: 'Bar',
        username: 'bar',
      },
      {
        firstname: 'Baz',
        username: 'baz',
      },
    ];

    this.set('rows', entries);
    this.set('count', count);
    this.set('skip', skip);
    this.set('limit', limit);
  }
}

define('x-user-list-view', XUserListView);
