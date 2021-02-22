import { isDoneService } from "../Services/IsDoneService.js";
import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";

export default class IsDoneController{

    constructor() {
        ProxyState.on('isDone', saveState)
    }

    isDone(event, listId) {

        event.preventDefault();
        let checkbox = document.getElementById("listDone")
        if(this.isDone) {
            let form = event.target
            let checkbox = event.target.checked
            let completed = {
                title: form.target.value,
                isDone: event.target.checked
            }
            }       
        isDoneService.isDone(completed) 
        }

    allDone(completed) {
        let isDoneElem = document.getElementById("${this.listId}")
            if(this.isDone) {isDoneElem.classList.add("done-color")}
    }

    itemDone(completed) {
        let doneItemELem = document.getElementById("${this.listId}")
        if (this.isDone) {doneItemELem.classList.add("strikethrough")}


    }
}
    
