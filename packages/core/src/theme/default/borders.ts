export interface IBorders extends Array<number> {
  /** 0px */
  none: number;
  /** 1px */
  tiny: number;
  /** 2px */
  small: number;
  /** 3px */
  medium: number;
}

const borders: IBorders = Object.assign([0, 1, 2, 3]);

[borders.none, borders.tiny, borders.small, borders.medium] = borders;

export default borders;
