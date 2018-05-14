import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
@Injectable()
export class PurchaseRequisitionService {

  constructor(private http: HttpClient) { }

  // getPurchaseRequisitionList(params): Observable<any>{
  //   return this.http.get(environment.apiEndpoint+'states/?'+params, {
  //     headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
  //   })
  // }

}
