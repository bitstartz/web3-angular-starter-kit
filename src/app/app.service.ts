import { Injectable } from "@angular/core";
import { ethers } from "ethers";
declare const window: any;


@Injectable({
  providedIn: "root"
})
export class AppService {
  accounts: string[] = [];
  constructor() { }
  async getWalletDetails() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    this.accounts = await provider.listAccounts();
    console.log(this.accounts)
    if (this.accounts?.length > 0) {
      let balance = await provider.getBalance(this.accounts[0])
      console.log(balance);
    }

  }
}