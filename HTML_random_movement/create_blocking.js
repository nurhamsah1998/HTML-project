import { pickRandom } from "./helper.js";

export default function creatingBlocking(
  blockingCount,
  nonBlockingColor,
  blockingColor,
  rowCount,
  columnCount
) {
  for (let blockingIndex = 0; blockingIndex < blockingCount; blockingIndex++) {
    const row = pickRandom(rowCount);
    const column = pickRandom(columnCount);
    const columnContainer = document.getElementById(`column-${column}`);
    if (!columnContainer.children[row].className.includes(blockingColor)) {
      columnContainer.children[row].className = columnContainer.children[
        row
      ].className.replace(nonBlockingColor, blockingColor);
      columnContainer.children[row].className = columnContainer.children[
        row
      ].className.replace(" hover:bg-green-500", "");
    }
  }
}
