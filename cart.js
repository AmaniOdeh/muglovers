
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('cart-total');
    const paymentMethods = document.getElementsByName('payment');
    const cardFields = document.getElementById('card-fields');
    const placeOrderBtn = document.querySelector('.place-order');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty 🛒</p>';
        totalElement.textContent = '$0.00';
    } else {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `<p><strong>${item.name}</strong> - $${item.price.toFixed(2)}</p>`;
            cartItemsContainer.appendChild(itemDiv);
            total += item.price;
        });

        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    function toggleCardFields() {
        const selected = [...paymentMethods].find(p => p.checked)?.value;
        if (selected === 'card') {
            cardFields.classList.remove('hidden');
        } else {
            cardFields.classList.add('hidden');
        }
    }

    paymentMethods.forEach(radio => {
        radio.addEventListener('change', toggleCardFields);
    });
    toggleCardFields();

    placeOrderBtn.addEventListener('click', () => {
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const payment = [...paymentMethods].find(p => p.checked)?.value;

        if (!address || !phone) {
            alert("Please enter your address and phone number.");
            return;
        }

        if (payment === 'card') {
            const cardNumber = document.getElementById('card-number').value.trim();
            const expiry = document.getElementById('expiry').value.trim();
            const cvv = document.getElementById('cvv').value.trim();

            if (!cardNumber || !expiry || !cvv) {
                alert("Please enter complete card information.");
                return;
            }
        }

        alert("Thank you! Your order has been placed.");
        localStorage.removeItem('cart');
        window.location.reload();
    });
});
