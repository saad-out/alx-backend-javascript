export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let returnString = '';
  const startStringLength = startString.length;
  set.forEach((string) => {
    if (string.startsWith(startString)) {
      if (returnString !== '') {
        returnString += '-';
      }
      returnString += string.slice(startStringLength, string.length);
    }
  });
  return returnString;
}
