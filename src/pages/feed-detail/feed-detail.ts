import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FeedService} from "../../providers/resource/feed.service";
import {Observable} from "rxjs";

/**
 * Generated class for the FeedDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
    {
        segment: 'detail/:id'
    }
)
@Component({
    selector: 'page-feed-detail',
    templateUrl: 'feed-detail.html',
})
export class FeedDetail implements OnInit {

    view: any;

    constructor(private navCtrl: NavController, private navParams: NavParams, private feedSv: FeedService) {
    }

    ngOnInit() {

        console.log(this.navParams);

        this.feedSv.view(this.navParams.get('id')).subscribe(res => {
            console.log(res);
            
            this.view = res;
        })

    }


}
