// Validating user inputs in the form and alerting if they are empty
function validateform() {
    var fname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var query = document.getElementById("query").value;

    if (fname == null || fname == "") {
        alert("Please Enter Your Name: ");
    }
    if (email == null || email == "") {
        alert("Please Enter your email address:");
    }
    if (subject == null || subject == "") {
        alert("Please Select a subject:");
    }
    if (query == null || query == "")
        alert("Enter your query details:");
}

// Opening the form (accessing the <div> tags to open the content)
function openForm() {
    document.getElementById("wholeform").style.display = "block";
    document.getElementById("queryForm").style.display = "block";
}

// Closing the form (accessing the <div> tags to close the content)
function closeForm() {
    document.getElementById("queryForm").style.display = "none";
}

// Displaying form contents in the page
function displaytext() {
    document.getElementById("display-text").style.display = "block";
    document.getElementById("names").innerHTML = "Name:   " + document.getElementById("fullname").value + "<br><br>";
    document.getElementById("emails").innerHTML = "Email:   " + document.getElementById("email").value + "<br><br>";
    document.getElementById("subjects").innerHTML = "Subject:   " + document.getElementById("subject").value + "<br><br>";
    document.getElementById("querys").innerHTML = "Details:   " + document.getElementById("query").value + "<br><br>";
}

// Clearing the form contents from the page
function cleartext() {
    document.getElementById("display-text").style.display = "none";
    document.getElementById("wholeform").style.display = "none";
}

function querybtn() {
    openForm();
}

function checkbtn() {
    closeForm();
    displaytext();
}

function editbtn() {
    cleartext();
    openForm();
}

function sendbtn() {
    cleartext();
    // Clearing content of the form
    document.getElementById("form").reset();
}