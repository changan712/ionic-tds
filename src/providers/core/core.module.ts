import {NgModule, SkipSelf, Optional, ErrorHandler} from "@angular/core";
import {MyRequestOptions} from "./my-request-options";
import {StatusBar} from "@ionic-native/status-bar";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {RequestOptions, HttpModule} from "@angular/http";
import {MyApp} from "../../app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ResourceModule} from "../resource/resource.module";
@NgModule({
    declarations: [],
    imports: [

        HttpModule,
        ResourceModule,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        StatusBar,
        SplashScreen,
        {provide: RequestOptions, useClass: MyRequestOptions}
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
