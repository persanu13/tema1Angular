import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Coffe } from 'src/app/core/coffe.interface';

@Component({
  selector: 'app-coffe-card',
  templateUrl: './coffe-card.component.html',
  styleUrls: ['./coffe-card.component.scss'],
})
export class CoffeCardComponent implements OnInit {
  @Input() coffe!: Coffe;
  @Output() getNameEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  emitName() {
    this.getNameEvent.emit(this.coffe.name);
  }
}
