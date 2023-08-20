const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.querySelectorAll(".product");
  
    products.forEach((product) => {
      const h2 = product.querySelector("h2");
      const textValue = h2.textContent;
  
      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  };