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

//Task 4: Display the Products

function displayProducts(products) {
    // 
    const productContainer = document.getElementById('#product-container');
    
    const fiveProducts = products.slice(0,5);
    fiveProducts.forEach(product => {

        const productCard = document.createElement('div');
        productCard.setAttribute('class','product-card');

      // Element for product's name 
      const productName = document.createElement('h3');
      productPrice.setAttribute('class', 'product-header');
      productName.textContent = product.fields.name;
  
      // Element for the product's price 
      const productPrice = document.createElement('p');
      productPrice.setAttribute('class', 'product-price');
      productPrice.textContent = '$' + product.fields.price;

      // Element fo the product's image 
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.width = 200;
      productImage.height = 2000;
  
      // Append for the elements
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productImage);
  
      // Append the product container
      productContainer.appendChild(productCard);
    })
}

//Task 5:Reusable Error Handler

function handleError(error) {
    console.error('Error has occurred:', error);
  } //This is the function fir the handler for reusable error

  //Task 6: Call Your Fetch Functions
  fetchProductsThen();    // uses .then() to call fetch function
  fetchProductsAsync();   // uses async to call fetch function
