export class Home {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description

  }

  get HomeCardTemplate() {

    return /*HTML*/`
    <div class="col-lg-5 border border-dark m-3">
      <img class="img-fluid home-imgs"
        src="${this.imgUrl}" alt="">
      <div class="row justify-content-around align-items-center">
        <h3 class="col-4">$${this.priceCommas}</h3>
        <h3 class="col-4">${this.bedrooms} bedrooms, and ${this.bathrooms} bathrooms</h3>
        <h3 class="col-4">${this.levels}Floors</h3>
      </div>
      <p>${this.description}</p>
    </div>`

  }

  get priceCommas() {
    return new Intl.NumberFormat().format(this.price)
  }



  //   bedrooms: Number, required
  // bathrooms: Number, required
  // levels: Number, required
  // imgUrl: String, 
  // year: Number, required
  // price: Number, required
  // description: String, 
  // creatorId: SchemaObjectId, required
  // *creator: Object (Virtual Added by Database)
  // *createdAt: ISO Timestamp (Virtual Added by Database)
  // *updatedAt: ISO Timestamp (Virtual Added by Database)

}