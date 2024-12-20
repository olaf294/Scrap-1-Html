let scrap = 0;
let magnets = 0;
let clickCount = 0;

const scrapElement = document.getElementById('scrap');
const magnetsElement = document.getElementById('magnets');
const barrelImage = document.getElementById('clickable-barrel');
const shopIcon = document.getElementById('shop-icon');
const shop = document.getElementById('shop');

barrelImage.addEventListener('click', () => {
    scrap++;
    clickCount++;

    // Zwiększamy magnes co 100 kliknięć
    if (clickCount >= 100) {
        magnets++;
        clickCount = 0;
    }

    scrapElement.textContent = `${Math.floor(scrap)}`;
    magnetsElement.textContent = `${Math.floor(magnets)}`;
});

// Wysuwanie i wsuwanie sklepu
shopIcon.addEventListener('click', () => {
    shop.classList.toggle('open');
});
