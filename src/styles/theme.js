export const theme = {
  colors: {
    primaryFontColor: '#212121',
    secondaryFontColor: '#757575',
    witeTextColor: '#ffffff',
    buttonColor: '#2196f3',
    accentColor: '#2196f3',
    iconColor: '#afb1b8',
    borderColorHeader: '#ececec',
    bgColorBurgerMenu: '#ececec',
    bgColorFooter: '#2f303a',
    darkColor: '#212121',
  },

  spacing: n => `${4 * n}px`,

  media: {
    medium: '(min-width: 768px)',
    large: '(min-width: 1140px)',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  fontSizes: {
    xxs: '8px',
    x: '10px',
    xs: '12px',
    s: '14px',
    m: '16px', //
    xm: '18px', //
    l: '24px', //
    xl: '26px', //
    xxl: '32px', //
    sb: '44px',
    mb: '60px',
    lb: '72px',
    b: '100px',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    none: '0',
    superLight: '4px',
    light: '6px',
  },

  shadows: {},

  transitions: {
    main: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
