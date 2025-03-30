//Task 2: Fetch Products with .then()

const BASE_URL = "https://www.course-api.com/javascript-store-products";// URL to get data from
function fetchProductsThen() {
    fetch(BASE_URL)
    .then (response => {
        if (!response.ok) {
            throw new Error(`Error regarding HTTP `)

        }
        return response.json();//
    })// function is here to get data from the product

    .then (products =>{
        products.forEach(product =>{
            console.log(product.fields.name);
        });// this is where the name of the product is logged to the console
    })

    .catch(error => {
        console.error ('Failure issue regarding fetch :', error);// catch is used to log errors
    })

}

//Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Failure fetching data`);
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}