import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";


function _draw() {
  let money = ProxyState.money
  document.getElementById('totalMoney').innerText = ` ${money}`
}


export class VendingController {
  constructor() {
    console.log('controller online');
    ProxyState.on('money', _draw)
  }
  addQuarter() {
    vendingService.addQuarter()
  }
  addDollar() {
    vendingService.addDollar()
  }

}




