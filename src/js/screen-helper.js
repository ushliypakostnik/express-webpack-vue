// Модуль экранный помощник
const ScreenHelper = (() => {
  /* eslint-disable no-unused-vars */
  const NAME = 'ScreenHelper';

  const XS = 360;
  const SM = 768;
  const MD = 992;
  const LG = 1200;

  function isXS() {
    return window.matchMedia(`(max-width: ${SM - 1}px)`).matches;
  }

  function isSM() {
    return window.matchMedia(`(min-width: ${SM}px) and (max-width: ${MD - 1}px)`).matches;
  }

  function isMD() {
    return window.matchMedia(`(min-width: ${MD}px) and (max-width: ${LG - 1}px)`).matches;
  }

  function isDesktop() {
    return window.matchMedia(`(min-width: ${MD}px)`).matches;
  }

  function isLG() {
    return window.matchMedia(`(min-width: ${LG}px)`).matches;
  }

  return {
    isXS,
    isSM,
    isMD,
    isLG,
    isDesktop,
  };
})();

export default ScreenHelper;
