// NOTE: to access every Web Objects you have to use document
// document.getElementById("p1").innerHTML = "Please visit <a href='http://ce.sharif.edu/~naghiourfar'> my webpage </a>"
// get acccess to p1 paragraph object --> just like java
// innerHTML --> Content of the tag (e.g. for paragraph is the string)
// "" or '' defines a string in js

// In js we have lots of events like onload, ...

// define a function

// function changeText() { // You have to invoke it to use it! :D
//     document.getElementById("p1").innerHTML = "Please visit <a href='http://ce.sharif.edu/~naghiourfar'> my webpage </a>";
// }

// Because of huge possibility of having long functions --> make .js file and define functions in it!

// NOTE: JS is case-sensitive
// NOTE: Using ; is optional but it is recommended! :/ --> Has application in compressing files and faster loading HTML pages



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

function defineConditionClauses() {
    var age = prompt("How old are you?"); // gets input from user with showing input string (output of prompt is string )

    if (age < 18) {
        alert("Ha ha so funny!")
    } else {
        alert("Mmm, Nice!")
    }

    if (age == 10) { // check just content --> type doesn't matter
        alert("age is 10 but the type is not integer necessary")
    }

    if (age === 10) { // check content and type
        alert("age is 10 and its type is integer")
    }


    switch (age) {
        case 10:
            alert("Your age is 10")
            break;
        case "Mohsen":
            alert("Ha ha funny! :/ ");
            break;
        default:
            alert("LOL!")
            break;
    }

}

function calcSum(a, b) {
    return a + b;
}

function parseInteger() {
    a = parseInt(prompt("Enter a number")) // cast to number
    b = eval(prompt("Enter a number")) // cast to number
}


function defineLoop() {
    for (var i = 0; i < 10; i++) {
        document.write(i = "<br />") // write on webpage, end="\n" but default is ""
    }

    var names = ["mohsen", "ali", "mohammad"]

    for (var i = 0; i < names.length; i++) { // just like java!
        document.write(names[i] + "<br />")
    }

    // js has while and do-while loops just like java and C/C++ format

    var person = {
        name: "Amirhossein",
        lastname: "Jadidi",
        age: 21
    }
    var personInfo;
    for (var x in person) {
        personInfo += person[x];
    }
    document.write(personInfo)
}


function defineEvents(e) { // e is an event
    alert(e.keyCode)

    if (e.keyCode == 56) { // if e is really an event, it has an attribute called keyCode which is ASCII Code number
        e.preventDefault(); // prevent what the event is looking forward to do! (e.g. Not write the character in the box)
    }

    document.getElementById("txt1").value = "salam" // input attribute is value not innerHTML
}

function defineEvent(owner) {
    owner.value = "Salam!!!";
}

function handleException() { // it is like java :D
    try {

    } catch (e1) { // gets a name for exception
        alert("An Error occured!\n" + e1.message)
    } finally {

    }
}

// DOM : Document Object Model
// Tree Structure which browser model the page based on the written code
// e.g. Each tag like html, body, head is a node and head is html's child
// document is the root of tree
// document -> root element(html)

//NOTE: document.write MUST be used when HTML Load is complete!


function handleElement() {
    var paragraphs = document.getElementById("ID").getElementsByTagName("p") // all p tags -> All paragraphs -> return array
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = i + ". Salam!";
    }
}

function children() {
    document.getElementById("ID").childNodes // get children of the corresponding tag -> return List of Nodes
    document.getElementById("ID").parentNode.firstChild
    document.getElementById("ID").nextSibling.nodeName // get node name of sibling's tag -> returns node name with CAPITAL letters
    // nodeName attribute is read-only attribute
    document.getElementById("ID").nodeValue // gets the value of node -> e.g. text of the current node (NOTE: HTML tags have null nodeValue)
    document.getElementById("ID").nodeType // gets the kind of node -> Element=1, attribute=2, text=3, comment=8, document=9 (Rare app)

}

function addNewTag() {
    var newTag = document.createElement("a")

    // 1st method
    var linkText = document.createTextNode("Visit my page!")
    newTag.appendChild(linkText) // adds to children list's tail

    // 2nd method
    newTag.innerHTML("Visit my page!")

    newTag.href = "http://ce.sharif.edu/~naghipourfar"
    newTag.onclick = function() {alert()} // specify an inline function to onclick event
    // add to an existing element in HTML page
    document.getElementById("ID").appendChild(newTag)

    var target = document.getElementById("ID").getElementsByTagName("a")[0]
    document.getElementById("ID").insertBefore(newTag, target) // adds to children list's head of the parent tag
}

function removeTag() {
    var parent = document.getElementById("ID") // specify the parent tag
    var child = parent.getElementsByTagName("a")[0] // specify the child tag to be removed

    parent.removeChild(child) // removes the child
}

function replaceTag() {
    var parent = document.getElementById("ID") // specify the parent tag
    var oldChild = parent.getElementsByTagName("a")[0] // specify the child tag to be removed

    // suppose newTag is created... :D

    parent.replaceChild(newTag, oldChild) // removes the child
}


function getRootElement() {
    document.doctype // access to root element -> HTML Tag
    document.body // access to body tag of HTML page
}