const data = [
    { name: "Jukoku", url: "jukoku.html#jukoku", image: "https://iamyzddesign.github.io/thumbnail-1/JUKOKU (THUMBNAIL).jpg" },
    { name: "Kodoku : Living In The Cursed City", url: "kodoku-living-in-the-cursed-city.html#kodoku-living-in-the-cursed-city", image: "https://iamyzddesign.github.io/thumbnail-1/KODOKU - LIVING IN THE CURSED CITY (THUMBNAIL).jpg" },
    { name: "Unknown Corporation : Secret Mission #S2", url: "unknown-corporation-secret-mission-season2.html#unknown-corporation-secret-mission-season2", image: "https://iamyzddesign.github.io/thumbnail-1/UNKNOWN CORPORATION - SECRET MISSION S2 (THUMBNAIL).jpg" },
    { name: "Pirate King Of Another World : The Forgotten One", url: "pirate-king-of-another-world-the-forgotten-one.html#pirate-king-of-another-world-the-forgotten-one", image: "https://iamyzddesign.github.io/thumbnail-1/PIRATE KING OF ANOTHER WORLD - THE FORGOTTEN ONE (THUMBNAIL).jpg" },
    { name: "Loser No More : Awakening In Another World", url: "loser-no-more-awakening-in-another-world.html#loser-no-more-awakening-in-another-world", image: "https://iamyzddesign.github.io/thumbnail-1/LOSER NO MORE - AWAKENING IN ANOTHER WORLD (THUMBNAIL).jpg" },
    { name: "The Forest : Survival Isolation", url: "the-forest.html#the-forest-survival-isolation", image: "https://iamyzddesign.github.io/thumbnail-1/THE FOREST - SURVIVAL ISOLATION (THUMBNAIL).jpg" },
    { name: "Signal", url: "signal.html#signal", image: "https://iamyzddesign.github.io/thumbnail-1/SIGNAL (THUMBNAIL).jpg" },
    { name: "Here", url: "here.html#here", image: "https://iamyzddesign.github.io/thumbnail-1/HERE (THUMBNAIL).jpg" },
    { name: "Darkbane Hunters : Sasori Kurogane #S1", url: "darkbane-hunters-season1.html#darkbane-hunters-sasori-kurogane-season1", image: "https://iamyzddesign.github.io/thumbnail-1/DARKBANE HUNTERS (THUMBNAIL).jpg" },
    { name: "Unknown Corporation : Silent Pandemic #S1", url: "unknown-corporation-silent-pandemic-season1.html#unknown-corporation-silent-pandemic-season1", image: "https://iamyzddesign.github.io/thumbnail-1/UNKNOWN (THUMBNAIL).jpg" },
    { name: "Still Alive 1", url: "still-alive-1.html#still-alive-1", image: "https://iamyzddesign.github.io/thumbnail-1/STILL ALIVE 1 (THUMBNAIL).jpg" },
    { name: "Still Alive 2", url: "still-alive-2.html#still-alive-2", image: "https://iamyzddesign.github.io/thumbnail-1/STILL ALIVE 2 (THUMBNAIL).jpg" },
    // Tambahkan data lainnya sesuai kebutuhan
];

const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (query) {
        const suggestions = data.filter(item => item.name.toLowerCase().includes(query));
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.className = "suggestion-item";

            // Buat elemen gambar
            const img = document.createElement('img');
            img.src = suggestion.image;
            img.alt = suggestion.name;
            img.className = "suggestion-image";

            // Buat elemen teks
            const text = document.createElement('span');
            text.textContent = suggestion.name;

            li.appendChild(img);   // Tambahkan gambar ke item
            li.appendChild(text);   // Tambahkan teks ke item
            li.addEventListener('click', () => {
                window.location.href = suggestion.url;
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = suggestions.length ? 'block' : 'none';
    } else {
        suggestionsList.style.display = 'none';
    }
});