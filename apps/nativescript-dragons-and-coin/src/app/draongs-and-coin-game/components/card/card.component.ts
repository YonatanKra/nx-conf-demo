import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface Card {
  abundance: number;
	name: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'GameCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardData: Card = {
    abundance: 50,
    name: "Goblin",
    description: "A goblin appears in front of you.  It is an evil creature and attacks you with hate in its eyes.",
    image: '~/assets/images/goblin.png'
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardData);
  }

}
