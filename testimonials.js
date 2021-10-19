var testimonialsContainer = document.getElementById("testimonialsContainer");
//  fetch fct
const getTestimonialsDataFromApi = () => {
  fetch("http://localhost:3030/testimonials")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((entry) => {
        var testimonialsData = document.createElement("div");
        testimonialsData.className = "testimonial-item";
        testimonialsData.innerHTML += `

          <img src=${entry.imageUrl} class="testimonial-img" alt="">
          <h3>${entry.name}</h3>
          <h4>${entry.position}</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  ${entry.description}
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
       
            `;
        testimonialsContainer.appendChild(testimonialsData);
      });
      console.log(json);
    });
};
getTestimonialsDataFromApi();
