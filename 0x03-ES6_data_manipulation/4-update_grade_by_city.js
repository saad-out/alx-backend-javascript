export default function updateStudentGradeByCity(studentObjects, city, newGrades) {
  if (Array.isArray(studentObjects) === false || Array.isArray(newGrades) === false) {
    return [];
  }

  const studentsByCity = studentObjects.filter((student) => student.location === city);
  return studentsByCity.map((student) => {
    let studentGrade = 'N/A';
    for (let i = 0; i < newGrades.length; i += 1) {
      if (newGrades[i].studentId === student.id) {
        studentGrade = newGrades[i].grade;
        break;
      }
    }
    const studentCopy = { ...student };
    studentCopy.grade = studentGrade;
    return studentCopy;
  });
}
