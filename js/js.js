/**
 * Created by tyler on 10/13/15.
 */

var Contact = function(name, number) {
    this.name = name;
    this.number = number;
}

Contact.prototype.greet = function() {
    document.getElementById("output").innerHTML = this.name + " " + this.number;
};

//var tyler = new Contact("Tyler", "555-555-5555");
//var mike = new Contact("mike", "555-555-5555");

$("#clickToAdd").click(function(e) {
    validName();
    var newName = document.getElementById("addName").value;
    var newNumber = document.getElementById("addNumber").value;
    newName = new Contact(newName, newNumber);
    $("#output").append("<p>" + "Name: " + newName.name + "</p>" + "<p>" + "Number: " + newName.number + "</p>");
});

function validName(e) {
    var nameRegEx = /[^a-z]/ig;
    var name = document.getElementById("addName").value;

    if (name == null || name == "") {
        alert("Enter a real name");
    } else {
        $("#myModal").modal("hide");
        $("#myModal").on("hidden.bs.modal", function() {
            $("#addName").val("");
        })
    }
};