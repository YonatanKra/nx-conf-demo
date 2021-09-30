import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { FullScreenService } from '../../../shared/services/full-screen.service';
import Credits from '../../../../assets/credits.json';
import { RouterExtensions } from '@nativescript/angular';
import { animate, query, stagger, style, transition, trigger, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
  animations: [
    trigger('list', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0, transform: 'translateY(90%)' }),
            stagger('100ms', animate('2000ms ease-out', style({ opacity: 1, transform: 'translateY(30%)' })))],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1, transform: 'translateY(30%)', height: '*' }),
            stagger('1000ms',
              animate('1500ms ease-in',
                style({ opacity: 0, transform: 'translateY(0)', height: '0' }))),
        ],{ optional: true})
      ]),
    ]),
  ]
})
export class CreditsComponent implements OnInit {
  public credits = JSON.parse(JSON.stringify(Credits));

  constructor(private page: Page,
              private fullScreenService: FullScreenService,
              private routerExtensions: RouterExtensions
  ) {
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.fullScreenService.goFullscreen();
  }

  async backHome() {
    await this.routerExtensions.navigate(['']);
  }

  onAnimationDone(event: AnimationEvent) {
    this.credits.Music.splice(0, 1);
  }
}
