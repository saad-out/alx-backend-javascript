export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, element] of array.entries()) {
    array[idx] = appendString + element;
  }

  return array;
}
