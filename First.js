var name = "Mohsen" // Global Variable


function changeText(){
    document.getElementById("p1").innerHTML = "The function in js file is just invoked!";
}

function learningJavascript(){
    // Define Variables --> JS is weakly structured!
    var text = "Hi, My name is Mohsen Naghipourfar"; // Local Variable
    // Type casting is automatic --> You can write text = 2; in next line and it's totally ok!
    document.getElementById("p1") = text;
}