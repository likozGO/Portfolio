import images from './images';

export const IMAGE_COMPARE = {
  first: {
    en: images.EN_FLAG,
    ru: images.RU_FLAG,
    ua: images.UA_FLAG,
  },
  second: {
    default: images.DEFAULT_PALETTE,
    dark: images.DARK_PALETTE,
    white: images.WHITE_PALETTE,
  },
  third: {
    disabled: images.NO_PARTICLES,
    stars: images.STARS_PARTICLES,
    snow: images.SNOW_PARTICLES,
    bubbles: images.BUBBLES_PARTICLES,
  },
};

export default {
  IMAGE_COMPARE,
};
