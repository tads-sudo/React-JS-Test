export const BLUE = "#0057d8";
export const RED = "#cc0002";
export const BLACK = "#000000";
export const WHITE = "#ffffff";
export const GRAY = "#9E9894";

export const color = {
  PRIMARY: BLUE,
  ERROR: RED,
  BLACK,
  WHITE,
  GRAY,
};

export const button_sizes = {
  XS: {
    padding: "4px 12px",
    width: "none",
  },
  SM: {
    padding: "8px 24px",
    width: "none",
  },
  MD: {
    padding: "10px 30px",
    width: "none",
  },
  LG: {
    padding: "12px 36px",
    width: "none",
  },
  XL: {
    padding: "18px 54px",
    width: "none",
  },
  STRETCH_XS: {
    padding: "4px 12px",
    width: "100%",
  },
  STRETCH_SM: {
    padding: "8px 24px",
    width: "100%",
  },
  STRETCH_MD: {
    padding: "10px 30px",
    width: "100%",
  },
  STRETCH_LG: {
    padding: "12px 36px",
    width: "100%",
  },
  STRETCH_XL: {
    padding: "18px 54px",
    width: "100%",
  },
};

export const button_spacing = {
  4: "4px",
  8: "8px",
};

export const button_borders = {
  0: "0",
  8: "8px",
  16: "16px",
  32: "32px",
};

export const button_types = {
  FILL: {
    border: "none",
  },
  OUTLINE: {
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  GHOST: {
    backgroundColor: "transparent",
    border: "none",
  },
};

export const SCREEN_MOBILE = { MIN: 320, MAX: 540 };
export const SCREEN_TABLET = { MIN: 541, MAX: 1024 };
export const SCREEN_DESKTOP = { MIN: 1025, MAX: 0 };
