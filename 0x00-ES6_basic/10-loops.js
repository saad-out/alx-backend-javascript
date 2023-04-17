export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const [idx, element] of array.entries()) {
    newArray[idx] = appendString + element;
  }

  return newArray;
}
