interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Prime",
	lastName: "Okanlawon",
	age: 20,
	location: "Lagos",
};

const student2: Student = {
	firstName: "Martins",
	lastName: "Okanlawon",
	age: 20,
	location: "Lagos",
};
const studentsList: Array<Student> = [student1, student2];

// See index.html for this part
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);