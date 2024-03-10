export const getRandomNum = (min: number, max: number, isInt = false): number => {
  const num = Math.random() * (max - min) + min;
  if (isInt) return Math.floor(num);
  else return Number(num.toFixed(2));
};