import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'browse-data',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loading: boolean;
  imagePath: string;   
  browseData: string;
  searchApi: string;
  apikey: string;
  apiResponse: any;
  locale: string; 
  redirectPage: string;
  sourceType: string;

  constructor(private http: Http, private element: ElementRef) {   
    //this.loading = true;
    this.imagePath = this.element.nativeElement.getAttribute('imagePath'); 
    this.browseData = this.element.nativeElement.getAttribute('browse-data');
    this.searchApi = this.element.nativeElement.getAttribute('search-api');
    this.apikey = this.element.nativeElement.getAttribute('apikey');      
    this.redirectPage = this.element.nativeElement.getAttribute('redirect-page');      
    this.sourceType = this.browseData.indexOf('procurement') == 0 ? '&srce=both' : '';   

    if (this.searchApi.indexOf('IN_LANG_CODE') > -1) {
      this.locale = this.getParameterByName('IN_LANG_CODE', this.searchApi); 
    } else {
      this.locale = this.getParameterByName('IN_LANG_CDE', this.searchApi); 
    }
       

  
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('apikey', this.apikey);

    let response = this.http.get(this.searchApi, { headers: headers }).map((response: Response) => {
      return response.json().response;
    }).catch((error: Response) => {    
      return Observable.throw(error);
    } );

     response.subscribe(apiResponse => {
       this.apiResponse = apiResponse;
       this.loading = false;
     });
    
  }

  public getParameterByName(name, url) {	    
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
