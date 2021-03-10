import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';
import{ User} from './user.model';
import { ApiService } from './api.service';

@Injectable({
providedIn: 'root'
})
export class LoginService {

readonly baseURL ='http://localhost:49561/api/users'

list : User[];
user: string;
pass: string;



constructor(private http: HttpClient) { }


refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as User[]);
}
}