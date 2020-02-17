import { Component } from '@angular/core';

import {DiscoveryServiceV2Client} from 'https://raw.githubusercontent.com/brotherlogic/discovery/master/proto/discovery_grpc_web_pb.js'
import {GetRequest} from 'https://raw.githubusercontent.com/brotherlogic/discovery/master/proto/discovery_pb.js'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  show() {
      console.log("Running");
var discoveryClient = new DiscoveryServiceV2Client('http://73.162.90.182:50055');

var request = new GetRequest();
var metadata = {'custom-header-1': 'value1'};
var call = discoveryClient.echo(request, metadata, function(err, response) {
  if (err) {
    console.log(err.code);
    console.log(err.message);
  } else {
    console.log(response.getMessage());
  }
});
  }
}