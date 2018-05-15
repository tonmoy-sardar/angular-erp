import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class VendorService {

  constructor(private http: HttpClient) { }

  addNewVendor(data): Observable<any>{
    return this.http.post(environment.apiEndpoint+'vendor/', data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  getVendorList(params): Observable<any>{
    return this.http.get(environment.apiEndpoint+'vendor/?'+params, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }
  

  getVendorDetails(id): Observable<any>{
    return this.http.get(environment.apiEndpoint+'vendor/'+id+'/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  updateVendor(data): Observable<any>{
    return this.http.put(environment.apiEndpoint+'vendor/'+data.id+'/',data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  activeInactiveVendor(data): Observable<any>{
    return this.http.patch(environment.apiEndpoint+'vendor/'+data.id+'/',data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  deleteVendor(data): Observable<any>{
    return this.http.delete(environment.apiEndpoint+'vendor/'+data.id+'/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

}
