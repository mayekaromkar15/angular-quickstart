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
      client_id: '5849c0dc-67ed-44c8-8469-fd7813e7eb0c',
      scope: 'user/Patient.read user/Coverage.read user/Practitioner.read user/ServiceRequest.read patient/Coverage.read',
      redirect_uri: 'https://luminous-eclair-320f36.netlify.app/home',
    })


  }

}
