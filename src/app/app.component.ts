import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ethers } from "ethers";
declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web3-angular-starter-kit';
  constructor(public appService: AppService,) {
    this.init();
  }
  init() {
    if (typeof window.ethereum == 'undefined') {
      console.log('Please use a dapp browser like mist or MetaMask plugin for chrome');
    }
    else {
      console.log('Ethereum browser detected');
      this.fetchDetails();
    }
  }
  fetchDetails() {
    this.appService.getWalletDetails().then(() => {
      console.log("fetching details ...");
    });
  }
  async connectWallet() {
    try {
      await window.ethereum.enable();
      this.fetchDetails();

    } catch (error) {
      console.log(error)

    }
  }
}
