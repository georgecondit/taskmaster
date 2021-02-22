import { ProxyState } from "../AppState.js";
import ListItems from "../Models/ListItems.js";
import IsDone from "../Models/isDone.js"
import { saveState } from "../Utils/LocalStorage.js";


class ListItemsService{
    constructor() {
     ProxyState.on('listItems', saveState)
     ProxyState.on('isDone', saveState)
     
 }
    addList(rawListItems)
    {
        ProxyState.listItems = [new ListItems(rawListItems), ...ProxyState.listItems]
        
    }
    
    delete(listItemsId) {
        ProxyState.listItems = ProxyState.listItems.filter(l => l.listId != listItemsId)

    }

}

export const listItemsService = new ListItemsService()