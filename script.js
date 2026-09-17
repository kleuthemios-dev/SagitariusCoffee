"use strict";


/* =========================================================
   SAGI COFFEE & PHOTOBOX
   POS / CASHIER SYSTEM

   PURE JAVASCRIPT
   NO REACT
   NO BABEL
   NO MIDTRANS
========================================================= */


/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [

    {
        id: "sagi-coffee",
        name: "SAGI Coffee",
        price: 25000,
        category: "signature",
        label: "SIGNATURE",
        description:
            "Signature SAGI yang smooth, creamy, dan easy to enjoy."
    },

    {
        id: "americano",
        name: "Americano",
        price: 18000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Clean coffee dengan karakter bold dan simple."
    },

    {
        id: "americano-peach",
        name: "Americano Peach",
        price: 23000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Americano dengan sentuhan peach yang fresh."
    },

    {
        id: "americano-mix-berry",
        name: "Americano Mix-Berry",
        price: 23000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Coffee dengan sentuhan fruity berry."
    },

    {
        id: "butterscotch",
        name: "Butterscotch",
        price: 23000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Sweet, buttery, creamy dan comforting."
    },

    {
        id: "caramel-latte",
        name: "Caramel Latte",
        price: 23000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Espresso dan milk dengan caramel lembut."
    },

    {
        id: "cappuccino",
        name: "Cappuccino",
        price: 23000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Espresso dengan silky milk foam."
    },

    {
        id: "kopi-susu-aren",
        name: "Kopi Susu Aren",
        price: 20000,
        category: "coffee",
        label: "COFFEE",
        description:
            "Coffee susu dengan rasa gula aren yang familiar."
    },

    {
        id: "mineral-water",
        name: "Mineral Water",
        price: 5000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Simple refreshment untuk menemani harimu."
    },

    {
        id: "honey-lemonade",
        name: "Honey Lemonade",
        price: 20000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Honey dan lemon dengan rasa ringan dan fresh."
    },

    {
        id: "strawberry-milk",
        name: "Strawberry Milk",
        price: 23000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Strawberry fruity dengan creamy milk."
    },

    {
        id: "chocolate-milk",
        name: "Chocolate Milk",
        price: 23000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Chocolate rich dengan milk yang lembut."
    },

    {
        id: "red-velvet-milk",
        name: "Red Velvet Milk",
        price: 23000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Sweet, smooth dan creamy."
    },

    {
        id: "lychee-yakult",
        name: "Lychee Yakult",
        price: 23000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Lychee dan Yakult yang ringan dan refreshing."
    },

    {
        id: "matcha-latte",
        name: "Matcha Latte",
        price: 23000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Earthy matcha dengan creamy milk."
    },

    {
        id: "taro-latte",
        name: "Taro Latte",
        price: 23000,
        category: "non-coffee",
        label: "NON-COFFEE",
        description:
            "Sweet taro dengan tekstur creamy."
    },

    {
        id: "sosis",
        name: "Sosis",
        price: 18000,
        category: "snack",
        label: "SNACK",
        description:
            "Savory bites untuk teman nongkrong."
    },

    {
        id: "french-fries",
        name: "French Fries",
        price: 18000,
        category: "snack",
        label: "SNACK",
        description:
            "Crispy fries untuk sharing."
    },

    {
        id: "churros",
        name: "Churros",
        price: 20000,
        category: "snack",
        label: "SNACK",
        description:
            "Sweet crispy bites untuk teman minum."
    },

    {
        id: "dimsum",
        name: "Dimsum",
        price: 25000,
        category: "snack",
        label: "SNACK",
        description:
            "Warm savory bites untuk sharing."
    },

    {
        id: "chicken-wings",
        name: "Chicken Wings",
        price: 25000,
        category: "snack",
        label: "SNACK",
        description:
            "Savory chicken wings untuk sharing."
    },

    {
        id: "toast",
        name: "Toast",
        price: 25000,
        category: "snack",
        label: "SNACK",
        description:
            "Warm toast untuk menemani minuman."
    },

    {
        id: "mix-plate",
        name: "Mix Plate",
        price: 30000,
        category: "snack",
        label: "SNACK",
        description:
            "Pilihan snack dalam satu plate."
    }

];


/* =========================================================
   STATE
========================================================= */

let activeFilter =
    "all";


let cart =
    loadCart();


let transactions =
    loadTransactions();


let toastTimer =
    null;


/* =========================================================
   DOM
========================================================= */

const productGrid =
    document.getElementById(
        "productGrid"
    );


const filterContainer =
    document.getElementById(
        "filterContainer"
    );


const orderDrawer =
    document.getElementById(
        "orderDrawer"
    );


const overlay =
    document.getElementById(
        "overlay"
    );


const orderItems =
    document.getElementById(
        "orderItems"
    );


const cartCount =
    document.getElementById(
        "cartCount"
    );


const orderTotal =
    document.getElementById(
        "orderTotal"
    );


const openOrderButton =
    document.getElementById(
        "openOrderButton"
    );


const heroOrderButton =
    document.getElementById(
        "heroOrderButton"
    );


const closeOrderButton =
    document.getElementById(
        "closeOrderButton"
    );


const clearOrderButton =
    document.getElementById(
        "clearOrderButton"
    );


const confirmPaymentButton =
    document.getElementById(
        "confirmPaymentButton"
    );


const orderNotes =
    document.getElementById(
        "orderNotes"
    );


const cashPaymentSection =
    document.getElementById(
        "cashPaymentSection"
    );


const cashReceived =
    document.getElementById(
        "cashReceived"
    );


const changeAmount =
    document.getElementById(
        "changeAmount"
    );


const cashierError =
    document.getElementById(
        "cashierError"
    );


const historyModal =
    document.getElementById(
        "historyModal"
    );


const openHistoryButton =
    document.getElementById(
        "openHistoryButton"
    );


const mobileHistoryButton =
    document.getElementById(
        "mobileHistoryButton"
    );

const closeHistoryButton =
    document.getElementById(
        "closeHistoryButton"
    );

    const resetHistoryButton =
    document.getElementById(
        "resetHistoryButton"
    );

const historyList =
    document.getElementById(
        "historyList"
    );


const todayTransactionCount =
    document.getElementById(
        "todayTransactionCount"
    );


const todayRevenue =
    document.getElementById(
        "todayRevenue"
    );


const allTransactionCount =
    document.getElementById(
        "allTransactionCount"
    );


const receiptModal =
    document.getElementById(
        "receiptModal"
    );


const receiptOrderId =
    document.getElementById(
        "receiptOrderId"
    );


const receiptOrderType =
    document.getElementById(
        "receiptOrderType"
    );


const receiptPayment =
    document.getElementById(
        "receiptPayment"
    );


const receiptItems =
    document.getElementById(
        "receiptItems"
    );


const receiptTotal =
    document.getElementById(
        "receiptTotal"
    );


const receiptCashRow =
    document.getElementById(
        "receiptCashRow"
    );


const receiptChangeRow =
    document.getElementById(
        "receiptChangeRow"
    );


const receiptCash =
    document.getElementById(
        "receiptCash"
    );


const receiptChange =
    document.getElementById(
        "receiptChange"
    );


const newOrderButton =
    document.getElementById(
        "newOrderButton"
    );


const toast =
    document.getElementById(
        "toast"
    );


const toastMessage =
    document.getElementById(
        "toastMessage"
    );


const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


/* =========================================================
   HELPERS
========================================================= */

function formatRupiah(
    value
) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style:
                "currency",

            currency:
                "IDR",

            minimumFractionDigits:
                0
        }
    ).format(
        value
    );

}


function escapeHTML(
    value
) {

    return String(
        value
    )

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            "\"",
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}


/* =========================================================
   STORAGE
========================================================= */

function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "sagiCart"
            );


        if (!saved) {

            return [];

        }


        const parsed =
            JSON.parse(
                saved
            );


        if (
            !Array.isArray(
                parsed
            )
        ) {

            return [];

        }


        return parsed;

    }

    catch (error) {

        console.error(
            "Cart gagal dibaca:",
            error
        );


        return [];

    }

}


function saveCart() {

    localStorage.setItem(
        "sagiCart",
        JSON.stringify(
            cart
        )
    );

}


function loadTransactions() {

    try {

        const saved =
            localStorage.getItem(
                "sagiTransactions"
            );


        if (!saved) {

            return [];

        }


        const parsed =
            JSON.parse(
                saved
            );


        return Array.isArray(
            parsed
        )
            ? parsed
            : [];

    }

    catch (error) {

        console.error(
            "History gagal dibaca:",
            error
        );


        return [];

    }

}


function saveTransactions() {

    localStorage.setItem(
        "sagiTransactions",
        JSON.stringify(
            transactions
        )
    );

}


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts() {

    const products =
        activeFilter ===
        "all"

            ? PRODUCTS

            : PRODUCTS.filter(
                product =>
                    product.category ===
                    activeFilter
            );


    productGrid.innerHTML =
        products.map(
            product => {

                const index =
                    PRODUCTS.findIndex(
                        item =>
                            item.id ===
                            product.id
                    ) + 1;


                return `
                    <article
                        class="
                            product-card
                            ${product.category}
                        "
                        data-product-id="${product.id}"
                        role="button"
                        tabindex="0"
                    >

                        <div class="product-number">

                            ${String(index).padStart(2, "0")}

                        </div>


                        <span class="product-category">

                            ${escapeHTML(product.label)}

                        </span>


                        <h3>

                            ${escapeHTML(product.name)}

                        </h3>


                        <p>

                            ${escapeHTML(product.description)}

                        </p>


                        <div class="product-footer">

                            <strong>

                                ${formatRupiah(product.price)}

                            </strong>


                            <button
                                class="add-button"
                                type="button"
                                tabindex="-1"
                            >
                                +
                            </button>

                        </div>

                    </article>
                `;

            }
        )
        .join("");


    window.setTimeout(
        animateProductCards,
        30
    );

}


/* =========================================================
   FILTER
========================================================= */

function setFilter(
    filter
) {

    activeFilter =
        filter;


    document
        .querySelectorAll(
            ".filter-button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter ===
                        filter
                );

            }
        );


    renderProducts();

}


/* =========================================================
   CART
========================================================= */

function addToCart(
    productId
) {

    const product =
        PRODUCTS.find(
            item =>
                item.id ===
                productId
        );


    if (!product) {

        return;

    }


    const existing =
        cart.find(
            item =>
                item.id ===
                productId
        );


    if (existing) {

        existing.quantity +=
            1;

    }

    else {

        cart.push(
            {
                id:
                    product.id,

                name:
                    product.name,

                price:
                    product.price,

                quantity:
                    1
            }
        );

    }


    saveCart();

    renderOrder();


    pulseCartCount();


    showToast(
        `${product.name} ditambahkan`
    );

}


function increaseItem(
    productId
) {

    const item =
        cart.find(
            item =>
                item.id ===
                productId
        );


    if (!item) {

        return;

    }


    item.quantity +=
        1;


    saveCart();

    renderOrder();

}


function decreaseItem(
    productId
) {

    const item =
        cart.find(
            item =>
                item.id ===
                productId
        );


    if (!item) {

        return;

    }


    item.quantity -=
        1;


    if (
        item.quantity <= 0
    ) {

        removeItem(
            productId
        );

        return;

    }


    saveCart();

    renderOrder();

}


function removeItem(
    productId
) {

    cart =
        cart.filter(
            item =>
                item.id !==
                productId
        );


    saveCart();

    renderOrder();

}


function clearOrder() {

    if (
        cart.length === 0
    ) {

        return;

    }


    const confirmed =
        window.confirm(
            "Kosongkan seluruh pesanan?"
        );


    if (!confirmed) {

        return;

    }


    resetCurrentOrder();

}


function resetCurrentOrder() {

    cart = [];


    saveCart();


    orderNotes.value =
        "";


    cashReceived.value =
        "";


    cashierError.textContent =
        "";


    renderOrder();

    updateChange();

}


/* =========================================================
   TOTALS
========================================================= */

function getCartCount() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            item.quantity,
        0
    );

}


function getCartTotal() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            item.price *
            item.quantity,
        0
    );

}


/* =========================================================
   RENDER CURRENT ORDER
========================================================= */

function renderOrder() {

    cartCount.textContent =
        getCartCount();


    orderTotal.textContent =
        formatRupiah(
            getCartTotal()
        );


    confirmPaymentButton.disabled =
        cart.length === 0;


    if (
        cart.length === 0
    ) {

        orderItems.innerHTML = `
            <div class="empty-order">

                <div class="empty-star">
                    ✦
                </div>

                <strong>
                    Belum ada pesanan
                </strong>

                <p>
                    Tekan card menu untuk menambahkan item.
                </p>

            </div>
        `;

        updateChange();

        return;

    }


    orderItems.innerHTML =
        cart.map(
            item => `
                <div class="order-row">

                    <div>

                        <h4>

                            ${escapeHTML(item.name)}

                        </h4>


                        <p>

                            ${formatRupiah(item.price)}
                            / item

                        </p>


                        <button
                            class="remove-item"
                            type="button"
                            data-order-action="remove"
                            data-product-id="${item.id}"
                        >
                            Remove
                        </button>

                    </div>


                    <div class="order-row-right">

                        <strong>

                            ${formatRupiah(
                                item.price *
                                item.quantity
                            )}

                        </strong>


                        <div class="quantity">

                            <button
                                type="button"
                                data-order-action="decrease"
                                data-product-id="${item.id}"
                            >
                                −
                            </button>


                            <span>

                                ${item.quantity}

                            </span>


                            <button
                                type="button"
                                data-order-action="increase"
                                data-product-id="${item.id}"
                            >
                                +
                            </button>

                        </div>

                    </div>

                </div>
            `
        )
        .join("");


    updateChange();

}


/* =========================================================
   DRAWER
========================================================= */

function openOrder() {

    closeMobileMenu();


    orderDrawer.classList.add(
        "active"
    );


    overlay.classList.add(
        "active"
    );


    document.body.classList.add(
        "locked"
    );

}


function closeOrder() {

    orderDrawer.classList.remove(
        "active"
    );


    overlay.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "locked"
    );

}


/* =========================================================
   PAYMENT METHOD
========================================================= */

function getPaymentMethod() {

    const selected =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        );


    return selected
        ? selected.value
        : "Cash";

}


function getOrderType() {

    const selected =
        document.querySelector(
            'input[name="orderType"]:checked'
        );


    return selected
        ? selected.value
        : "Dine In";

}


function updatePaymentUI() {

    const method =
        getPaymentMethod();


    cashPaymentSection.classList.toggle(
        "hidden",
        method !==
            "Cash"
    );


    cashierError.textContent =
        "";


    updateChange();

}


/* =========================================================
   CASH
========================================================= */

function updateChange() {

    const total =
        getCartTotal();


    const received =
        Number(
            cashReceived.value
        ) || 0;


    const change =
        Math.max(
            received -
            total,
            0
        );


    changeAmount.textContent =
        formatRupiah(
            change
        );

}


function setQuickCash(
    value
) {

    const total =
        getCartTotal();


    if (
        value ===
        "exact"
    ) {

        cashReceived.value =
            total;

    }

    else {

        cashReceived.value =
            Number(
                value
            );

    }


    updateChange();

}


/* =========================================================
   ORDER ID
========================================================= */

function generateOrderId() {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    const random =
        Math.floor(
            1000 +
            Math.random() *
            9000
        );


    return (
        `SAGI-${year}${month}${day}-${random}`
    );

}


/* =========================================================
   CONFIRM PAYMENT
========================================================= */

function confirmPayment() {

    cashierError.textContent =
        "";


    if (
        cart.length === 0
    ) {

        cashierError.textContent =
            "Pesanan masih kosong.";

        return;

    }


    const total =
        getCartTotal();


    const paymentMethod =
        getPaymentMethod();


    const orderType =
        getOrderType();


    let received =
        null;


    let change =
        0;


    if (
        paymentMethod ===
        "Cash"
    ) {

        received =
            Number(
                cashReceived.value
            ) || 0;


        if (
            received <
            total
        ) {

            cashierError.textContent =
                "Uang diterima kurang dari total pembayaran.";

            return;

        }


        change =
            received -
            total;

    }


    const transaction = {

        orderId:
            generateOrderId(),

        orderType:
            orderType,

        items:
            cart.map(
                item => ({
                    ...item
                })
            ),

        notes:
            orderNotes.value.trim(),

        total:
            total,

        paymentMethod:
            paymentMethod,

        cashReceived:
            received,

        change:
            change,

        paymentStatus:
            "PAID",

        createdAt:
            new Date().toISOString()

    };


    transactions.unshift(
        transaction
    );


    /*
        Batas sederhana agar localStorage
        tidak terus membesar.
    */

    transactions =
        transactions.slice(
            0,
            500
        );


    saveTransactions();


    closeOrder();


    showReceipt(
        transaction
    );


    resetCurrentOrder();

}


/* =========================================================
   RECEIPT
========================================================= */

function showReceipt(
    transaction
) {

    receiptOrderId.textContent =
        transaction.orderId;


    receiptOrderType.textContent =
        transaction.orderType;


    receiptPayment.textContent =
        transaction.paymentMethod;


    receiptTotal.textContent =
        formatRupiah(
            transaction.total
        );


    receiptItems.innerHTML =
        transaction.items.map(
            item => `
                <div class="receipt-item">

                    <span>

                        ${item.quantity} ×
                        ${escapeHTML(item.name)}

                    </span>


                    <strong>

                        ${formatRupiah(
                            item.price *
                            item.quantity
                        )}

                    </strong>

                </div>
            `
        )
        .join("");


    const isCash =
        transaction.paymentMethod ===
        "Cash";


    receiptCashRow.style.display =
        isCash
            ? "flex"
            : "none";


    receiptChangeRow.style.display =
        isCash
            ? "flex"
            : "none";


    if (isCash) {

        receiptCash.textContent =
            formatRupiah(
                transaction.cashReceived
            );


        receiptChange.textContent =
            formatRupiah(
                transaction.change
            );

    }


    receiptModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "locked"
    );


    renderHistory();

}


/* =========================================================
   HISTORY
========================================================= */

function openHistory() {

    closeOrder();

    closeMobileMenu();

    renderHistory();


    historyModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "locked"
    );

}


function closeHistory() {

    historyModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "locked"
    );

}


function isToday(
    isoDate
) {

    const date =
        new Date(
            isoDate
        );


    const today =
        new Date();


    return (
        date.getFullYear() ===
            today.getFullYear()

        &&

        date.getMonth() ===
            today.getMonth()

        &&

        date.getDate() ===
            today.getDate()
    );

}


function formatTransactionTime(
    isoDate
) {

    return new Intl.DateTimeFormat(
        "id-ID",
        {
            day:
                "2-digit",

            month:
                "short",

            year:
                "numeric",

            hour:
                "2-digit",

            minute:
                "2-digit"
        }
    ).format(
        new Date(
            isoDate
        )
    );

}


function renderHistory() {

    const todayTransactions =
        transactions.filter(
            transaction =>
                isToday(
                    transaction.createdAt
                )
        );


    const todayTotal =
        todayTransactions.reduce(
            (
                total,
                transaction
            ) =>
                total +
                transaction.total,
            0
        );


    todayTransactionCount.textContent =
        todayTransactions.length;


    todayRevenue.textContent =
        formatRupiah(
            todayTotal
        );


    allTransactionCount.textContent =
        transactions.length;


    if (
        transactions.length === 0
    ) {

        historyList.innerHTML = `
            <div class="empty-history">

                <div
                    style="
                        font-size: 30px;
                        margin-bottom: 12px;
                    "
                >
                    ✦
                </div>

                Belum ada transaksi SAGI.

            </div>
        `;

        return;

    }


    historyList.innerHTML =
        transactions.map(
            transaction => {

                const totalItems =
                    transaction.items.reduce(
                        (
                            total,
                            item
                        ) =>
                            total +
                            item.quantity,
                        0
                    );


                const productsHTML =
                    transaction.items
                        .map(
                            item => {

                                const subtotal =
                                    item.price *
                                    item.quantity;


                                return `
                                    <div class="history-product">

                                        <div>

                                            <h5>

                                                ${escapeHTML(item.name)}

                                            </h5>


                                            <p>

                                                ${item.quantity}
                                                ×
                                                ${formatRupiah(item.price)}

                                            </p>

                                        </div>


                                        <strong>

                                            ${formatRupiah(subtotal)}

                                        </strong>

                                    </div>
                                `;

                            }
                        )
                        .join("");


                const cashDetails =
                    transaction.paymentMethod ===
                    "Cash"

                        ? `
                            <div class="history-extra-row">

                                <span>
                                    Uang Diterima
                                </span>

                                <strong>
                                    ${formatRupiah(
                                        transaction.cashReceived || 0
                                    )}
                                </strong>

                            </div>


                            <div class="history-extra-row">

                                <span>
                                    Kembalian
                                </span>

                                <strong>
                                    ${formatRupiah(
                                        transaction.change || 0
                                    )}
                                </strong>

                            </div>
                        `

                        : "";


                const notes =
                    transaction.notes

                        ? `
                            <div class="history-extra-row">

                                <span>
                                    Catatan
                                </span>

                                <strong>
                                    ${escapeHTML(transaction.notes)}
                                </strong>

                            </div>
                        `

                        : "";


                return `
                    <article class="history-item">

                        <div class="history-summary">

                            <div class="history-summary-main">

                                <h4>

                                    ${escapeHTML(transaction.orderId)}

                                </h4>


                                <p>

                                    ${escapeHTML(transaction.orderType)}
                                    •
                                    ${escapeHTML(transaction.paymentMethod)}
                                    •
                                    ${totalItems} item

                                </p>


                                <p>

                                    ${formatTransactionTime(
                                        transaction.createdAt
                                    )}

                                </p>


                                <button
                                    class="history-detail-button"
                                    type="button"
                                    data-history-toggle="${transaction.orderId}"
                                >
                                    Lihat Detail Pesanan
                                </button>

                            </div>


                            <div class="history-item-right">

                                <strong>

                                    ${formatRupiah(
                                        transaction.total
                                    )}

                                </strong>


                                <span class="paid-badge">
                                    PAID
                                </span>

                            </div>

                        </div>


                        <div
                            class="history-detail"
                            data-history-detail="${transaction.orderId}"
                        >

                            <p class="history-detail-title">
                                ITEM PESANAN
                            </p>


                            ${productsHTML}


                            <div class="history-extra">

                                <div class="history-extra-row">

                                    <span>
                                        Order Type
                                    </span>

                                    <strong>
                                        ${escapeHTML(
                                            transaction.orderType
                                        )}
                                    </strong>

                                </div>


                                <div class="history-extra-row">

                                    <span>
                                        Pembayaran
                                    </span>

                                    <strong>
                                        ${escapeHTML(
                                            transaction.paymentMethod
                                        )}
                                    </strong>

                                </div>


                                ${cashDetails}

                                ${notes}


                                <div class="history-extra-row">

                                    <span>
                                        Total
                                    </span>

                                    <strong>
                                        ${formatRupiah(
                                            transaction.total
                                        )}
                                    </strong>

                                </div>

                            </div>

                        </div>

                    </article>
                `;

            }
        )
        .join("");

}

/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    window.clearTimeout(
        toastTimer
    );


    toastTimer =
        window.setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1600
        );

}


/* =========================================================
   CART COUNT ANIMATION
========================================================= */

function pulseCartCount() {

    cartCount.classList.remove(
        "pulse"
    );


    void cartCount.offsetWidth;


    cartCount.classList.add(
        "pulse"
    );

}


/* =========================================================
   CARD ANIMATION
========================================================= */

function animateAddedCard(
    card
) {

    card.classList.remove(
        "card-added"
    );


    void card.offsetWidth;


    card.classList.add(
        "card-added"
    );


    window.setTimeout(
        () => {

            card.classList.remove(
                "card-added"
            );

        },
        500
    );

}


/* =========================================================
   PRODUCT STAGGER
========================================================= */

function animateProductCards() {

    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(
        card => {

            card.classList.add(
                "reveal-product"
            );

        }
    );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    (
                        entry,
                        index
                    ) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        window.setTimeout(
                            () => {

                                entry.target
                                    .classList
                                    .add(
                                        "product-visible"
                                    );

                            },
                            index * 60
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    0.08
            }
        );


    cards.forEach(
        card =>
            observer.observe(
                card
            )
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function setupScrollReveal() {

    const targets = [

        {
            element:
                document.querySelector(
                    ".section-header"
                ),

            className:
                "reveal"
        },

        {
            element:
                document.querySelector(
                    ".experience-text"
                ),

            className:
                "reveal-left"
        },

        {
            element:
                document.querySelector(
                    ".photo-stack"
                ),

            className:
                "reveal-right"
        },

        {
            element:
                document.querySelector(
                    ".footer-container"
                ),

            className:
                "reveal"
        }

    ];


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "reveal-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    0.15
            }
        );


    targets.forEach(
        item => {

            if (
                !item.element
            ) {

                return;

            }


            item.element.classList.add(
                item.className
            );


            observer.observe(
                item.element
            );

        }
    );

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function setupScrollProgress() {

    const bar =
        document.getElementById(
            "scrollProgress"
        );


    function update() {

        const maxScroll =
            document.documentElement
                .scrollHeight
            -
            window.innerHeight;


        const percentage =
            maxScroll > 0
                ?
                (
                    window.scrollY /
                    maxScroll
                ) * 100

                :
                0;


        bar.style.width =
            `${percentage}%`;

    }


    window.addEventListener(
        "scroll",
        update,
        {
            passive:
                true
        }
    );


    update();

}


/* =========================================================
   NAVBAR
========================================================= */

function setupNavbar() {

    const navbar =
        document.querySelector(
            ".navbar"
        );


    function update() {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    }


    window.addEventListener(
        "scroll",
        update,
        {
            passive:
                true
        }
    );


    update();

}


/* =========================================================
   RIPPLE
========================================================= */

function setupRipple() {

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".button, .add-button, .cart-button, .pay-button, .new-order-button"
                );


            if (!button) {

                return;

            }


            const rect =
                button.getBoundingClientRect();


            const ripple =
                document.createElement(
                    "span"
                );


            ripple.className =
                "ripple-effect";


            ripple.style.left =
                `${
                    event.clientX -
                    rect.left
                }px`;


            ripple.style.top =
                `${
                    event.clientY -
                    rect.top
                }px`;


            button.appendChild(
                ripple
            );


            ripple.addEventListener(
                "animationend",
                () =>
                    ripple.remove()
            );

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    mobileMenu.classList.toggle(
        "active"
    );

}


function closeMobileMenu() {

    mobileMenu.classList.remove(
        "active"
    );

}


/* =========================================================
   SAGITTARIUS BACKGROUND
========================================================= */

function startSagittariusBackground() {

    const canvas =
        document.getElementById(
            "sagittariusCanvas"
        );


    if (!canvas) {

        return;

    }


    const context =
        canvas.getContext(
            "2d"
        );


    if (!context) {

        return;

    }


    let width = 0;

    let height = 0;


    const pointer = {

        x: 0.5,

        y: 0.5

    };


    const stars = [];


    const constellation = [

        { x: 0.24, y: 0.34 },

        { x: 0.37, y: 0.43 },

        { x: 0.48, y: 0.32 },

        { x: 0.59, y: 0.43 },

        { x: 0.52, y: 0.56 },

        { x: 0.40, y: 0.55 },

        { x: 0.31, y: 0.68 },

        { x: 0.57, y: 0.69 },

        { x: 0.69, y: 0.59 },

        { x: 0.74, y: 0.42 }

    ];


    const connections = [

        [0, 1],

        [1, 2],

        [2, 3],

        [3, 4],

        [4, 5],

        [5, 1],

        [5, 6],

        [4, 7],

        [7, 8],

        [8, 9]

    ];


    const starCount =
        window.innerWidth <=
        768
            ? 80
            : 170;


    for (
        let i = 0;
        i < starCount;
        i += 1
    ) {

        stars.push(
            {
                x:
                    Math.random(),

                y:
                    Math.random(),

                radius:
                    Math.random() *
                    1.5 +
                    0.25,

                speed:
                    Math.random() *
                    0.7 +
                    0.2,

                phase:
                    Math.random() *
                    Math.PI *
                    2
            }
        );

    }


    function resize() {

        const parent =
            canvas.parentElement;


        width =
            parent.clientWidth;


        height =
            parent.clientHeight;


        const dpr =
            Math.min(
                window.devicePixelRatio ||
                1,
                2
            );


        canvas.width =
            Math.floor(
                width * dpr
            );


        canvas.height =
            Math.floor(
                height * dpr
            );


        canvas.style.width =
            `${width}px`;


        canvas.style.height =
            `${height}px`;


        context.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    function drawBackground() {

        const gradient =
            context.createLinearGradient(
                0,
                0,
                width,
                height
            );


        gradient.addColorStop(
            0,
            "#020617"
        );


        gradient.addColorStop(
            0.55,
            "#07122f"
        );


        gradient.addColorStop(
            1,
            "#11194a"
        );


        context.fillStyle =
            gradient;


        context.fillRect(
            0,
            0,
            width,
            height
        );

    }


    function drawStars(
        time
    ) {

        stars.forEach(
            star => {

                const alpha =
                    0.3 +
                    (
                        Math.sin(
                            time *
                            0.001 *
                            star.speed +
                            star.phase
                        )
                        +
                        1
                    )
                    *
                    0.22;


                const x =
                    star.x *
                    width
                    +
                    (
                        pointer.x -
                        0.5
                    )
                    *
                    star.radius *
                    8;


                const y =
                    star.y *
                    height
                    +
                    (
                        pointer.y -
                        0.5
                    )
                    *
                    star.radius *
                    8;


                context.beginPath();


                context.arc(
                    x,
                    y,
                    star.radius,
                    0,
                    Math.PI * 2
                );


                context.fillStyle =
                    `rgba(224,236,255,${alpha})`;


                context.fill();

            }
        );

    }


    function getPoints() {

        const cw =
            Math.min(
                width * 0.78,
                760
            );


        const ch =
            Math.min(
                height * 0.64,
                520
            );


        const left =
            width / 2 -
            cw / 2;


        const top =
            height / 2 -
            ch / 2;


        return constellation.map(
            point => ({
                x:
                    left +
                    point.x *
                    cw,

                y:
                    top +
                    point.y *
                    ch
            })
        );

    }


    function drawConstellation(
        time
    ) {

        const points =
            getPoints();


        context.lineWidth =
            0.9;


        context.strokeStyle =
            "rgba(150,180,255,0.28)";


        connections.forEach(
            connection => {

                const first =
                    points[
                        connection[0]
                    ];


                const second =
                    points[
                        connection[1]
                    ];


                context.beginPath();


                context.moveTo(
                    first.x,
                    first.y
                );


                context.lineTo(
                    second.x,
                    second.y
                );


                context.stroke();

            }
        );


        points.forEach(
            (
                point,
                index
            ) => {

                const pulse =
                    1 +
                    Math.sin(
                        time *
                        0.002 +
                        index
                    )
                    *
                    0.2;


                context.beginPath();


                context.arc(
                    point.x,
                    point.y,
                    2.3 *
                    pulse,
                    0,
                    Math.PI * 2
                );


                context.fillStyle =
                    "#fff2da";


                context.shadowBlur =
                    18;


                context.shadowColor =
                    "#95b8ff";


                context.fill();


                context.shadowBlur =
                    0;

            }
        );

    }


    function drawShootingStar(
        time
    ) {

        const cycle =
            (
                time /
                1000
            ) %
            10;


        if (
            cycle >
            1.1
        ) {

            return;

        }


        const progress =
            cycle /
            1.1;


        const x =
            width *
            0.84
            -
            progress *
            width *
            0.27;


        const y =
            height *
            0.16
            +
            progress *
            height *
            0.18;


        const gradient =
            context.createLinearGradient(
                x,
                y,
                x + 100,
                y - 60
            );


        gradient.addColorStop(
            0,
            "rgba(255,255,255,0.95)"
        );


        gradient.addColorStop(
            1,
            "rgba(255,255,255,0)"
        );


        context.beginPath();


        context.moveTo(
            x,
            y
        );


        context.lineTo(
            x + 100,
            y - 60
        );


        context.strokeStyle =
            gradient;


        context.lineWidth =
            1.3;


        context.stroke();

    }


    function animate(
        time
    ) {

        drawBackground();

        drawStars(
            time
        );

        drawConstellation(
            time
        );

        drawShootingStar(
            time
        );


        requestAnimationFrame(
            animate
        );

    }


    function pointerMove(
        event
    ) {

        pointer.x =
            event.clientX /
            window.innerWidth;


        pointer.y =
            event.clientY /
            window.innerHeight;

    }


    resize();


    window.addEventListener(
        "resize",
        resize
    );


    window.addEventListener(
        "pointermove",
        pointerMove,
        {
            passive:
                true
        }
    );


    requestAnimationFrame(
        animate
    );

}

function toggleHistoryDetail(
    orderId,
    button
) {

    const detail =
        historyList.querySelector(
            `[data-history-detail="${orderId}"]`
        );


    if (!detail) {
        return;
    }


    const opened =
        detail.classList.toggle(
            "active"
        );


    if (button) {

        button.textContent =
            opened

                ? "Tutup Detail"

                : "Lihat Detail Pesanan";

    }

}

function resetHistory() {

    if (
        transactions.length === 0
    ) {

        alert(
            "History transaksi masih kosong."
        );

        return;

    }


    const confirmed =
        window.confirm(
            "Reset seluruh riwayat transaksi SAGI?\n\n" +
            "Semua data penjualan yang tersimpan di browser ini akan dihapus."
        );


    if (!confirmed) {
        return;
    }


    transactions = [];


    saveTransactions();


    renderHistory();


    showToast(
        "History berhasil di-reset"
    );

}


/* =========================================================
   EVENTS
========================================================= */

filterContainer.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".filter-button"
            );


        if (!button) {

            return;

        }


        setFilter(
            button.dataset.filter
        );

    }
);


productGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".product-card"
            );


        if (!card) {

            return;

        }


        addToCart(
            card.dataset.productId
        );


        animateAddedCard(
            card
        );

    }
);


productGrid.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Enter"
            &&
            event.key !==
            " "
        ) {

            return;

        }


        const card =
            event.target.closest(
                ".product-card"
            );


        if (!card) {

            return;

        }


        event.preventDefault();


        addToCart(
            card.dataset.productId
        );


        animateAddedCard(
            card
        );

    }
);


orderItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-order-action]"
            );


        if (!button) {

            return;

        }


        const action =
            button.dataset.orderAction;


        const productId =
            button.dataset.productId;


        if (
            action ===
            "increase"
        ) {

            increaseItem(
                productId
            );

        }


        if (
            action ===
            "decrease"
        ) {

            decreaseItem(
                productId
            );

        }


        if (
            action ===
            "remove"
        ) {

            removeItem(
                productId
            );

        }

    }
);


openOrderButton.addEventListener(
    "click",
    openOrder
);


heroOrderButton.addEventListener(
    "click",
    openOrder
);


closeOrderButton.addEventListener(
    "click",
    closeOrder
);


overlay.addEventListener(
    "click",
    closeOrder
);


clearOrderButton.addEventListener(
    "click",
    clearOrder
);


confirmPaymentButton.addEventListener(
    "click",
    confirmPayment
);


cashReceived.addEventListener(
    "input",
    updateChange
);


document
    .querySelectorAll(
        'input[name="paymentMethod"]'
    )
    .forEach(
        radio => {

            radio.addEventListener(
                "change",
                updatePaymentUI
            );

        }
    );


document
    .querySelectorAll(
        "[data-cash]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    setQuickCash(
                        button.dataset.cash
                    );

                }
            );

        }
    );


openHistoryButton.addEventListener(
    "click",
    openHistory
);


mobileHistoryButton.addEventListener(
    "click",
    openHistory
);


closeHistoryButton.addEventListener(
    "click",
    closeHistory
);


historyModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            historyModal
        ) {

            closeHistory();

        }

    }
);


newOrderButton.addEventListener(
    "click",
    () => {

        receiptModal.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "locked"
        );


        document
            .getElementById(
                "menu"
            )
            .scrollIntoView(
                {
                    behavior:
                        "smooth"
                }
            );

    }
);


receiptModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            receiptModal
        ) {

            receiptModal.classList.remove(
                "active"
            );


            document.body.classList.remove(
                "locked"
            );

        }

    }
);


menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


mobileMenu
    .querySelectorAll(
        "a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        closeOrder();

        closeHistory();


        receiptModal.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "locked"
        );

    }
);

historyList.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-history-toggle]"
            );


        if (!button) {
            return;
        }


        toggleHistoryDetail(
            button.dataset.historyToggle,
            button
        );

    }
);

resetHistoryButton.addEventListener(
    "click",
    resetHistory
);


/* =========================================================
   INITIALIZE
========================================================= */

renderProducts();

renderOrder();

renderHistory();

updatePaymentUI();

setupScrollProgress();

setupNavbar();

setupScrollReveal();

setupRipple();

startSagittariusBackground();


console.log(
    "SAGI POS berhasil dimuat ✦"
);