import { ProxyState } from "../AppState.js";
import IsDone from "../Models/isDone.js"
import { saveState } from "../Utils/LocalStorage.js";


class IsDoneService{
    constructor() {
    
     ProxyState.on('isDone', saveState)
 }
    
    isDone(){
        ProxyState.isDone = [new IsDone("doneItems"), ...ProxyState.isDone]
    }
}

export const isDoneService = new IsDoneService()