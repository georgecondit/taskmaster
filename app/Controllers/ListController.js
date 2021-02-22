import { isDoneService } from "../Services/IsDoneService.js"
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
    ProxyState.on('isDone', _draw)
    ProxyState.on('color', _draw)
    }

    addList(event) {
        event.preventDefault()       
        let form = event.target
        let rawList = {
            title: form.title.value
            
        } 
        
        listService.addList(rawList)
        form.reset()
    }

    delete(listId) {
        if(window.confirm('Are you sure you want to delete this list?') == true){
        listService.delete(listId)};
    }
    
    
}
