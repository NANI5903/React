<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gradebook Project</title>
<style>
    /* CSS styles */
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
</style>
</head>
<body>
    <header>
        <!-- Header information here -->
        <h1>Gradebook Project</h1>
        <p>Exam Title: Computer Science Exam</p>
        <p>Date: April 6, 2024</p>
        <!-- Other header details here -->
    </header>
    <main>
        <!-- Main block -->
        <div>
            <label for="filter">Filter by Name:</label>
            <input type="text" id="filter" onkeyup="filterTable()">
            <button onclick="showAll()">Show All</button>
            <button onclick="showPassed()">Show Passed</button>
            <button onclick="showFailed()">Show Failed</button>
            <button onclick="sortByName()">Sort by Name</button>
            <button onclick="sortByGrade()">Sort by Grade</button>
        </div>
        <table id="gradeTable">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Ticket Number</th>
                    <th>Rating Grade</th>
                    <th>Exam Grade</th>
                    <th>Final Grade</th>
                    <th>Status</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody id="gradeBody">
                <!-- Student data will be inserted here dynamically -->
            </tbody>
        </table>
    </main>
    <script>
        // JavaScript code for handling data and actions
        // Mocked data
        const students = [
            { id: 1, name: 'John Doe', ticketNumber: 'A123', ratingGrade: 4.5, examGrade: 7.5, comments: 'Good work' },
            { id: 2, name: 'Jane Smith', ticketNumber: 'B456', ratingGrade: 3.8, examGrade: 6.7, comments: 'Needs improvement' },
            // Add more student data here
        ];

        // Function to display data in table
        function displayStudents() {
            const tableBody = document.getElementById('gradeBody');
            tableBody.innerHTML = '';
            students.forEach((student, index) => {
                const row = `<tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.ticketNumber}</td>
                    <td>${student.ratingGrade}</td>
                    <td>${student.examGrade}</td>
                    <td>${calculateFinalGrade(student)}</td>
                    <td>${calculateStatus(student)}</td>
                    <td>${student.comments}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }

        // Function to calculate final grade
        function calculateFinalGrade(student) {
            return (0.6 * student.examGrade + 0.4 * student.ratingGrade).toFixed(2);
        }

        // Function to calculate status
        function calculateStatus(student) {
            return (calculateFinalGrade(student) > 4) ? 'Passed' : 'Failed';
        }

        // Function to filter table by name
        function filterTable() {
            const input = document.getElementById('filter').value.toLowerCase();
            const filteredStudents = students.filter(student => student.name.toLowerCase().includes(input));
            displayStudents(filteredStudents);
        }

        // Function to show all students
        function showAll() {
            displayStudents(students);
        }

        // Function to show passed students
        function showPassed() {
            const passedStudents = students.filter(student => calculateFinalGrade(student) > 4);
            displayStudents(passedStudents);
        }
        // Function to show failed students
        function showFailed() {
            const failedStudents = students.filter(student => calculateFinalGrade(student) <= 4);
            displayStudents(failedStudents);
        }

        // Function to sort table by name
        function sortByName() {
            students.sort((a, b) => a.name.localeCompare(b.name));
            displayStudents();
        }

        // Function to sort table by grade
        function sortByGrade() {
            students.sort((a, b) => calculateFinalGrade(b) - calculateFinalGrade(a));
            displayStudents();
        }

        // Display initial data
        displayStudents();
    </script>
</body>
</html>