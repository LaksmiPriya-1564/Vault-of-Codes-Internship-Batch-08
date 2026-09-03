document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var type = document.getElementById("type").value;
    var date = document.getElementById("date").value;
    var tickets = document.getElementById("tickets").value;

    var price = 200;
    var total = tickets * price;

    document.getElementById("result").innerHTML =
        "<h3>Booking Successful!</h3>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Email:</b> " + email + "</p>" +
        "<p><b>Booking Type:</b> " + type + "</p>" +
        "<p><b>Date:</b> " + date + "</p>" +
        "<p><b>Tickets:</b> " + tickets + "</p>" +
        "<p><b>Total Amount:</b> ₹" + total + "</p>";

});