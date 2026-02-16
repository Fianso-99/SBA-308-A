export function renderDogList(dogUrls, container, onFavorite) {
    container.innerHTML = ''; 

    if (!dogUrls || dogUrls.length === 0) {
        container.innerHTML = '<p class="text-center mt-5">No dogs found. Please refresh.</p>';
        return;
    }
    
    dogUrls.forEach(url => {
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-4 mb-4';
        
        cardCol.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <img src="${url}" class="card-img-top" alt="A random dog" 
                     style="height: 300px; object-fit: cover;">
                <div class="card-body d-flex flex-column justify-content-center">
                    <button class="btn btn-primary w-100 fav-btn">
                        🐾 Favorite this Dog
                    </button>
                </div>
            </div>
        `;

        cardCol.querySelector('.fav-btn').addEventListener('click', () => onFavorite(url));
        container.appendChild(cardCol);
    });
}