import { Component, OnInit } from '@angular/core';
import { oauth2 as SMART } from 'fhirclient';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    SMART.authorize({
      iss: 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
      // fhirServiceUrl: 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
      client_id: '404ba9f5-b46b-4cc4-b75a-b1da9049491e',
      scope: 'launch online_access openid profile user/AllergyIntolerance.read user/Coverage.read user/Observation.read user/Patient.read user/Practitioner.read user/ServiceRequest.read',
      redirect_uri: 'https://luminous-eclair-320f36.netlify.app/home',
    })


  }

}
