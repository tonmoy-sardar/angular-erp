import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class MaterialService {

  constructor(private http: HttpClient) { }

  addNewMaterial(data): Observable<any>{
    return this.http.post(environment.apiEndpoint+'states/', data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  getMaterialList(params): Observable<any>{
    return this.http.get(environment.apiEndpoint+'states/?'+params, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  getMaterialActiveList(): Observable<any>{
    return this.http.get(environment.apiEndpoint+'active_states/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  getMaterialDetails(id): Observable<any>{
    return this.http.get(environment.apiEndpoint+'states/'+id+'/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  updateMaterial(data): Observable<any>{
    return this.http.put(environment.apiEndpoint+'states/'+data.id+'/',data, {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  deleteMaterial(data): Observable<any>{
    return this.http.delete(environment.apiEndpoint+'states/'+data.id+'/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

  getMaterialTypeList(): Observable<any>{
    return this.http.get(environment.apiEndpoint+'all_material_type/', {
      headers: new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('logedUserToken'))
    })
  }

}
