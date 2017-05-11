import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Http} from "@angular/http";

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

@IonicPage()

export class Tabs {

    selectedIndex: number = 0;
    tabs: any[] = TAB_CONFIG;

    constructor(public navCtrl: NavController,private http:Http) {
    }

    ngOnInit() {
        let reg = /^#\/tabs\/(\w+)\//;
      /*  let tabName = reg.exec(location.hash)[1];
        this.selectedIndex = this.tabs.findIndex(tab => tabName == tab.title) || 0;*/
    }


   /* ionViewCanEnter() {

        return this.login();
    }*/

    login(id?: number):Promise<boolean> {
        return this.http.get('/api/app/user/test?corp_id=tds2in1&id=' + (id || '')).toPromise().then(res => {
            return true

        }, () => {
            return false
        })
    }
}

export const TAB_CONFIG = [
    {root: 'Home', title: 'home', icon: 'home'},
    {root: 'Feed', title: 'feed', icon: 'text'},
    {root: 'About', title: 'about', icon: 'stats'},
];
