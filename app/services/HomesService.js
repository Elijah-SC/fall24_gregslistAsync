import { AppState } from "../AppState.js"
import { Home } from "../models/Homes.js"
import { api } from "./AxiosService.js"

class HomesService {
  async getHomes() {
    const Response = await api.get(`api/houses`)
    console.log(`Got Houses API`, Response.data)

    const homes = Response.data.map(homeData => new Home(homeData))
    console.log(`New Homes`, homes)
    AppState.homes = homes
  }

  async createHome(homeFormData) {
    const Response = await api.post(`api/houses`, homeFormData)
    const newHome = new Home(Response.data)
    AppState.homes.push(newHome)
  }
}


export const homesService = new HomesService()