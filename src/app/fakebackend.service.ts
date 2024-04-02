import { Injectable } from '@angular/core';
import { register } from 'module';
import { Observable, delay, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakebackendService {

  private users = [{id:1, username: "admin", password: "admin", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTIzNDU2Nzh9.AhyWaeZpcpnM35A10IhVQ0iY1YNODOQH_14ioXRL_jg"}];


 

  
  login(username: string, password:string):Observable<any>{
    const user =  this.users.find(u => u.username=== username && u.password === password);
    if(user){

      return of({success:true, token:user.token}).pipe(delay(1000));

    }

    else{
      return of({success:false}).pipe(delay(1000));
    }





  }



  register(username:string, password:string):Observable<any>{


    return of({success:true}).pipe(delay(1000))



      
  }

  constructor() { }

}
