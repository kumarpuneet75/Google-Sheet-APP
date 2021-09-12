import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  url: string;

  constructor(private httpClient:HttpClient) {
    this.url = "https://script.google.com/macros/s/AKfycbzZO4hdeYcnsm9ceq5oquPLFfgQJCv599Z-9xG1dMt8J0cfOPu7En4PydMpRQvDRVeDxg/exec"
   }

   public updatePost(postData: Object) {
    const headers = { mode: 'cors', "Content-Type": 'application/json', redirect: "follow" };
    // this.httpClient.post(this.url, { headers }).subscribe(data => {
    //   console.log(data);
    // });
    fetch("https://script.google.com/macros/s/AKfycbzZO4hdeYcnsm9ceq5oquPLFfgQJCv599Z-9xG1dMt8J0cfOPu7En4PydMpRQvDRVeDxg/exec", {
    method: 'POST',
    mode: 'no-cors',
    cache : 'no-cache',
    redirect: 'follow',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
}).then(response => {
    console.log("success:", response);
});

  }
}
