var name; // Global Variable


function changeText() {
    document.getElementById("p1").innerHTML = "The function in js file is just invoked!";
}

function learningJavascript() {
    // Define Variables --> JS is weakly typed!
    var text = "Hi, My name is Mohsen Naghipourfar"; // Local Variable
    // Type casting is automatic --> You can write text = 2; in next line and it's totally ok!
    document.getElementById("p1") = text;
}


function defineVars() {
    var name = "Mohsen"; // String
    var age = 20; // Integer
    var height = 73.3; // Double or Float
    var bigInt = 12e10; // 12 * 10^10
    var isMale = true; // Boolean

    var array = new Array(); // Array Class --> Make an object using new keyword
    // Array can have multiple types in its elements --> [Int, Double, String, Array, Object, ...]
    array[0] = 1;
    array[1] = "Naghipourfar";

    var names = new Array("Ali", "Majid", "Mohsen", "Mohammad") // Another definition on array
    var lastnames = ["Naghipourfar", "Ahmadi", "Lukako", "Ronaldo"] // Another definition of array

    var student = ["Mohsen", 20, 183, 73.3] // it is ok too!

    // define an object --> Like json objects --> Inspiration for json
    var programmer = {
        name: "Mohsen",
        lastname: "Naghipourfar",
        age: 20
    }

    var nullVariable = null;
}

function defineAlert() { // define alerts --> useful for debugging
    alert("Hey, What's up?")
    var text = "Heh!"
    alert(text)

    var programmer = {
        name: "Mohsen",
        lastname: "Naghipourfar",
        age: 20,
        STID: 1231231
    }

    // alert(programmer.name)
    // alert(programmer["name"]) // same as above
}


function defineOperations() {
    var a = 2;
    var b = 2.34;

    var c = a + b;
    var d = a * b;
    var e = a / b;

    c++; ++c; --c; c++; // Increments and Decrements

    c += 2;
    c -= 2;
    c *= 2;
    c /= 2;

    var name = "Mohsen";
    var lastname = "Naghipourfar";

    var completeName = name + " " + lastname; // String Concatenation

    var f = name + c; // name cannot cast to integer but c can. so integer + string = string -> integer casts to stirng and then concatenation

    var g = "2" * 20; // c = 40

    var h = c < 100 ? a : b; // Conditional Operation

}