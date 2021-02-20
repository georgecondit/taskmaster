import { listItemsService } from "../Services/ListItemsService.js";
import { ProxyState } from "../AppState.js";

export default class ListItemsController{

    constructor() {
    }

    addList(event, listId) {
    event.preventDefault()        
        let form = event.target
        let rawListItems = {
            title: form.title.value,
            listId: listId
        }

   listItemsService.addList(rawListItems)       
    }

    delete(listItemsId) {
        listItemsService.delete(listItemsId)
    }
}