

import { ProxyState } from "../AppState.js";
import List from "./List.js"
import ListItems from "./ListItems.js";


export default class IsDone{

    constructor(title, isDone){
        this.title = title
        this.isDone = isDone

    }

    get Template() {
        return /*html*/`
            <p>${IsDone[length]}'/'"${ListItems[length]}"</p>
        `
    }


}


