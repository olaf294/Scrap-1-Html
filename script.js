let scrap = 0;
let magnets = 0;
let clickCount = 0;
let scrapPerSecond = 0;  // Scrap na sekundę
let tapToMagnetCost = 100;  // Koszt przycisku -1 Tap To 1 Magnet
let scrapPerClick = 1;  // Scrap na jedno kliknięcie
let magnetEffectCost = 10;  // Koszt przycisku Double Scrap Per Click

const scrapElement = document.getElementById('scrap');
const magnetsElement = document.getElementById('magnets');
const barrelImage = document.getElementById('clickable-barrel');
const upgradesIcon = document.getElementById('upgrades-icon');
const upgradesWindow = document.getElementById('upgrades');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Przyciski w Scrap Upgrades
const scrapPerSecondBtn = document.getElementById('scrap-per-second');
const tapToMagnetBtn = document.getElementById('tap-to-magnet');
// Przyciski w Magnet Upgrades
const magnetEffectBtn = document.getElementById('magnet-effect');

// Obsługa klikania na Barrel
barrelImage.addEventListener('click', () => {
    scrap += scrapPerClick;
    clickCount++;

    // Zwiększamy magnes co 100 kliknięć
    if (clickCount >= 100) {
        magnets++;
        clickCount = 0;
    }

    scrapElement.textContent = `${Math.floor(scrap)}`;
    magnetsElement.textContent = `${Math.floor(magnets)}`;
});

// Pokazywanie/ukrywanie okna Upgrades
upgradesIcon.addEventListener('click', () => {
    if (upgradesWindow.style.display === 'block') {
        upgradesWindow.style.display = 'none';
    } else {
        upgradesWindow.style.display = 'block';

        // Ustawienie domyślnej zakładki "ScrapValue" po pierwszym otwarciu
        document.getElementById('scrap-tab').classList.add('visible');
        tabContents.forEach((content) => {
            if (content.id !== 'scrap-tab') {
                content.classList.remove('visible');
            }
        });
    }
});

// Obsługa zakładek
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        // Ukryj wszystkie treści zakładek
        tabContents.forEach((content) => {
            content.classList.remove('visible');
        });

        // Pokaż wybraną treść zakładki
        document.getElementById(targetTab).classList.add('visible');
    });
});

// Obsługa przycisku Scrap Per Second
scrapPerSecondBtn.addEventListener('click', () => {
    if (scrap >= 10) {
        scrap -= 10;
        scrapPerSecond++;
        scrapElement.textContent = `${Math.floor(scrap)}`;
        updateScrapPerSecond();  // Rozpoczynanie dodawania scrapów co sekundę
    }
});

// Obsługa przycisku -1 Tap To 1 Magnet
tapToMagnetBtn.addEventListener('click', () => {
    if (scrap >= 100 && tapToMagnetCost >= 10) {
        scrap -= 100;
        tapToMagnetCost -= 1;
        scrapElement.textContent = `${Math.floor(scrap)}`;
    }
});

// Obsługa przycisku Double Scrap Per Click
magnetEffectBtn.addEventListener('click', () => {
    if (magnets >= 10) {
        magnets -= 10;
        scrapPerClick *= 2;  // Podwajamy ilość scrapów na kliknięcie
        magnetsElement.textContent = `${Math.floor(magnets)}`;
    }
});

// Dodawanie scrapów co sekundę
function updateScrapPerSecond() {
    setInterval(() => {
        if (scrapPerSecond > 0) {
            scrap += scrapPerSecond;
            scrapElement.textContent = `${Math.floor(scrap)}`;
        }
    }, 1000);  // Co 1 sekundę
}
