import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"
export default class ListItems {
    constructor({ title, id = generateId(), isDone = 0,  listId})
    {
        this.title = title
        this.id = id
        this.listId = listId
        this.isDone = 0
    }

    get Template() {
        return /* html */`
        
            <div class="col-12">
                <p><input id="${this.listId}" class="form-check-input" type="checkbox" name="${this.listId}" onchange="app.listController.itemDone('${this.listId}')">

                ${this.title}

                <button type="button" class="text-danger close" onclick="app.listItemsController.delete('${this.id}')"><span>&times;</span></button></p>
            </div>
    
        `
    }
}
