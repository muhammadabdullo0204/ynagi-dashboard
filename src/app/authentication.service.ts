import { Injectable } from '@angular/core';
import { FakebackendService } from './fakebackend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {




  constructor( private fakebackendService:FakebackendService) {


   }


   login(username:string, password:string):Observable<any>{
   
    return this.fakebackendService.login(username, password);


   }


   saveToken(token:string){
    localStorage.setItem( 'token',token );


   }

   getToken():string | null{
    return localStorage.getItem('token');

   }

   logout(){
    localStorage.removeItem('token');
   }

   isLogin():boolean{

    return this.getToken()!==null;
    
   }



}
