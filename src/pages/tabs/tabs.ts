import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Tabs tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
@IonicPage({

})
export class Tabs {

  tab1Root: any = 'Home';
  tab2Root: any = 'Feed';
  tab3Root: any = 'About';

  constructor(public navCtrl: NavController) {}

}
