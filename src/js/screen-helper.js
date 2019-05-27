// Модуль помощник
const ScreenHelper = (() => {
  /* eslint-disable no-unused-vars */
  const NAME = 'BootstrapHelper';

  const SM = 576;
  const MD = 768;
  const LG = 992;
  const XL = 1200;

  function isXS() {
    return window.matchMedia(`(max-width: ${SM - 1}px)`).matches;
  }

  function isSM() {
    return window.matchMedia(
      `(min-width: ${SM}px) and (max-width: ${MD - 1}px)`).matches;
  }

  function isMD() {
    return window.matchMedia(
      `(min-width: ${MD}px) and (max-width: ${LG - 1}px)`).matches;
  }

  function isLG() {
    return window.matchMedia(
      `(min-width: ${LG}px) and (max-width: ${XL - 1}px)`).matches;
  }

  function isXL() {
    return window.matchMedia(`(min-width: ${XL}px)`).matches;
  }

  return {
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
  };
})();