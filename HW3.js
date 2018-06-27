function addPerson() {
    var name = document.getElementById("name").value
    var lastname = document.getElementById("lastname").value

    var person = document.createElement("tr")

    var nameCell = document.createElement("td")
    var nameNode = document.createTextNode(name)
    nameCell.appendChild(nameNode)

    var lastnameCell = document.createElement("td")
    var lastnameNode = document.createTextNode(lastname)
    lastnameCell.appendChild(lastnameNode)

    var deleteLink = document.createElement("a")
    var editLink = document.createElement("a")

    deleteLink.innerHTML = "Delete"
    deleteLink.href = "#"
    deleteLink.onclick = function () {  deletePerson(this)}

    editLink.innerHTML = "Edit"
    editLink.href = "#"
    editLink.onclick = function () {editPerson(person) }

    var seperator = document.createTextNode(" | ")

    var operationCell = document.createElement("td")
    operationCell.appendChild(deleteLink)
    operationCell.appendChild(seperator)
    operationCell.appendChild(editLink)

    person.appendChild(nameCell)
    person.appendChild(lastnameCell)
    person.appendChild(operationCell)

    document.getElementById("tblPersons").appendChild(person)


}


function deletePerson(event) {
    var person = event.srcElement.parentNode.parentNode
    document.getElementById("tblPersons").removeChild(person)
}

function deletePerson(link) {
    var person = link.parentNode.parentNode
    document.getElementById("tblPersons").removeChild(person)
}


function editPerson(person) {
    person.style.backgroundColor = "orange"
    document.getElementById("name").value = person.childNodes[0].innerHTML
    document.getElementById("lastname").value = person.childNodes[1].innerHTML

}