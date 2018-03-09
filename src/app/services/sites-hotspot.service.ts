import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SitesHotspotService {


    url = 'http://parisdata.opendatasoft.com/api/records/1.0/download?dataset=liste_des_sites_des_hotspots_paris_wifi&format=json;';

    constructor(private http: HttpClient) {
    }


    getDonnees(): Observable<any> {
        return this.http.get(this.url, {responseType: 'json'});
    }

}
