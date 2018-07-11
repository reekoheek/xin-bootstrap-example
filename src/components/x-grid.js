import { define, Component } from '@xinix/xin';

import './x-grid.scss';

class XGrid extends Component {
  ready () {
    super.ready();

    let thead = document.importNode(this.$.header.querySelector('thead'), true);
    this.$.body.querySelector('table').insertBefore(thead, this.$.body.querySelector('table').children[0]);

    this.async(() => {
      let width = this.$$('#header table').offsetWidth;
      this.$.header.style.width = width + 'px';
      this.$.body.style.width = width + 'px';
    }, 300);
  }
}

define('x-grid', XGrid);
