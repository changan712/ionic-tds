import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Observable} from "rxjs";
import {FeedService} from "../../providers/resource/feed.service";
import {ResponseHasMeta} from "../../providers/core/response-has-meta";

/**
 * Generated class for the Feed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment: 'index'
})
@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
})
export class Feed {
    list;
    meta: Object;

    constructor(public navCtrl: NavController, public feedSv: FeedService) {
    }

    ngOnInit() {
        this.feedSv.index().subscribe((res: ResponseHasMeta) => {
            this.list = res.data;
            this.meta = res.meta
        });
    }

}
