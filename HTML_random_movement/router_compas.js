import { gate } from "./helper.js";

export default function routerCompas(
  initialPosition,
  nonBlockingColor,
  rowCount,
  columnCount
) {
  return {
    top: {
      isOpenGate: gate({
        col: initialPosition.col,
        row: initialPosition.row,
        nonBlockingColor,
        type: "top",
      }),
      action: () => {
        initialPosition.col -= 1;
      },
      isBorder: Boolean(initialPosition.col === 0),
      name: "TOP",
    },
    bottom: {
      isOpenGate: gate({
        col: initialPosition.col,
        row: initialPosition.row,
        nonBlockingColor,
        columnCount,
        type: "bottom",
      }),
      action: () => {
        initialPosition.col += 1;
      },
      isBorder: Boolean(initialPosition.col === columnCount - 1),
      name: "BOTTOM",
    },
    left: {
      isOpenGate: gate({
        col: initialPosition.col,
        row: initialPosition.row,
        nonBlockingColor,
        type: "left",
      }),
      action: () => {
        initialPosition.row -= 1;
      },
      isBorder: Boolean(initialPosition.row === 0),
      name: "LEFT",
    },
    right: {
      isOpenGate: gate({
        col: initialPosition.col,
        row: initialPosition.row,
        nonBlockingColor,
        rowCount,
        type: "right",
      }),
      action: () => {
        initialPosition.row += 1;
      },
      isBorder: Boolean(initialPosition.row === rowCount - 1),
      name: "RIGHT",
    },
  };
}
