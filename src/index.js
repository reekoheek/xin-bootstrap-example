import '@webcomponents/custom-elements';
import { bootstrap, Filter } from '@xinix/xin';

import 'bootstrap/dist/css/bootstrap.css';
import './scss/site.scss';
import 'open-iconic/font/css/open-iconic-bootstrap.css';

import 'bootstrap';

(async function () {
  bootstrap({
    // 'customElements.version': 'v0',
    // 'env.debug': true,
    'view.transitionIn': 'fade',
    'view.transitionOut': 'fade',
    'view.loaders': [
      {
        test: /^x-/,
        load (view) {
          return import(`./views/${view.name}`);
        },
      },
    ],
  });

  Filter.put('showLink', require('./filters/show-link').default());

  await import('./components/x-app');

  document.addEventListener('started', () => {
    setTimeout(() => {
      document.body.removeAttribute('unresolved');
    }, 100);
  });
})();
