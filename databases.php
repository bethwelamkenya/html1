<?php
// Create a new database connection
    $servername = "localhost:3333";
    $username = "root";
    $password = "9852";
    $dbname = "church";


    // Check the connection
    $conn = new mysqli($servername, $username, $password, $dbname) or die("Couldn't connect to DB" .$conn->connect_error);
    $passedName = mysqli_real_escape_string($conn, $_POST['memberName']);
    $passedEmail = mysqli_real_escape_string($conn, $_POST['memberEmail']);
    $passedRegNo = mysqli_real_escape_string($conn, $_POST['memberRegNo']);
    $passedNumber = mysqli_real_escape_string($conn, $_POST['memberNumber']);
    $passedSchool = mysqli_real_escape_string($conn, $_POST['memberSchool']);
    $passedYear = mysqli_real_escape_string($conn, $_POST['memberYear']);
    $passedDepartment = mysqli_real_escape_string($conn, $_POST['memberDepartment']);
    $passedResidence = mysqli_real_escape_string($conn, $_POST['memberResidence']);
    $sql = "INSERT INTO member (
            name,
            email,
            reg_no,
            number,
            school,
            year,
            department,
            residence) VALUES (
            '$passedName',
            '$passedEmail',
            '$passedRegNo',
            '$passedNumber',
            '$passedSchool',
            '$passedYear',
            '$passedDepartment',
            '$passedResidence')";

    // Execute SQL query and check if it was successful
    if ($conn->query($sql) === TRUE) {
        header("Location: https://youtube.com");
//         header("Location: ../home.html");
        echo "New record created successfully";

        // Close database connection
        $conn->close();
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        $conn->close();
    }
?>