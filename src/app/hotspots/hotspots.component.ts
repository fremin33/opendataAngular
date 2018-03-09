import {Component, OnInit} from '@angular/core';
import {SitesHotspotService} from '../services/sites-hotspot.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-hotspots',
    templateUrl: './hotspots.component.html',
    styleUrls: ['./hotspots.component.css']
})
export class HotspotsComponent implements OnInit {
    // Déclaration de variable de classe qui va stocker les données du services

    lesSites$: Observable<any>;


    // Injection de dépendance pour utiliser le service dans le composant
    // this.hostServices = new SitesHotspotService
    constructor(private hotspotsService: SitesHotspotService) {
    }

    ngOnInit() {
        // On affecte à la variable lesSites$ les données de l'url définit dans le service
        this.lesSites$ = this.hotspotsService.getDonnees();
    }

}
