import { Car } from './models/Car.js'
import { Home } from "./models/Homes.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    // NOTE when the app loads, there are no cars
  ]

  /**@type {Home[]} */

  homes = [
    // NOTE when the app loads, there are no homes
  ]

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())