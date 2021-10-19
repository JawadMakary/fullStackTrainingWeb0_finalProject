var servicesContainer = document.getElementById("servicesRow");
//  fetch fct
const getDataFromApi = () => {
  fetch("http://localhost:3030/services")
    .then((response) => response.json()) // Arrow functions
    .then((json) => {
      json.forEach((entry) => {
        var servicesData = document.createElement("div");
        servicesData.className = "col-lg-4 col-md-6 d-flex align-items-stretch";
        servicesData.innerHTML += `
        <div class="icon-box">
        <div class="icon"><i class="bx bxl-dribbble"></i></div>
        <h4><a href="">${entry.service_name}</a></h4>
        <p>${entry.service_description}</p>
      </div>
            
             
            
             
          `;
        servicesContainer.appendChild(servicesData);
      });
    });
};
getDataFromApi();
