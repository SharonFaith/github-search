import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = environment.API_token;
  repoSearchUrl = 'https://api.github.com/search/repositories'
  
  
  displayRepo(theValue) {
    return this.http.get(`${this.repoSearchUrl}?access_token=${this.apiKey}&q=${theValue}&sort=stars&order=desc`)
  }

  constructor(private http: HttpClient) { }
}
