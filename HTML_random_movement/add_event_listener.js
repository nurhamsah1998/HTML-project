let hasChoose = false;

export default function (
  columnCount,
  initialPosition,
  timing,
  rowCount,
  nonBlockingColor,
  actionMoveColor
) {
  for (let column = 0; column < columnCount; column++) {
    if (!Boolean(rowCount)) break;
    const columnContainer = document.getElementById(`column-${column}`);
    for (let row = 0; row < columnContainer.childNodes.length; row++) {
      if (
        columnContainer.childNodes[row].className.includes("hover:bg-green-500")
      )
        columnContainer.childNodes[row].addEventListener("click", () => {
          if (!hasChoose) {
            columnContainer.childNodes[row].className =
              columnContainer.childNodes[row].className.replace(
                nonBlockingColor,
                actionMoveColor
              );
          } else {
            const rowElement = document.getElementById(
              `col-${initialPosition.col}-row-${initialPosition.row}`
            );
            rowElement.className = rowElement.className.replace(
              actionMoveColor,
              nonBlockingColor
            );
            columnContainer.childNodes[row].className =
              columnContainer.childNodes[row].className.replace(
                nonBlockingColor,
                actionMoveColor
              );
          }

          initialPosition.col = column;
          initialPosition.row = row;
          hasChoose = true;
          setTimeout(() => {
            timing();
          }, 1000);
        });
    }
  }
}
