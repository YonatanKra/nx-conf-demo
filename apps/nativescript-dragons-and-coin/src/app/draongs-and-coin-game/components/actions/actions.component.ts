import { Component, OnInit } from '@angular/core';

// TODO::repeat actions sent from the card and add relevant buttons + emit an event with the action's name
@Component({
  selector: 'CardActions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
