import {RkColors} from './color'

export const Values = {
  primary: '#397edc',
  primaryActive: '#2d63ad',
  success: '#22c93d',
  successActive: '#1dab35',
  info: '#19bfe5',
  infoActive: '#17adcf',
  warning: '#feb401',
  warningActive: '#eba502',
  danger: '#ed1c4d',
  dangerActive: '#c2173f',
  foreground: '#000000dd',
  background: '#fff',
  inverseBackground:'#000000',
  overlay: '#00000057',
  fontSize: 15,
  neutral: '#0000001A',
  hint: '#0000008e',
  highlight: '#ececec'
};

export const DefaultTheme = {
  colors: {
    primary: Values.primary,
    primaryActive: Values.primaryActive,
    success: Values.success,
    successActive: Values.successActive,
    info: Values.info,
    infoActive: Values.infoActive,
    warning: Values.warning,
    warningActive: Values.warningActive,
    danger: Values.danger,
    dangerActive: Values.dangerActive,
    foreground: Values.foreground,
    background: Values.background,
    overlay: Values.overlay,
    highlight: Values.highlight,
    text: {
      base: Values.foreground,
      inverse: Values.background,
      subtitle: Values.foreground,
      hint: Values.hint
    },
    button: {
      primary: Values.primary,
      primaryActive: Values.primaryActive,
      success: Values.success,
      successActive: Values.successActive,
      info: Values.info,
      infoActive: Values.infoActive,
      warning: Values.warning,
      warningActive: Values.warningActive,
      danger: Values.danger,
      dangerActive: Values.dangerActive,
      foreground: Values.foreground,
      background: Values.background,
      text: Values.background,
      outline: RkColors.transparent,
    },
    screen: {
      base: Values.background,
      primary: Values.primary,
      primaryActive: Values.primaryActive,
      success: Values.success,
      successActive: Values.successActive,
      info: Values.info,
      infoActive: Values.infoActive,
      warning: Values.warning,
      warningActive: Values.warningActive,
      danger: Values.danger,
      dangerActive: Values.dangerActive,
      foreground: Values.foreground,
      background: Values.background,
      material: Values.primary,
      disabled: Values.neutral,
      inverse: Values.inverseBackground
    },
    border: {
      base: Values.neutral,
      primary: Values.neutral,
      solid: '#0000003B',
      material: Values.warning,
      disabled: Values.neutral,
      card: '#00000014'
    },
    input: {
      text: Values.foreground,
      background: Values.background,
      label: Values.hint,
      placeholder: Values.hint,
    },
  },
  fonts: {
    sizes: {
      base: Values.fontSize,
      small: Values.fontSize * .8,
      medium: Values.fontSize,
      large: Values.fontSize * 1.2,
      xlarge: Values.fontSize / 0.75,
      xxlarge: Values.fontSize * 1.6,
    }
  }
};