🐕 Dog Fetcher - Async API Project
A modular web application that interacts with the Dog CEO API and JSONPlaceholder to demonstrate asynchronous JavaScript and DOM manipulation.

🛠️ Project Structure
The application is organized into three distinct JavaScript modules to ensure separation of concerns:

api.js: Manages all network requests using fetch and async/await. Handles GET requests for dog images and simulated POST requests for favoriting.

ui.js: Responsible for dynamically generating Bootstrap gallery cards and rendering them to the DOM.

main.js: The entry point that orchestrates the data flow and manages the event loop.

⚙️ Technical Implementation
Asynchronous Programming
This project utilizes async/await to handle the asynchronous nature of API calls. By "awaiting" the fetch response, the application ensures the UI does not attempt to render until the data is fully received, preventing common race conditions.

Event Loop Management
To satisfy project requirements, the event loop is managed by coordinating multiple asynchronous tasks. For example, the init() function in main.js must complete its data fetch before renderDogList is triggered.

Data Manipulation (POST)
While the Dog CEO API is read-only, I implemented a POST request to JSONPlaceholder. When a user clicks "Favorite this Dog," the app sends the image URL to a mock server, which returns a 201 Created status and a unique ID, fulfilling the requirement for user-driven data manipulation.

🚀 Challenges & Solutions
Initially, I attempted to use the SampleAPIs Coffee endpoint. However, the API was returning inconsistent data (empty arrays), which caused TypeError: coffees.forEach is not a function. I successfully pivoted to the Dog CEO API and implemented a more robust "safety check" for data types to ensure a stable user experience.
