export const number = {
  roundTo (value, precision) {
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
  },
};
