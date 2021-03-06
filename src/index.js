import normalizeCss from 'normalize.css'; /* eslint no-unused-vars: 0 */
import animateCss from 'animate.css'; /* eslint no-unused-vars: 0 */
import FastClick from 'fastclick';

import commonCss from './common.scss'; /* eslint no-unused-vars: 0 */
import indexCss from './index.scss'; /* eslint no-unused-vars: 0 */
import utils from './utils';

const init = function initApp() {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', () => {
      FastClick.attach(document.body);
    }, false);
  }

  const initAnimation = function initAnimation() {
    setTimeout(() => {
      const btn = document.getElementById('startNow');
      btn.className += ' animated tada ready';
    }, 2000);

    setTimeout(() => {
      const welcome = document.getElementById('welcome');
      const instruction = document.getElementById('instruction');

      if (window.scrollY === 0) {
        instruction.className += ' noScroll';
      }

      welcome.className += ' ready';
      instruction.className += ' pop';
    }, 1500);
  };

  initAnimation();

  utils.report('workflow', 'initIndex');
};

init();
