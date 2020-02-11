import HOUSESERVICE from "../Services/HousesService.js"
import store from "../store.js"

function _draw() {
  let houses = store.State.houses;
  let housesElem = document.getElementById("houses");
  let template = "";

  houses.forEach(thing => {
    template += thing.Template;
  });

  housesElem.innerHTML = template;
}
export default class HousesController {
  constructor() {
    store.subscribe("houses", _draw);
  }

  addHouse(event) {
    event.preventDefault();
    let formData = event.target;
    // NOTE newcar is an object with all the inputted values from our form
    let newCar = {
      make: formData.bedrooms.value,
      model: formData.imgUrl.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.levels.value,
      description: formData.description.value
    };
    console.log(newHouse);
    HOUSESERVICE.addHouse(newHouse);
    formData.reset();
    // @ts-ignore
    $("#house-form").modal("toggle");
  }

}