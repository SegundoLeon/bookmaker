import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {;
  apiAuthBaseURL = 'http://bookmarks-api-cakephp.webtraining.zone'

  constructor(public http: HttpClient) { 

  }

  public logIn(username: string, password: string){
    const url = `${this.apiAuthBaseURL}/users/login`;

    return this.http.post(url, body:{
      username: username,
      password: password
    }
    
    );
  }
}
