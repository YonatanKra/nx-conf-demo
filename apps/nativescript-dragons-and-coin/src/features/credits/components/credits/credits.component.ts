import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { FullScreenService } from '../../../shared/services/full-screen.service';
import Credits from '../../../../assets/credits.json';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  credits = Credits;

  constructor(private page:Page, private fullScreenService: FullScreenService, private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.fullScreenService.goFullscreen();
  }

  async backHome() {
    await this.routerExtensions.navigate(['']);
  }

}
