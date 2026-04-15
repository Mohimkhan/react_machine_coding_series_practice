export const formatText = (text, splitter = "_", joinWith = " ") => {
  return (
    text.split(splitter)[0][0].toUpperCase() +
    text.split(splitter)[0].slice(1) +
    joinWith +
    text.split(splitter)[1][0].toUpperCase() +
    text.split(splitter)[1].slice(1)
  );
};
