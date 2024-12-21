document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const totalValueElement = document.querySelector('.total-value');
    const calculateButton = document.querySelector('.calculate-button');
    const loadingScreen = document.querySelector('.loading-screen');

    // Create product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.productId = product.id;
        card.innerHTML = `
        <img src="${product.image || ''}" alt="${product.name}">
        <p>${product.name}</p>
        <p class="value">${product.value} ${product.unit}</p>
      `;
        productsContainer.appendChild(card);
    });

    // Handle card selection
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
        });
    });

    // Handle calculation
    async function calculateWithLoading() {
        const selectedCards = document.querySelectorAll('.card.selected');

        if (selectedCards.length === 0) {
            alert('Please select at least one product to calculate the impact.');
            return;
        }

        loadingScreen.style.display = 'flex';

        try {
            await simulateCalculation();

            const selectedProducts = Array.from(selectedCards).map(card => {
                const productId = parseInt(card.dataset.productId);
                return products.find(p => p.id === productId);
            });

            const total = calculateTotal(selectedProducts);
            totalValueElement.textContent = `${formatValue(total)} kg CO2`;
        } finally {
            loadingScreen.style.display = 'none';
        }
    }

    calculateButton.addEventListener('click', calculateWithLoading);
});