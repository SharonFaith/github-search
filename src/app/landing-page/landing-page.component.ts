import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repositories } from '../repositories';
import { SearchService } from '../search.service';
import { UserService } from '../user.service';
import { element } from 'protractor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  sharonfaith = 'sharonfaith'
  user: {} = {}
  userRepositories: any[] = []
  repo: any[] = []
  edited:boolean =  false
  

  userName = {
    value: ''
  }
  
  repoName = {
    value: ''
  }
  constructor(private http: HttpClient, private repoSearchService: SearchService, private userService: UserService, private router:Router) { }

  userInfo(userValue) {
    console.log(userValue);
    this.userRepositories = []

    if(userValue !== '') {
      let promise = new Promise((resolve, reject)=> {
        this.userService.displayUser(userValue).toPromise().then((users) => {
          //console.log(users);
          const theArray =  this.userFunc(users['items']);
          //this.user = theArray
    
          /**let func = theArray.filter(user => {
            return user.login === userValue;
            
          })**/
          console.log(theArray[0])
          this.user = theArray[0]
          console.log(this.user)
          
          resolve ()
        },
        error => {
          alert('an error has occured')

          reject(error)
        })
      })
      return promise
    }
  }
  

  getUserRepo(userValue) {
    console.log(userValue)
    //this.userService.userRepos(userValue).subscribe((responses) => {
    this.http.get(`https://api.github.com/users/${userValue}/repos`).subscribe((responses) => {
    //console.log(responses)
    const anArray = this.getRepoFunc(responses)
    //console.log(anArray)
    //this.userRepositories = anArray

    if(anArray.length > 0) {
      this.userRepositories = anArray
    } else {
      alert("This user has no public repos")
    }
    console.log(this.userRepositories)


    this.edited = true
    
    })
  }
  
  userFunc(users) {
    let userArray = []
    
    
    users.forEach((element) => {
      userArray.push({
        userName: element.login,
        profilePic: element.avatar_url,
        repos: element.repos_url
      })
    });

    return userArray
  }

  getRepoFunc(responses) {
    let responseArray = []
    responses.forEach((response) => {
      responseArray.push({
        repoName: response.name,
        repoDescription: response.description,
        repoURL: response.html_url
      })
    })
    return responseArray
  }

  goUrl() {
    this.router.navigateByUrl('/github-search')
  }
  
  
  
  ngOnInit() {
    this.userInfo(this.sharonfaith);
    this.getUserRepo(this.sharonfaith);
    
    
  }

}



