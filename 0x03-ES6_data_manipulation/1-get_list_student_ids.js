export default function getListStudentIds(students) {
	if (!students.isArray()) return [];
	return students.map((student) => student.id);
}
