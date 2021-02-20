import { ProxyState } from "../AppState.js"
import ListItems from "../Models/ListItems.js"
import Lists from "../Models/List.js"


export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        tasks: ProxyState.lists,
        listItems: ProxyState.listItems
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.lists = data.tasks.map(oldLists => new Lists(oldLists))
        ProxyState.listItems = data.listItems.map(listItems => new ListItems(listItems))
    }
}