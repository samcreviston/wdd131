const button = document.querySelector('#burger-menu');

button.addEventListener('click', function() {
    const dropDownBox = document.querySelector('#drop-down');
    
    // Toggle the 'show' class on #dropDownBox
    dropDownBox.classList.toggle('show');

    if (dropDownBox.classList.contains('show')) {
        if (!dropDownBox.querySelector('h2')) {
            // Create elements
            const home = document.createElement('h2');
            home.textContent = "Home";
            const old = document.createElement('h2');
            old.textContent = "Old";
            const newT = document.createElement('h2');
            newT.textContent = "New";
            const large = document.createElement('h2');
            large.textContent = "Large";
            const small = document.createElement('h2');
            small.textContent = "Small";

            // Append elements
            dropDownBox.append(home);
            dropDownBox.append(old);
            dropDownBox.append(newT);
            dropDownBox.append(large);
            dropDownBox.append(small);
        }
    } else {
        // Remove all <h2> elements when hiding
        dropDownBox.innerHTML = '';
    }
});



//responsive footer
const cYearElement = document.getElementById("currentyear"); 
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

//Assignment stated: "You do not need to alter the document.lastModified native format".
if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}
