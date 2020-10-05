import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiKey = environment.API_token;
  userSearchUrl = 'https://api.github.com/search/users';
  userUrl = 'https://api.github.com/users'

  displayUser(theValue) {
    return this.http.get(`${this.userSearchUrl}?access_token=${this.apiKey}&q=${theValue}&sort=stars&order=desc`)
  }
  userRepos(theValue) {
    return this.http.get(`${this.userUrl}/${theValue}/repos?access_token=${this.apiKey}`)
  }
  constructor(private http: HttpClient) { }
}
