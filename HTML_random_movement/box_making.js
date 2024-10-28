export default function randomBoxMaking(
  columnCount,
  container,
  rowCount,
  nonBlockingColor
) {
  for (let column = 0; column < columnCount; column++) {
    if (!Boolean(rowCount)) break;
    const columnElement = document.createElement("div");
    columnElement.id = `column-${column}`;
    columnElement.className = `flex flex-1`;
    container.appendChild(columnElement);
    const columnContainer = document.getElementById(`column-${column}`);
    for (let row = 0; row < rowCount; row++) {
      if (Boolean(columnContainer)) {
        const rowElement = document.createElement("div");
        rowElement.id = `col-${column}-row-${row}`;
        rowElement.className = `${nonBlockingColor} hover:bg-green-500 flex-1`;
        columnContainer.appendChild(rowElement);
      }
    }
  }
}
