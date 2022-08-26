import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SerializeQuery, Options } from '../helpers/utility-functions';

@Injectable({
  providedIn: 'root',
})
export class DefaultService {
  constructor(private _http: HttpClient) {}

  login(fromdata: any) {
    var options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return this._http.post<any>(
      `${environment.base_url}UserInformation/Login`,
      fromdata,
      options
    );
  }

  getMenu(): Observable<any> {
    var queryString = SerializeQuery({ userId: 1 }, '');
    return this._http.get<any>(
      `${environment.base_url}UserInformation/GetMenuInformation?${queryString}`,
      Options()
    );
  }
}
