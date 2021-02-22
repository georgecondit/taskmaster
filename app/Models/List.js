import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";



export default class List{
    constructor({title, id = generateId(), color = document.getElementById("body"), isDone = document.getElementById("${this.isDone}")}) {
        this.title = title
        this.id = id
        this.color = color
        this.isDone = isDone
    }

    get Template() {
    return /*html*/`
            <div class="card-column">
                <div class="card text-left">
                    <div class="card-body">
                        <div class="col-12">
                            <h1 class="card-title font">${this.title}</h1>
                        </div>
                            <div class="col-12">
                                <input class="" type="color" id="body" name="body" value="#f2a62b">
                            </div>
                            <div class="card-text">
                                <button class="text-danger close" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button>
                                <div class="form-check form-check-inline">
                                    <input id="listDone" type="checkbox" class="form-check-input" name="${this.id}" onchange="app.isDoneController.isDone('${this.id}')">All Done!   
                                </div>
                                <h5 class="font">List Items</h5>
                            <form onsubmit="app.listItemsController.addList(event,'${this.id}')">
                                <div class="form-group ">
                                    <input class="font"type="text" name="title" minlength="3" maxlength="50" placeholder="New Item" required>
                                    <button class="font" type="submit">New Dooz</button>
                                    </div>
                                </form>

                                    <div class="col-12 font" id="list-item">
                                        ${this.ListItems} 
                                    </div>
                                    <div class="font" id="doneItems">
                                        ${this.isDone}
                                    </div>

            
                        </div>
                    </div>        
                </div>
            </div>
    `    
    }

    get ListItems() {
        let template = ''
        let listItems = ProxyState.listItems.filter(list => list.listId == this.id)
        listItems.forEach(listItem => template += listItem.Template)
        return template
    }
}
