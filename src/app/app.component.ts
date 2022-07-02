import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { ethers } from "ethers";
declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web3-angular-starter-kit';
  constructor(public sessionService: SessionService,) {
    this.init();
  }
  init() {
    if (typeof window.ethereum == 'undefined') {
      console.log('Please use a dapp browser like mist or MetaMask plugin for chrome');
    }
    else {
      console.log('Ethereum browser detected');
      this.fetchSession();
    }
  }
  fetchSession() {
    this.sessionService.getAccounts().then(() => {
      console.log("fetching accounts ...");
      this.sessionService.fetchCurrentUser(this.sessionService.accounts[0]);
    });
  }
  async connectWallet() {
    try {
      await window.ethereum.enable();
      this.fetchSession();
    } catch (error) {
      console.log(error);
    }
  }
}
