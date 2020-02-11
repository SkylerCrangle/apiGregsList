export default class HouseModel {
  constructor(data) {
    this._id = data._id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.imgUrl = data.imgUrl;
    this.levels = data.levels;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
  }

  get Template() {
    return `
            <div class="col-3">
            <div class="card">
            <img class="card-img-top" src="${
      this.imgUrl
      }" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title"><b>$${this.price} </b>- Year: ${this.year}</h5>
              <p class="card-text">${this.description} <br>
              <b>Levels:</b> ${
      this.levels
      } <br>
      <b>Bedrooms:</b> ${this.bedrooms}<br>
       <b>Baths:</b> ${this.bathrooms}</b><br>
       </p>
              <button class="btn btn-info" onclick="">Does nothing</button>
              <button class="btn btn-danger" onclick="app.housesController.delete('${this._id}')">DELETE</button>
            </div>
          </div>
            </div>
    `;
  }
}
