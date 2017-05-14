import { Component } from '@angular/core';

@Component({
  styleUrls: ['./styles/bootstrap.css'],
  selector: 'my-app',
  template: `<div class="row">
  				<div class="col-lg-12">
  					<div class="container-fluid">
  						<h1>Welcome to my Hero App</h1>
  						<div>
  							<dash-board>Inside dashboard component</dash-board> 
  						</div>
  					</div>
  				</div>
  			</div>`
})
export class AppComponent {  }
