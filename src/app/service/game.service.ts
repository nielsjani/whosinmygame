import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    const headers = new HttpHeaders({'apikey':'654acf9908b5897ecb838f3a'});
    return this.httpClient.get('https://whosinmygame-4e51.restdb.io/rest/game', {headers});
  }
}
