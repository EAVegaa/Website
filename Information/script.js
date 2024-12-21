const products = [
    {
        id: 1,
        name: "Coca-Cola",
        image: "../IMG/koka.webp",
        description: "Huella de carbono por lata de 330ml ",
        price: "kg CO2",
        features: ["Por lata 150-200g Co2e"]
    },
    {
        id: 2,
        name: "Boing",
        image: "../IMG/boing.webp",
        description: "Huella de carbono boing 200ml",
        price: "kg 0.2-0.5",
        features: ["Por caja 20-50g Co2e"]
    },
    {
        id: 3,
        name: "Gansito",
        image: "../IMG/gansito.webp",
        description: "Huella de carbono por empaque 50g",
        price: "kg 0.5-1",
        features: ["por paquete 50-100g Co2e"]
    },
    {
        id: 4,
        name: "Chokis",
        image: "../IMG/chokis.png",
        description: "Huella de carbono por empaque 140g ",
        price: "kg 1-2.5",
        features: ["por paquete 100-250g Co2e"]
    },
    {
        id: 5,
        name: "Takis",
        image: "../IMG/takis.png",
        description: "Huella de carbono por bolsa 280g ",
        price: "kg 0.5-1",
        features: ["por bolsa 50-100g Co2e"]
    },
    {
        id: 6,
        name: "Pepsi",
        image: "../IMG/pepsi.webp",
        description: "Huella de carbono por lata 355ml ",
        price: "kg 0.4-1",
        features: ["por lata 40-100g Co2e"]
    },
    {
        id: 7,
        name: "Snickers",
        image: "../IMG/snickers.webp",
        description: "Huella de carbono por paquete 40g",
        price: "0.5-1",
        features: ["por paquete 50-100g Co2e"]
    },
    {
        id: 8,
        name: "Arizona",
        image: "../IMG/arizona.webp",
        description: "Huella de carbono por lata 460ml",
        price: "kg 0.5-0.8",
        features: ["Por lata 50-80g Co2e"]
    },
    {
        id: 9,
        name: "Sabritas",
        image: "../IMG/sabritas.webp",
        description: "Huella de carbon por bolsa 105g ",
        price: "kg 0.5-2.5",
        features: ["Por bolsa 50-250g Co2e"]
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;

    card.innerHTML = `
      <div class="card-content">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
      </div>
    `;

    return card;
}

function updateProductInfo(product) {
    const infoContainer = document.querySelector('.product-info .info-content');

    if (!product) {
        infoContainer.innerHTML = '<p class="select-prompt">Select a product to view details</p>';
        return;
    }

    infoContainer.innerHTML = `
      <div class="info-header">
        <h2>${product.name}</h2>
        <div class="product-price">${product.price}</div>
      </div>
      <div class="info-body">
        <img src="${product.image}" alt="${product.name}" class="info-image">
        <p class="product-description">${product.description}</p>
        <div class="product-features">
          <h3>Features:</h3>
          <ul class="features-list">
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
}

function initializeProducts() {
    const productsGrid = document.querySelector('.products-grid');
    let selectedCard = null;

    products.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);

        card.addEventListener('click', () => {
            if (selectedCard) {
                selectedCard.classList.remove('active');
            }

            if (selectedCard !== card) {
                card.classList.add('active');
                selectedCard = card;
                updateProductInfo(product);
            } else {
                selectedCard = null;
                updateProductInfo(null);
            }
        });
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeProducts);