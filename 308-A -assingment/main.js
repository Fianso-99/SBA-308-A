import { fetchDogs, saveFavoriteDog } from './api.js';
import { renderDogList } from './ui.js';

const dogContainer = document.getElementById('coffee-container'); 

async function init() {
    console.log("Dog App initializing...");
    // Await the GET request
    const data = await fetchDogs();
    
    if (data && data.length > 0) {
        renderDogList(data, dogContainer, handleFavorite);
    } else {
        dogContainer.innerHTML = '<p class="text-center">Error loading dogs.</p>';
    }
}

async function handleFavorite(url) {
    // Await the POST request
    const result = await saveFavoriteDog(url);
    if (result) {
        alert(`Dog Saved! (Simulated POST ID: ${result.id})`);
        console.log("Server Response:", result);
    }
}

// Start the application
init();