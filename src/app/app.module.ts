import {NgModule} from '@angular/core';

import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';


import './rxjs-extensions';

import {MyRequestOptions} from "../providers/my-request-options";
import {CoreModule} from "../providers/core/core.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [
        MyApp,

    ],

    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {}),
        CoreModule,
    ],

    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],

})
export class AppModule {
}
