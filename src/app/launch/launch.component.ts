import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { oauth2 as SMART } from 'fhirclient';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log("inside launch")

    console.log(this._router.url);
    console.log(this.getUrlVars(this._router.url))

    SMART.authorize({
      iss: 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
      // fhirServiceUrl: 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
      client_id: '404ba9f5-b46b-4cc4-b75a-b1da9049491e',
      scope: 'launch online_access openid profile user/AllergyIntolerance.read user/Coverage.read user/Observation.read user/Patient.read user/Practitioner.read user/ServiceRequest.read',
      redirect_uri: 'https://luminous-eclair-320f36.netlify.app/home',
    })
  }

  getUrlVars(url: any) {
    var hash: any;
    var myJson: any = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      myJson[hash[0]] = hash[1];
    }
    return myJson;
  }

}
