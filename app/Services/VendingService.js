import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snacks.js";


class VendingService {

  constructor() {
    console.log('Services online');
  }
  addQuarter() {
    ProxyState.money += 0.25
    console.log(ProxyState.money);
  }
  addDollar() {
    ProxyState.money += 1
    console.log(ProxyState.money);
  }
}


export const vendingService = new VendingService()