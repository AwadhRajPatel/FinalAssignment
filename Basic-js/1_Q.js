function gradeCalculator(marks) {
    if (marks > 90) {
      return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
      return "B Grade";
    } else if (marks >= 50 && marks < 70) {
      return "C Grade";
    } else {
      return "F Grade";
    }
  }
  
  // Example usage:
  let marks = 85;
  let grade = gradeCalculator(marks);
  console.log("Your grade is:", grade); // Output: Your grade is: B Grade