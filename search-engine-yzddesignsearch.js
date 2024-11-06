const data2 = [
    { name: "Hac The Hunt", url: "hack-the-hunt.html#hack-the-hunt" },
    { name: "Jukoku", url: "jukoku.html#jukoku" },
    { name: "Kodoku : Living In The Cursed City", url: "kodoku-living-in-the-cursed-city.html#kodoku-living-in-the-cursed-city" },
    { name: "Unknown Corporation : Secret Mission #S2", url: "unknown-corporation-secret-mission-season2.html#unknown-corporation-secret-mission-season2" },
    { name: "Pirate King Of Another World : The Forgotten One", url: "pirate-king-of-another-world-the-forgotten-one.html#pirate-king-of-another-world-the-forgotten-one" },
    { name: "Loser No More : Awakening In Another World", url: "loser-no-more-awakening-in-another-world.html#loser-no-more-awakening-in-another-world" },
    { name: "The Forest : Survival Isolation", url: "the-forest.html#the-forest-survival-isolation" },
    { name: "Signal", url: "signal.html#signal" },
    { name: "Here", url: "here.html#here" },
    { name: "Darkbane Hunters : Sasori Kurogane #S1", url: "darkbane-hunters-season1.html#darkbane-hunters-sasori-kurogane-season1" },
    { name: "Unknown Corporation : Silent Pandemic #S1", url: "unknown-corporation-silent-pandemic-season1.html#unknown-corporation-silent-pandemic-season1" },
    { name: "Still Alive 1", url: "still-alive-1.html#still-alive-1" },
    { name: "Still Alive 2", url: "still-alive-2.html#still-alive-2" }
];

const searchInput2 = document.getElementById('searchInput2');
const suggestionsList2 = document.getElementById('suggestions-yzddesignsearch');

searchInput2.addEventListener('input', () => {
    const query = searchInput2.value.toLowerCase();
    suggestionsList2.innerHTML = '';

    if (query) {
        const suggestions = data2.filter(item => item.name.toLowerCase().includes(query));
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion.name;
            li.addEventListener('click', () => {
                window.location.href = suggestion.url; // Mengarahkan ke URL
            });
            suggestionsList2.appendChild(li);
        });
        suggestionsList2.style.display = suggestions.length ? 'block' : 'none';
    } else {
        suggestionsList2.style.display = 'none';
    }
});