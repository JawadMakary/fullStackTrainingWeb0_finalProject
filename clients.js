var carousel = document.getElementById("carousel");
//  fetch fct
const getClientsDataFromApi = () => {
  fetch("http://localhost:3030/clients")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((entry) => {
        var clientsData = document.createElement("div");
        clientsData.className = "swiper-slide";
        clientsData.innerHTML += `
        <img src=${entry.imageUrl} class="img-fluid" alt="" />
      
          `;
        carousel.appendChild(clientsData);
      });
    });
};
getClientsDataFromApi();
