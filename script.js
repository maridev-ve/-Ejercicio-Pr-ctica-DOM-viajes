import { dataCities, dataImg } from "./data.js"

const divRecommended = document.getElementById("recommended")
let img = "";



dataImg.forEach(imgItem => {

    const card = `
                <div class="card-item">
                    <img src="${imgItem.url_img}" alt="${imgItem.alt}">
                    <h3>${imgItem.title}</h3>
                    <p>${imgItem.description}</p>
                </div>
            
`;

    img += card;

});

divRecommended.innerHTML = img;


const selectDestinations = document.getElementById("destinations")
let destinations = "";

dataCities.forEach(destinationsItems => {
    const option = `<option>${destinationsItems}</option>` 

    destinations += option;
});

selectDestinations.innerHTML = destinations;