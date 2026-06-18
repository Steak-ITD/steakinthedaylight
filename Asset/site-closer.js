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
sc.closedPage = "/snowy.html";
sc.closedHours = [0, 1, 2, 3, 4, 5, 6, 7];
sc.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

// Trigger this site closer!
function shutItDown() {
    sc.hourNow = new Date().getHours();
    if (sc.closedHours.includes(sc.hourNow)) {
        window.location.replace(sc.closedPage);
    }
}