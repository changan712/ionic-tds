import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the Feed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
})
export class Feed {

    constructor(public navCtrl: NavController, public http: Http) {
    }

    ngOnInit() {
        this.http.get('/api/app/feeds').subscribe((res) => {
            console.log(res);

        })
    }

}
