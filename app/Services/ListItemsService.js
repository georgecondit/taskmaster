import { ProxyState } from "../AppState.js";
import ListItems from "../Models/ListItems.js";
import { saveState } from "../Utils/LocalStorage.js";


class ListItemsService{
    constructor() {
     ProxyState.on('listItems', saveState)
 }
    addList(rawListItems)
    {
        ProxyState.listItems = [new ListItems(rawListItems), ...ProxyState.listItems]
        console.log("proxy list items" + ProxyState.listItems)
    }
    
    delete(listItemsId) {
        ProxyState.listItems = ProxyState.listItems.filter(t => t.id != listItemsId)

    }
}

export const listItemsService = new ListItemsService()