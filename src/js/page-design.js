import path from 'path';
import Logger from './logger';

const logger = new Logger(path.basename(__filename, '.js')); // eslint-disable-line no-unused-vars

/* const PageDesign = (() => {
  const NAME = 'PageDesign';

  const redraw = () => {
    logger.info('redraw');
  }

  const init = () => {
    logger.info('init');

    window.addEventListener('resize', () => redraw());
  };

  return {
    init,
    redraw
  };
})();

export default PageDesign;

где-то:
PageDesign.init(); */
