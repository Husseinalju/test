// بيانات المنتجات
const products = [
    {
        name: "تي شيرت رياضي",
        price: "120 ريال",
        image: "images/product1.jpg"
    },
    {
        name: "سروال رياضي",
        price: "150 ريال",
        image: "images/product2.jpg"
    },
    {
        name: "جاكيت رياضي",
        price: "200 ريال",
        image: "images/product3.jpg"
    },
    {
        name: "حذاء رياضي",
        price: "300 ريال",
        image: "images/product4.jpg"
    }
];

// إضافة المنتجات إلى صفحة الويب
const productGrid = document.getElementById('productGrid');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>سعر: ${product.price}</p>
        <button class="btn">أضف إلى السلة</button>
    `;
    
    productGrid.appendChild(productDiv);
});
