export const autoIncrement = () => {
  let count = 0;

  return () => {
    return count++;
  };
};
