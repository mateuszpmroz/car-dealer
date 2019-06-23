import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advert} from '../model/advert.model';

@Injectable({
    providedIn: 'root'
})
export class AdvertService {
    apiUrl = 'http://localhost:5000/api/advert';

    constructor(private _http: HttpClient) {
    }

    getAdverts() {
        return this._http.get<Advert[]>(`${this.apiUrl}/getAllAdverts`);
    }

    getAdvert(id: number) {
        return this._http.get<Advert>(`${this.apiUrl}/getAdvert/${id}`);
    }

    postAdvert(data: Array<any>) {
        return this._http.post(this.apiUrl, data);
    }
}
