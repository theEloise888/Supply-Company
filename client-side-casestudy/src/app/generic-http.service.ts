// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GenericHttpService {
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GenericHttpService<T> {
  constructor(
    private httpClient: HttpClient,
    private url: string,
  ) {}
  // call controller method(s) from the client
  public add(item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}`, item);
  } // add
  public save(item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}`, item);
  } // add
  public update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}`, item);
  } // update
  public getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}`);
  } // getAll
  public delete(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${this.url}/${id}`);
  } // delete
  public deleteString(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.url}/${id}`);
  } // delete
  public getById(id: number): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/${id}`);
  } // getById
} // GenericHttpService
