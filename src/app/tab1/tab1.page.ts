import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ediciones = [];
  params = { t: 'getAllEditions', page: 1 };
  page= 1;
  browser;
  constructor(private iab: InAppBrowser, private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) {
    
  }
  ngOnInit() {

    this.getEditions();
  }
  paginate(){
    this.page++;

  }
  bindEdiciones(data){
    this.ediciones = data;
  }
  addEdiciones(data){
    data.forEach(item => {
      this.ediciones.push(item);
    });
  }
  onerror(){
    this.common.toasting('Favor intenta nuevamente más tarde.');
  }
  loadmore(){
    this.page = this.page + 1;
    
    this.params.page = this.page;
    this.moreEditions();
  }
  getEditions(){
    this.api.sendCustom(this.params, 'https://kyoskio.com/kyoskios/francis.php').subscribe(data => this.bindEdiciones(data), () => this.onerror());  
  }
  moreEditions(){
    this.api.sendCustom(this.params, 'https://kyoskio.com/kyoskios/francis.php').subscribe(data => this.addEdiciones(data), () => this.onerror());  
  }
  viewEdicion(numero){
    //window.location.href = 'https://kyoskio.com/kyoskios/BS/android/' + numero + '/Cover.html' ;
    this.rout.navigate(['edview'],{ queryParams: { edicion: numero }});
  }
  
}
