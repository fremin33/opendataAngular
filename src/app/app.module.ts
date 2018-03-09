import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HotspotsComponent} from './hotspots/hotspots.component';
import {HttpClientModule} from '@angular/common/http';
import {SitesHotspotService} from './services/sites-hotspot.service';

@NgModule({
    declarations: [
        AppComponent,
        HotspotsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        SitesHotspotService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
