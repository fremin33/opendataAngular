import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConcertService {
    url = 'http://api.bandsintown.com/events/search?api_version=2.0&app_id=mon_app&lo' +
        'cation=la%20rochelle,france&radius=10&format=json&page=1&per_page=4&callback=jsonp';

    constructor(private http: HttpClient) {
    }

    getDonnees(): Observable<any> {
        return this.http.jsonp(this.url, 'callback');
    }
}


