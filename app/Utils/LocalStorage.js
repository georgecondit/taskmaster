import { ProxyState } from "../AppState.js"
import ListItems from "../Models/ListItems.js"
import Lists from "../Models/List.js"
import IsDone from "../Models/isDone.js"


export function saveState() {
    localStorage.setItem('HoneyDooz', JSON.stringify({
        list: ProxyState.lists,
        listItems: ProxyState.listItems,
        color: ProxyState.color,
        isDone: ProxyState.isDone
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('HoneyDooz'))
    if (data) {
        ProxyState.lists = data.list.map(oldLists => new Lists(oldLists))
        ProxyState.listItems = data.listItems.map(listItems => new ListItems(listItems))
        ProxyState.isDone = data.isDone.map(isDone => new IsDone(isDone))
        
    }
}