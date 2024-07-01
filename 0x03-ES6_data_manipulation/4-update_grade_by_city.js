export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const studentInCityGrade = newGrades.find((grade) => student.id === grade.studentId);
    let newStudent;
    if (!studentInCityGrade) {
      newStudent = {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: 'N/A',
      };
    } else {
      newStudent = {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: studentInCityGrade.grade,
      };
    }
    return newStudent;
  });
}
