export default function createInt8TypedArray(bufferLength, position, value) {
  const buffer = new ArrayBuffer(bufferLength);
  const int8View = new Int8Array(buffer);

  if (position >= int8View.length) {
    throw new Error('Position outside range');
  }
  int8View[position] = value;
  return int8View;
}
