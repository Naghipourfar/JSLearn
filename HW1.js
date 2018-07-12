var students = new Array();
var numberOfStudents = 0;
function addStudent() {
    var name = prompt("Enter name:")
    var lastname = prompt("Enter the lastname: ")
    var age = eval(prompt("How old are you?"))

    var student = {
        name: name,
        lastname: lastname,
        age: age
    }

    students[numberOfStudents++] = student;
    alert("Done!")
}

function showStudents() {
    var table = "<table align='center' border='1' width='300'><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr>";
    for(var i = 0;i < numberOfStudents;i++) {
        table += "<tr>";
        table += "<td>" + students[i].name + "</td>"
        table += "<td>" + students[i].lastname + "</td>"
        table += "<td>" + students[i].age + "</td>"
        table += "</tr>";
    }
    document.getElementById("Students").innerHTML = table;
}


