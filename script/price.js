const plansPriceCheckbox = document.querySelector('.toggler-checkbox');

plansPriceCheckbox.addEventListener('click', function() {
    if (plansPriceCheckbox.checked) {
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        for (let price of monthlyPrices) {
            console.log(price)
            price.style.display = 'none';
        }
        const yearlyPrices = document.querySelectorAll('.yearly-price');
        for (let price of yearlyPrices) {
            price.style.display = 'block';
        }
        document.getElementById('toggler-yearly').classList.remove('low-opacity-text');
        document.getElementById('toggler-monthly').classList.add('low-opacity-text');
    } else {
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        for (let price of monthlyPrices) {
            price.style.display = 'block';
        }
        const yearlyPrices = document.querySelectorAll('.yearly-price');
        for (let price of yearlyPrices) {
            price.style.display = 'none';
        }
        document.getElementById('toggler-yearly').classList.add('low-opacity-text');
        document.getElementById('toggler-monthly').classList.remove('low-opacity-text');
    }
});
