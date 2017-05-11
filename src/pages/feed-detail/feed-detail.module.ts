import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedDetail } from './feed-detail';

@NgModule({
  declarations: [
    FeedDetail,
  ],
  imports: [
    IonicPageModule.forChild(FeedDetail),
  ],
  exports: [
    FeedDetail
  ]
})
export class FeedDetailModule {}
