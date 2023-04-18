export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    employees += reportWithIterator[i];
    if (i !== reportWithIterator.length - 1) {
      employees += ' | ';
    }
  }
  return employees;
}
