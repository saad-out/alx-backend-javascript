export default function getStudentIdsSum(studentObjects) {
  if (Array.isArray(studentObjects) === false) {
    return [];
  }

  return studentObjects.reduce((sumIds, student) => sumIds + student.id, 0);
}
