import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edview',
  templateUrl: './edview.page.html',
  styleUrls: ['./edview.page.scss'],
})
export class EdviewPage implements OnInit {
  isrc;
  constructor(private aroute: ActivatedRoute, private sani: DomSanitizer) { }
 
  ngOnInit(){
    this.aroute.queryParams.subscribe( params=>{
      this.isrc = this.sani.bypassSecurityTrustResourceUrl('https://kyoskio.com/kyoskios/BS/android/' + params.edicion + '/Cover.html');
      
    });
  }
   
}
