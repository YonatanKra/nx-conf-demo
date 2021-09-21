import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { gameState } from '../../store/state';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';

registerElement('CardView', () => CardView as any);

@Component({
  selector: 'GameCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
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
