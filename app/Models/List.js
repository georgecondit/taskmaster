import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";



export default class List{
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }

    get Template() {
        return /*html*/`
                <div class="col-6 border rounded shadow-lg">
                    <h1>${this.title}<button class="text-danger close mt-3"
                    onclick="app.listController.delete('${this.id}')"><span>&times;</span></button> </h1>
                    <h5>List Items</h5>
                    <form onsubmit="app.listItemsController.addList(event, '${this.id}')">
                        <div class="form-group">
                            <input type="text" name="title" placeholder="Enter New Item...">
                            <button type="submit">Add New List Item</button>
                            <div class="row">
                            ${this.ListItems}
                            </div>
                        </div>
                    </form>
                </div>
        `
    }

    get ListItems() {
        console.log("Hi from your list element template");
        let template = ''
        let listItems = ProxyState.listItems.filter(list => list.listId == this.id)
        listItems.forEach(listItems => template += listItems.Template)
        return template
    }
}
