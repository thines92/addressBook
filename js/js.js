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

$("#addButton").click(function() {
    tyler.greet();
});