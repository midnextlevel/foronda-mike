document.addEventListener('DOMContentLoaded', async () => {
    // Select the product container element
    const productContainer = document.getElementById("productContainer");
  
    try {
      // Fetch product data from the API
      const response = await fetch("https://fakestoreapi.com/products");
  
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
  
      const data = await response.json();
  
      let html = '';
      data.forEach((product) => {
        // Generate HTML markup for each product
        html += `
          <div class="col">
            <div class="card h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text text-truncate">${product.description}</p>
                <p class="card-text font-weight-bold">$${product.price}</p>
              </div>
            </div>
          </div>
        `;
      });
  
      // Insert the generated HTML markup into the product container
      productContainer.innerHTML = html;
  
    } catch (error) {
      productContainer.innerHTML = "An error occurred while fetching data";
      console.error(error);
    }
  });
  