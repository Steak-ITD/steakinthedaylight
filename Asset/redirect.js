if (localStorage.getItem("ageVerified") == null) {
    window.location = `/landing.html?returnto=${window.location}`; 
}