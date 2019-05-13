import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://agl-developer-test.azurewebsites.net/people.json';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}; 

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getOwners(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // log to console
      console.error(error);

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // return  empty result
      return of(result as T);
    };
  } 
}
