var mainCats = document.getElementById("mainCategories");
const getCategoriesFromApi = () => {
  var raw = "";
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch("http://localhost:3030/categories")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((entry) => {
        var categoriesData = document.createElement("div");
        categoriesData.className = "col-xl-2 col-md-4";
        categoriesData.innerHTML += `
      
        <div class="icon-box">
          <i class="ri-store-line"></i>
          <h3><a href="">${entry.category_name}</a></h3>
        </div>
    
        `;
        mainCats.appendChild(categoriesData);
      });
    });
};
getCategoriesFromApi();
