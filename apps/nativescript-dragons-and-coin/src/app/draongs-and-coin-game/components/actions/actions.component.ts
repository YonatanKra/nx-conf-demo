import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GameCardAction } from '../../models/action.model';

@Component({
  selector: 'CardActions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input()
  actions: GameCardAction[] = [];

  @Output() actionSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitAction(actionName: string) {
    this.actionSelected.emit(actionName);
  }

}
