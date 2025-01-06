let currentCity = null; // Variable to store the currently visible city

function showPlaces(city) {
    const placesDiv = document.getElementById(`${city}Places`);
    const placesList = document.getElementById(`${city}List`);

    // Define the places, their descriptions, and images for each city
    const cityPlaces = {
        antipolo: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' },
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }

        ],
        marikina: [
        { name: 'Sport Center', description: 'A facility for various sports activities and events.', image: 'sport-center-image.jpg' },
        { name: 'River Opark', description: 'A park by the river with scenic views and walking trails.', image: 'river-opark-image.jpg' }
        ],
        pasig: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ],
        taguig: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ],
        manila: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ]
    };

    // Add the list of places for the selected city
    placesList.innerHTML = cityPlaces[city].map(place => 
        `<li onclick="toggleDescription('${place.name}', '${city}')">${place.name}</li>`
    ).join('');

    // If a city is currently shown, hide its places
    if (currentCity && currentCity !== city) {
        document.getElementById(`${currentCity}Places`).style.display = 'none';  // Hide the previously visible city
    }

    // Toggle visibility for the clicked city
    if (placesDiv.classList.contains("show")) {
        placesDiv.classList.remove("show");
        placesDiv.style.display = "none";  // Hide the city places when clicked again
    } else {
        placesDiv.style.display = "block"; // Show the city places
        setTimeout(() => {
        placesDiv.classList.add("show");
        }, 10);  // Small delay to trigger the animation
    }

    // Update the currentCity to the city clicked
    currentCity = city;
    }

    // Function to toggle descriptions and hide other descriptions
    function toggleDescription(placeName, city) {
    const cityPlaces = {
        antipolo: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ],
        marikina: [
        { name: 'Sport Center', description: 'A facility for various sports activities and events.', image: 'sport-center-image.jpg' },
        { name: 'River Opark', description: 'A park by the river with scenic views and walking trails.', image: 'river-opark-image.jpg' }
        ],
        pasig: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ],
        taguig: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ],
        manila: [
        { name: 'Home', description: 'This is the place where you can relax and spend quality time with family.', image: 'home-image.jpg' },
        { name: 'School', description: 'A place of learning and education.', image: 'school-image.jpg' },
        { name: 'Market', description: 'A local market where fresh goods and produce are sold.', image: 'market-image.jpg' }
        ]
    };

    // Find the selected place from the city
    const place = cityPlaces[city].find(p => p.name === placeName);

    // Hide all other places in the list
    const allPlaces = document.querySelectorAll(`#${city}List li`);
    allPlaces.forEach(item => {
        if (item.innerText !== placeName) {
        item.style.display = 'none'; // Hide other places
        }
    });

    // Hide all descriptions for the current city
    const allDescriptions = document.querySelectorAll(`#${city}List .description`);
    allDescriptions.forEach(desc => {
        desc.style.display = 'none'; // Hide all descriptions
    });

    // Create or toggle the description visibility for the clicked place
    let descriptionDiv = document.getElementById(`${city}-${placeName}-description`);

    if (!descriptionDiv) {
        // Create a new description element if it doesn't exist
        descriptionDiv = document.createElement('div');
        descriptionDiv.id = `${city}-${placeName}-description`;
        descriptionDiv.classList.add('description');
        
        // Create the description content with image and text
        descriptionDiv.innerHTML = `
        <p>${place.description}</p>
        <img src="${place.image}" alt="${place.name}">
        `;
        document.getElementById(`${city}List`).appendChild(descriptionDiv);
    }

    // Show the description for the clicked place
    descriptionDiv.style.display = 'block';
    }
