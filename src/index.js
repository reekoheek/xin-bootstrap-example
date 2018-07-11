import '@webcomponents/custom-elements';

import 'bootstrap/dist/css/bootstrap.css';
import './scss/site.scss';
import 'open-iconic/font/css/open-iconic-bootstrap.css';

import 'bootstrap';

import { bootstrap } from '@xinix/xin';

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

  await import('./components/x-app');

  document.addEventListener('started', () => {
    setTimeout(() => {
      document.body.removeAttribute('unresolved');
    }, 100);
  });
})();
