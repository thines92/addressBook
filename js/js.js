/**
 * Created by tyler on 10/13/15.
 */

var Contact = function(name, number) {
    this.name = name;
    this.number = number;
}
Contact.prototype.greet = function() {
    document.getElementById("output").innerHTML = this.name + " " + this.number;
}

var tyler = new Contact("Tyler", "555-555-5555");

function createContact(e) {
    var target = e.target;
    var contactName = target.value;

    new Contact(contactName, "unknown");
}

$("#addButton").click(function() {
    mike.greet();
});

$("#addTextBox").bind("enterKey", function(e){
    createContact();
})

$("#addTextBox").keyup(function(e){
    if(e.keyCode == 13) {
        $(this).trigger("enterKey");
    }
});