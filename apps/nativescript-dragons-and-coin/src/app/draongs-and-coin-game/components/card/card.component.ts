import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { gameState } from '../../store/state';

@Component({
  selector: 'GameCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output()
  cardAction: EventEmitter<string> = new EventEmitter();

  @Input()
  cardData: Card | null;

  cardActionSelected(actionName: string) {
    gameState.commitAction(actionName);
  }
}
