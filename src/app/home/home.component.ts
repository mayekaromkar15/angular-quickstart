import { Component, OnInit } from '@angular/core';
import { oauth2 as SMART } from 'fhirclient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: any = {};
  accessToken: string = '';
  refreshToken: string = '';
  constructor(private window: Window) { }

  ngOnInit(): void {

    var myApp: any = {};


    SMART.ready()
      .then((client) => {
        myApp.smart = client
        debugger
        console.log(client)
        console.log(this.window)
        console.log(myApp.smart.state.tokenResponse.refresh_token)
        this.accessToken = myApp.smart.state.tokenResponse.access_token;
        this.refreshToken = myApp.smart.state.tokenResponse.refresh_token;
        console.log(JSON.stringify(client))
        doRequests()
      })

    async function doRequests(this: any) {

      // var loincs = [encodeURIComponent("http://loinc.org|4544-3"), encodeURIComponent("http://loinc.org|444-1")]
      // console.log(loincs)
      console.log(myApp.smart.patient.id)
      var obs = await fetch(myApp.smart.state.serverUrl + "/Patient?_id=" + myApp.smart.patient.id, {
        headers: {
          "Accept": "application/json+fhir",
          "Authorization": "Bearer " + myApp.smart.state.tokenResponse.access_token
        }
      }).then((data) => {
        return data
      })
      // console.log(obs)

      this.response = await obs.json()
      // console.log(typeof this.response)
    }
  }

}
