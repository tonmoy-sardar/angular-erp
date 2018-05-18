import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';


@Injectable()
export class GrnService {

  constructor(private http: HttpClient) { }

  addNewGrn(data): Observable<any>{
    return this.http.post(environment.apiEndpoint+'grn/', data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  getGrnList(params): Observable<any>{
    return this.http.get(environment.apiEndpoint+'all_grn/?'+params, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }  
  

  getGrnDetails(id): Observable<any>{
    return this.http.get(environment.apiEndpoint+'all_grn/'+id+'/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  updateGrn(data): Observable<any>{
    return this.http.put(environment.apiEndpoint+'grn/'+data.id+'/',data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  activeInactiveGrn(data): Observable<any>{
    return this.http.patch(environment.apiEndpoint+'grn/'+data.id+'/',data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  approveDisapproveGrn(data): Observable<any>{
    return this.http.patch(environment.apiEndpoint+'grn/'+data.id+'/',data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }
}
