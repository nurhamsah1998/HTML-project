const pickRandom = (value) => {
  if (typeof value === "object") {
    return Math.floor(Math.random() * value.length);
  } else {
    return Math.floor(Math.random() * value);
  }
};

const gate = ({ col, row, nonBlockingColor, columnCount, rowCount, type }) => {
  if (!type) throw new Error("type of gate is invalid");
  const typeRotation = {
    top: `col-${col === 0 ? 0 : col - 1}-row-${row}`,
    bottom: `col-${
      col === columnCount - 1 ? columnCount - 1 : col + 1
    }-row-${row}`,
    left: `col-${col}-row-${row === 0 ? 0 : row - 1}`,
    right: `col-${col}-row-${row === rowCount - 1 ? rowCount - 1 : row + 1}`,
  };
  return document
    .getElementById(typeRotation[type])
    .className.includes(nonBlockingColor);
};

export { pickRandom, gate };
