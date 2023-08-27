import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http :HttpClient) {}
    getData(){
      return this.http.get('http://localhost:8080/api/endpoint')
    }
    public sendEmail(){
      const to = 'abira7344@gmail.com';
      var emailRequest = {
        from :'',
        subject : ''
      };
      this.http.post('api/send-email',emailRequest)
      .subscribe(
        response =>{
          console.log('email sent')
        },
        error =>{
          console.log('failed to send')
        }
      )
    }
}
