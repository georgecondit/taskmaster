import ListController from "./Controllers/ListController.js";
import ListItemsController from "./Controllers/ListItemsController.js"
import { loadState } from "./Utils/LocalStorage.js";

class App {

  listController = new ListController();
  listItemsController = new ListItemsController();

}

window["app"] = new App();
loadState()