const DOG_URL = 'https://dog.ceo/api/breeds/image/random/10';
const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET Request: Fetches 10 random dogs
export async function fetchDogs() {
    try {
        const response = await fetch(DOG_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.message; // The Dog API returns images in the 'message' field
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

// POST Request: Simulates saving a favorite dog to a server
export async function saveFavoriteDog(dogUrl) {
    try {
        const response = await fetch(POST_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: dogUrl, userId: 1 })
        });
        return await response.json();
    } catch (error) {
        console.error("Post error:", error);
    }
}