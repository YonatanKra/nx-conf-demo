import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { FullScreenService } from '../../../shared/services/full-screen.service';
import Credits from '../../../../assets/credits.json';

@Component({
  selector: 'credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  credits = Credits;

  constructor(private page:Page, private fullScreenService: FullScreenService) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.fullScreenService.goFullscreen();
  }

}
