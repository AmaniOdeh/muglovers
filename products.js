const products = [
    {
        name: "Personalized Mug",
        price: 12.99,
        image: "./images/slide11home.jpeg",
    },
    {
        name: "Travel Mug",
        price: 18.49,
        image: "./images/slide1home.jpeg",
    },
    {
        name: "Funny Quote Mug",
        price: 9.99,
        image: "./images/slide22home.jpeg",
    },
    {
        name: "Couple Mug Set",
        price: 22.5,
        image: "./images/slide44home.jpeg",
    },
    {
        name: "Personalized Mug",
        price: 12.99,
        image: "./images/slide11home.jpeg",
    },
    {
        name: "Travel Mug",
        price: 18.49,
        image: "./images/slide1home.jpeg",
    },
    {
        name: "Funny Quote Mug",
        price: 9.99,
        image: "./images/slide22home.jpeg",
    },
    {
        name: "Couple Mug Set",
        price: 22.5,
        image: "./images/slide44home.jpeg",
    },
    {
        name: "Personalized Mug",
        price: 12.99,
        image: "./images/slide11home.jpeg",
    },
    {
        name: "Travel Mug",
        price: 18.49,
        image: "./images/slide1home.jpeg",
    },
    {
        name: "Funny Quote Mug",
        price: 9.99,
        image: "./images/slide22home.jpeg",
    },
    {
        name: "Couple Mug Set",
        price: 22.5,
        image: "./images/slide44home.jpeg",
    },
];

// مكان عرض المنتجات
const grid = document.getElementById("productGrid");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-md-4 col-sm-6";
    card.innerHTML = `
  <div class="product-card">
    <img src="${product.image}" alt="${product.name}" class="product-img" />
    <h3>${product.name}</h3>
    <p class="price">$${product.price.toFixed(2)}</p>
    <div class="actions">
        <button class="btn buy">Buy Now</button>
        <button class="btn cart add-to-cart"><i class="fas fa-shopping-cart"></i> Add</button>
    </div>
  </div>
`;

    grid.appendChild(card);
});


// نحدث عداد السلة بعد توليد الكروت
let cartCount = 0;
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const buttons = document.querySelectorAll('.add-to-cart');
        const counter = document.getElementById('cart-count');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                cartCount++;
                counter.textContent = cartCount;
            });
        });
    }, 100);
});
