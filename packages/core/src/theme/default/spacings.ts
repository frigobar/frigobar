export interface ISpacings extends Array<number> {
  /** 0px */
  zero: number;
  /** 4px */
  xxsmall: number;
  /** 8px */
  xsmall: number;
  /** 12px */
  small: number;
  /** 16px */
  medium: number;
  /** 20px */
  large: number;
  /** 24px */
  xlarge: number;
  /** 40px */
  xxlarge: number;
  /** 56px */
  xxxlarge: number;
  /** 72px */
  huge: number;
}

const spacing: ISpacings = Object.assign([0, 4, 8, 12, 16, 20, 24, 40, 56, 72]);
[
  spacing.zero,
  spacing.xxsmall,
  spacing.xsmall,
  spacing.small,
  spacing.medium,
  spacing.large,
  spacing.xlarge,
  spacing.xxlarge,
  spacing.xxxlarge,
  spacing.huge,
] = spacing;

export default spacing;
