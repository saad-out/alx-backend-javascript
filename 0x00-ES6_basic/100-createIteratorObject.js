export default function createIteratorObject(report) {
  const myArr = [];
  Object.keys(report.allEmployees).forEach((department) => {
    myArr.push(...report.allEmployees[department]);
  });
  return myArr;
}
