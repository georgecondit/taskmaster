import { listService } from "../Services/ListService.js"
import { ProxyState } from "../AppState.js"


function _draw(){
    let listElem = document.getElementById("lists")
    let template = ""

    ProxyState.lists.forEach(list => template += list.Template)
    listElem.innerHTML = template

}

export default class ListController{

 constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('listItems', _draw)
    }

 addList(event) {
     console.log("List Added!");
    event.preventDefault()        
    let form = event.target
    let rawList = {
        title: form.title.value
        } 

        listService.addList(rawList)
    }

    delete(listId) {
    listService.delete(listId);
    }
 
}
