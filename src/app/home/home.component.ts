import { Component, OnInit } from '@angular/core';
import { oauth2 as SMART } from 'fhirclient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myApp: any = {}

    SMART.ready()
      .then(function (client) {
        myApp.smart = client
        console.log(client)
        doRequests()
      })

    async function doRequests() {

      var loincs = [encodeURIComponent("http://loinc.org|4544-3"), encodeURIComponent("http://loinc.org|444-1")]
      console.log(loincs)
      var obs = await fetch(myApp.smart.state.serverUrl + "/Patient?_id=" + myApp.smart.patient.id + "&limit=50&code=" + loincs.join(","), {
        headers: {
          "Accept": "application/json+fhir",
          "Authorization": "Bearer " + myApp.smart.state.tokenResponse.access_token
        }
      }).then(function (data) {
        return data
      })
      console.log(obs)

      var response = await obs.json()
      console.log(response)

      console.log(myApp)
      console.log(myApp.vue)

    }
  }

}
