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
  cardData: Card = {
    abundance: 50,
    name: "Goblin",
    description: "A goblin appears in front of you.  It is an evil creature and attacks you with hate in its eyes.",
    image: '~/assets/images/goblin.png',
    actions: [{ name: 'FIGHT', displayName: 'Fight' }, { name: 'RUN', displayName: 'Run'}],
    pointsValue: 5
  };

  cardActionSelected(actionName: string) {
    gameState.commitAction(actionName);
  }
}
