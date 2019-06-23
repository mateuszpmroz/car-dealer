import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    apiUrl = 'http://localhost:5000/api/user';

    constructor(private _http: HttpClient) {
    }

    getUsers() {
        return this._http.get<User[]>(`${this.apiUrl}/getAllUsers`);
    }

    postUser(data: Array<any>) {
        return this._http.post(this.apiUrl, data);
    }
}
