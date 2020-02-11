import store from "../store.js"
import HouseModel from "../Models/HouseModel.js"


let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
});

class HouseService {

  getHouses() {
    _api
      .get("")
      .then(response => {
        let apiHouses = response.data.data.map(thing => new HouseModel(thing));
        store.commit("houses", apiHouses);
        console.log(apiHouses)
      })
      .catch(error => {
        console.error(error);
      });
  }
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

  editHouse(id, update) {
    _api
      .put(id, update)
      .then(res => {
        //debugger;
        store.State.houses.forEach((h, i) => {
          if (h._id == id) {
            store.State.houses[i] = new HouseModel({ ...h, ...update })
          }
        });
        // debugger;
        // for (let prop in update) {
        //   house[prop] = update[prop];
        // }
        store.commit("houses", store.State.houses);
      })
      .catch(error => {
        console.error(error);
      });
  }

  delete(id) {
    //debugger;
    _api
      .delete(id)
      .then(() => {
        let filteredHouses = store.State.houses.filter(c => c._id != id);
        store.commit("houses", filteredHouses);
      })
      .catch(error => {
        console.error(error);
      });
  }
}


const HOUSESERVICE = new HouseService();
export default HOUSESERVICE