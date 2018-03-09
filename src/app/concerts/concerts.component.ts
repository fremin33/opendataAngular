import {Component, OnInit} from '@angular/core';
import {ConcertService} from '../services/concert.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-concerts',
    templateUrl: './concerts.component.html',
    styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

    lesConcerts$: Observable<any>;

    constructor(private concertService: ConcertService) {
    }

    ngOnInit() {
        this.lesConcerts$ = this.concertService.getDonnees();
    }

}
