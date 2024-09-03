import { AccountController } from "./controllers/AccountController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomesController } from "./controllers/HomesController.js";
import { MainController } from "./controllers/MainController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [MainController],
    view: `app/views/MainView.html`
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  },
  {
    path: `#/homes`,
    controllers: [HomesController],
    view: `app/views/HomesView.html`
  }
])




