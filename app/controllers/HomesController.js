import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { homesService } from "../services/HomesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HomesController {
  constructor() {
    console.log(`homes Controller is Live`);
    AppState.on(`homes`, this.drawHomes)
    this.getHomes()
  }
  drawHomes() {
    const homes = AppState.homes
    let homesHtml = ''
    console.log(`homes`, homes)
    homes.forEach(home => homesHtml += home.HomeCardTemplate)
    const homesElm = document.getElementById(`homeCards`)
    homesElm.innerHTML = homesHtml
    // setHTML(`homesListings`, homesHtml)
  }


  async getHomes() {
    try {
      await homesService.getHomes()
      console.log(`getting 🏠s`)
    } catch (error) {
      Pop.error(error)
      console.error();
    }

  }

  async createHome() {
    try {
      event.preventDefault()
      const homeFormElm = event.target
      const homeFormData = getFormData(homeFormElm)
      await homesService.createHome(homeFormData)
      // @ts-ignore
      homeFormElm.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}