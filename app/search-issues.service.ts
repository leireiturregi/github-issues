import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchIssuesService {

 private searchRepositoryIssues = "https://api.github.com/repos";

  constructor(private http: Http) { }

  getIssuesByURL(urlrepository:string) {

    console.log(urlrepository);
    let userrepo = urlrepository.substring(19);
    console.log(userrepo);
    let url = `${this.searchRepositoryIssues}/${userrepo}/issues`;
    console.log(url);
    console.log(typeof(url));
      return this.http.get(url)
        .map((res: Response) => res.json())
        .catch(this.handleError);
   }


   private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
    }

    private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
