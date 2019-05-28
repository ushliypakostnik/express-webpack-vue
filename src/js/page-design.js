import path from 'path';
import Logger from './logger';

let logger = new Logger(path.basename(__filename, '.js'));

/*const PageDesign = (() => {
  const NAME = 'PageDesign';

  const redraw = () => {
    logger.info(NAME + ' redraw');
  }

  const init = () => {
    logger.info(NAME + ' init');

    window.addEventListener('resize', () => redraw());
  };

  return {
    init,
    redraw
  };
})();

export default PageDesign;*/


class PageDesign {
  constructor(name) {
    this.name = name;
  }

  redraw = () => {
    logger.info(this.name + ' redraw');
  }

  init = () => {
    logger.info(this.name + ' init');
    window.onresize = this.redraw;
  }
}

export default PageDesign;