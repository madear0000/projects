const buttonForNewProduct = document.getElementById("newProduct");
const areaForAdd = document.getElementById("addNew");
const addElementProduct = document.getElementById("forProdcuts");
const buttonForDeleteAll = document.getElementById("deleteAll");
let count = 0;
// let allProducts;

function addElement(name, count) {
    return `
    <div class="product d-flex justify-content-between" id=${count}>
        <p>${name}</p>
        <div class="form-check">
            <input class="form-check-input" name="bought-products" type="checkbox" value="" data-index=${count}>
            <label class="form-check-label" for="defaultCheck1">
            </label>
        </div>              
    </div>`
}


// addElementProduct.addEventListener('click', (block) => {
//     if (block.target.dataset.index) {
//         if (block.target.checked) {
//             allProducts.forEach((oneProduct) => {
//                 if (oneProduct.id == block.target.dataset.index) {
//                     oneProduct.classList.add('product-done');
//                 }
//             })
//         } else if (!block.target.checked) {
//             allProducts.forEach((oneProduct) => {
//                 if (oneProduct.id == block.target.dataset.index) {
//                     oneProduct.classList.remove('product-done');
//                 }
//             })
//         }
//     }
// });

buttonForNewProduct.addEventListener('click', () => {
    if (areaForAdd.value != "") {
        count++;
        let nameProduct = areaForAdd.value
        addElementProduct.insertAdjacentHTML('beforeend', addElement(nameProduct, count));
        areaForAdd.value = "";
        // allProducts = document.querySelectorAll(".product")
    }
});

buttonForDeleteAll.addEventListener('click', () => {
    document.querySelectorAll(".one-product").forEach(elem => elem.remove());
});

