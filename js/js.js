/**
 * Created by tyler on 10/13/15.
 */
//Creates the Contact constructor
var Contact = function(name, number) {
    this.name = name;
    this.number = number;
}
//Creates a greet method for all Contact objects that puts the name and number into output
Contact.prototype.greet = function() {
    document.getElementById("output").innerHTML = this.name + " " + this.number;
};

//var tyler = new Contact("Tyler", "555-555-5555");
//var mike = new Contact("mike", "555-555-5555");

//When Add Contact button is clicked, runs validName function and outputs name and number to output
$("#clickToAdd").click(function(e) {
    validName();
    //Checks to see if ValidName returns true
    if(validName()) {
        var newName = document.getElementById("addName").value;
        var newNumber = document.getElementById("addNumber1").value + document.getElementById("addNumber2").value + document.getElementById("addNumber3").value;
        newName = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
        newNumber = "(" + newNumber.slice(0,3) + ") " + newNumber.slice(3,6) + " - " + newNumber.slice(6);
        newName = new Contact(newName, newNumber);
        $("#output").append("<p>" + "Name: " + newName.name + "</p>" + "<p>" + "Number: " + newName.number + "</p>");
    };
});

//Validates name and number
function validName(e) {
    var nameRegEx = /[^a-z]/ig;
    var numberRegEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    var name = document.getElementById("addName").value;
    var number = document.getElementById("addNumber1").value + document.getElementById("addNumber2").value + document.getElementById("addNumber3").value;
    var isNameValid = name.match(nameRegEx);
    var isNumberValid = number.match(numberRegEx);

    if (name == null || name == "") {
        alert("Enter a real name");
        $("addName").focus();
        return false;
    } else if (isNameValid == -1) {
        alert("Please Enter Your Name");
        $("addName").focus();
        return false;
    } else if (number == null || number == "") {
        alert("Please enter a phone number")
        $("#addNumber1").focus();
        return false;
    } else if (isNumberValid == -1) {
        alert("Please enter a valid phone number");
        $("#addNumber1").focus();
        return false;
    }
    else
     {
         //Hides modal only when no input errors
        $("#myModal").modal("hide");
        $("#myModal").on("hidden.bs.modal", function() {
            $("#addName").val("");
        })
         return true;
    }
};

$(".numberInputs input[type=text]").keyup('input',function () {
    if($(this).val().length == $(this).attr('maxlength')) {
        $(this).next("input").focus();
    }
});

$('#myModal').on('shown.bs.modal', function () {
    $('#addName').focus();
})

$('#myModal').bind("enterKey",function(e){
    //do stuff here
    $("#clickToAdd").click();
});
$('#myModal').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});