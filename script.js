document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Tibieras para MMA", image: "tibieras.jpg", value: 30000 },
        { name: "Guantines para MMA", image: "tibieras.jpg", value: 22300 },
        { name: "Vendas de boxeo", image: "tibieras.jpg", value: 12000 },
        { name: "Guantes de boxeo", image: "tibieras.jpg", value: 65000 },
        { name: "heavybag", image: "tibieras.jpg", value: 35500 },
    ];

    const cartItems = [];

    const addToCart = (product) => {
        cartItems.push(product);
        updateCart();
    };

    const updateCart = () => {
        const cartItemsElement = document.getElementById("cart-items");
        const cartTotalElement = document.getElementById("cart-total");
        const totalValueElement = document.getElementById("total-value");

        cartItemsElement.innerHTML = "";
        let total = 0;

        for (const item of cartItems) {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Valor: $${item.value}`;
        cartItemsElement.appendChild(li);
        total += item.value;
        }

        totalValueElement.textContent = total;
    };

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
        addToCart(products[index]);
        });
    });
});