const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
  ];
  
  // a. Add a Student
  function addStudent(studentId, firstName, lastName, age, grade) {
    const newStudent = { id: studentId, firstName, lastName, age, grade };
    students.push(newStudent);
  }
  
  // b. Update Student Information
  function updateStudent(studentId, updatedInfo) {
    const studentIndex = students.findIndex((student) => student.id === studentId);
    if (studentIndex !== -1) {
      students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    } else {
      console.log(`Student with ID ${studentId} not found.`);
    }
  }
  
  // c. Delete a Student
  function deleteStudent(studentId) {
    const studentIndex = students.findIndex((student) => student.id === studentId);
    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);
    } else {
      console.log(`Student with ID ${studentId} not found.`);
    }
  }
  
  // d. List All Students
  function listAllStudents() {
    if (students.length === 0) {
      console.log("No students in the list.");
      return;
    }
    console.log("List of Students:");
    students.forEach((student) => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
  }
  
  // e. Find Students by Grade
  function findStudentsByGrade(grade) {
    const filteredStudents = students.filter((student) => student.grade === grade);
    if (filteredStudents.length === 0) {
      console.log(`No students found with grade ${grade}.`);
      return;
    }
    console.log(`Students with grade ${grade}:`);
    filteredStudents.forEach((student) => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
    });
  }
  
  // f. Calculate Average Age
  function calculateAverageAge() {
    if (students.length === 0) {
      console.log("No students in the list. Cannot calculate average age.");
      return;
    }
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age of students: ${averageAge}`);
  }
  
  // Example usage
  
  addStudent(4, "Alice", "Brown", 25, "B");
  updateStudent(2, { firstName: "Jenny" });
  deleteStudent(1);
  listAllStudents();
  findStudentsByGrade("A");
  calculateAverageAge();