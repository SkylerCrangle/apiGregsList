import store from "../store.js"
import HouseModel from "../Models/HouseModel.js"

class HouseService {

  addHouse(newHouse) {
    _api
      .post("", newHouse)
      .then(thing => {
        let newApiHouse = new HouseModel(thing.data.data)
        let houses = [...store.State.houses, newApiHouse];
        store.commit("houses", houses);
      })
      .catch(error => {
        console.error(error);
      });

  }
}


const HOUSESERVICE = new HouseService();
export default HOUSESERVICE