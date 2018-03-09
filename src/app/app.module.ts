import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HotspotsComponent} from './hotspots/hotspots.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {SitesHotspotService} from './services/sites-hotspot.service';
import { ConcertsComponent } from './concerts/concerts.component';
import {ConcertService} from './services/concert.service';

@NgModule({
    declarations: [
        AppComponent,
        HotspotsComponent,
        ConcertsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [
        SitesHotspotService,
        ConcertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
