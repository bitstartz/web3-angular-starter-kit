import { AppService } from './../../app.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { trim } from '../../utils';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",

})
export class HeaderComponent {
  public trim = trim;
  @Output() connectEvent = new EventEmitter<any>();

  constructor(public appService: AppService) { }

  emitconnectEvent() {
    this.connectEvent.emit();
  }
}