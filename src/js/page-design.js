import path from 'path';
import Logger from './logger';

let logger = new Logger(path.basename(__filename, '.js'));

/*const PageDesign = (() => {

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
PageDesign.init();*/


class PageDesign {
  constructor() {
  }

  redraw = () => {
    logger.info('redraw');
  }

  init = () => {
    logger.info('init');
    window.onresize = this.redraw;
  }
}

export default PageDesign;

/*где-то:
const page = new PageDesign('PageDesign');
page.init();*/
