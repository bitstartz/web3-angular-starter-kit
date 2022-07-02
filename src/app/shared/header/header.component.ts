import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",

})
export class HeaderComponent {
  @Output() connectEvent = new EventEmitter<any>()
  constructor() { }
  emitconnectEvent() {
    this.connectEvent.emit();

  }
}