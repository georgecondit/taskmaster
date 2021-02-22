import List from "./Models/List.js"
import ListItems from "./Models/ListItems.js"
import IsDone from "./Models/isDone.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {List[]} */
  lists = []

  /** @type {ListItems[]} */
  listItems = []

  /** @type {IsDone[]} */
  isDone = []

  color = document.getElementById("body")
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
