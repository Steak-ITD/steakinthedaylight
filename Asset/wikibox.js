window.onload = () => {
    // copy below to add more pages
    fetch('/Asset/wikibox.html') // the page we want to use for our sidebar
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("infobox").innerHTML = data; // inserts to element id="navbar"
    })
    // copy end
}