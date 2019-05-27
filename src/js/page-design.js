/*const PageDesign = (() => {
  const NAME = 'PageDesign';

  const redraw = () => {
    console.log(NAME + ' redraw');
  }

  const init = () => {
    console.log(NAME + ' init');

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
    console.log(this.name + ' redraw');
  }

  init() {
    console.log(this.name + ' init');
    window.onresize = this.redraw;
  }
}

export default PageDesign;