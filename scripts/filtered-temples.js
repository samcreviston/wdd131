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

// Temple Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Atlanta Temple",
      location: "Atlanta, Georgia, United States",
      dedicated: "1983, June, 1-4",
      area: 34500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3860-thumb.jpg"
    },
    {
      templeName: "Los Angeles California",
      location: "Los Angeles, California, United States",
      dedicated: "1956, March, 11",
      area: 190614,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-2949-thumb.jpg"
    },
    {
      templeName: "Belém Brazil",
      location: "Belém, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-6176-thumb.jpg"
    }
];

const homeLink = document.querySelector("#Home");
const oldLink = document.querySelector("#Old");
const newLink = document.querySelector("#New");
const largeLink = document.querySelector("#Large");
const smallLink = document.querySelector("#Small");

homeLink.addEventListener('click', () => {
  document.querySelector('main').innerHTML = '';

  homeTitle = document.createElement('h2');
  homeTitle.textContent = "Home";
  document.querySelector('main').appendChild(homeTitle);

  createTemples(temples);
});

oldLink.addEventListener('click', () => {
  const oldArray = [];
  temples.forEach(temple => {
    const dedicated = parseInt(temple.dedicated.substring(0, 4));
    if (dedicated < 1900) {
      oldArray.push(temple);
    }
  });

  // Clear existing content in main, then run createTemples with oldArray
  document.querySelector('main').innerHTML = '';
  createTemples(oldArray);
});

newLink.addEventListener('click', () => {
  const newArray = [];
  temples.forEach(temple => {
    const dedicated = parseInt(temple.dedicated.substring(0, 4));
    if (dedicated > 2000) {
      newArray.push(temple);
    }
  })

  // Clear existing content in main, then run createTemples with newArray
  document.querySelector('main').innerHTML = '';
  createTemples(newArray);
})

smallLink.addEventListener('click', () => {
  const smallArray = [];
  temples.forEach(temple => {
    const sqft = temple.area;
    if (sqft < 90000) {
      smallArray.push(temple);
    }
  })

  // Clear existing content in main, then run createTemples with smallArray
  document.querySelector('main').innerHTML = '';
  createTemples(smallArray);
})

largeLink.addEventListener('click', () => {
  const largeArray = [];
  temples.forEach(temple => {
    const sqft = temple.area;
    if (sqft > 100000) {
      largeArray.push(temple);
    }
  })

  // Clear existing content in main, then run createTemples with smallArray
  document.querySelector('main').innerHTML = '';
  createTemples(largeArray);
})

function createTemples(templeArray) {
    templeArray.forEach(temple => {
        // Create section
        const card = document.createElement('section');

        // Create elements
        const templeName = document.createElement('h3');
        templeName.classList.add('templeNames');
        const location = document.createElement('p');
        location.classList.add('location');
        const dedication = document.createElement('p');
        dedication.classList.add('dedication');
        const sqfootage = document.createElement('p');
        sqfootage.classList.add('sqft');
        const templeImage = document.createElement('img');

        // Populate elements
        templeName.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        sqfootage.textContent = `Area: ${temple.area} sq ft`;

        // Add lazy loading and other attributes to images
        templeImage.src = temple.imageUrl;
        templeImage.loading = "lazy";
        templeImage.alt = "image of temple";

        // Append elements to section
        card.appendChild(templeName);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(sqfootage);
        card.appendChild(templeImage);

        // Append section to main
        document.querySelector('main').appendChild(card);
    });
}

// Responsive footer
const cYearElement = document.getElementById("currentyear");
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}

// Initial load
createTemples(temples);
