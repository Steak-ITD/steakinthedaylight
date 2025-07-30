// Simple Site Closer script v0.1
// This script shuts down certain pages automatically on some days of the week so you can close your site!
//
// How to use:
// Just place this script in the head of any page you'd like to close!
// Make a page called closed.html and put your closed info on there!
// Add this code after you link the script:
// <script>
// 	// sc.closedPage = "closed.html"; // Optional: change the closed page url
// 	// sc.closedDays = ["Thursday"]; // Optional: change the days to close (default is Monday)
// 	shutItDown();
// </script>

var sc = {};
sc.closedPage = "closed.html";
sc.closedDays = ["Sunday"];
sc.weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Trigger this site closer!
function shutItDown() {
    sc.dayNow = sc.weekDays[new Date().getDay()];
    if (sc.closedDays.includes(sc.dayNow)) {
        window.location.replace(sc.closedPage);
    }
}