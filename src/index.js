// Way 1 - very large bundle
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
// import '@fortawesome/fontawesome-free/js/regular';
// import '@fortawesome/fontawesome-free/js/brands';

// Way 2 - very large bundle too

// Solid
// https://fontawesome.com/icons?d=gallery&s=solid&m=free
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Regular
// https://fontawesome.com/icons?d=gallery&s=regular&m=free
// import { far } from '@fortawesome/free-regular-svg-icons'

// Brands
// https://fontawesome.com/icons?d=gallery&s=brands&m=free
// import { fab } from '@fortawesome/free-brands-svg-icons'

// Way 3 - optimize
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Favicon from './images/favicon.jpg'; // eslint-disable-line no-unused-vars

import './styles/_stylebase.scss';
// import someimage from './images/layout/someimagе.png';
// import somescript from './js/somescript';

library.add(faPhone, faEnvelope, faPaperPlane);

dom.i2svg(); // automatically find any <i> tags in the page and replace those with <svg> elements
// dom.watch(); // if content is dynamic

console.log('Hello!');

if (module.hot) {
  module.hot.accept();
}
