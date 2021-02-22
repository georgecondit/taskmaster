import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"
export default class ListItems {
    constructor({ title, listId = generateId(), listItemId, isDone })
    {
        this.title = title
        this.listItemId = listItemId
        this.listId = listId
        this.isDone = isDone
    }

    get Template() {
        return /* html */`
        
            <div class="col-12">
                <p><input id="${this.listId}" class="form-check-input" type="checkbox" name="${this.listId}" onchange="app.listController.itemDone(${this.listId})">

                ${this.title}

                <button type="button" class="text-danger close" onclick="app.listItemsController.delete(${this.listItemId})"><span>&times;</span></button></p>
            </div>
    
        `
    }
}
