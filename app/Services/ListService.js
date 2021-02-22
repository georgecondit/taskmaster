import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService {

  constructor() {
        ProxyState.on('lists', saveState)
        ProxyState.on('isDone', saveState)
        ProxyState.on('color', saveState)
  }

  addList(rawList) {
        ProxyState.lists = [new List(rawList), ...ProxyState.lists]
       
  }
  delete(listId) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
        ProxyState.listItems = ProxyState.listItems.filter(l => l.listId != listId)  
  }

  
}

export const listService = new ListService();