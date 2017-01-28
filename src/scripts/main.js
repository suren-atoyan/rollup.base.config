// Import styles
import './styles/main.css';

import {sum, div} from './modules/mod.01.js';

import User from './modules/mod.02.js';

// Add a debugger
import debug from 'debug';
const log = debug('app:log');
// Disable logging in production
if (ENV !== 'production') {
  debug.enable('*');

  // For live reload
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>');
} else {
  debug.disable();
}

var user_001 = new User('Suren', 'Atoyan', 23);

document.getElementById('test_result').innerHTML = user_001.sayHello();

log('Log ::: Sum 4,5 ::: ', sum(4, 5));
log('Log ::: Div 4,5 ::: ', div(4, 5));