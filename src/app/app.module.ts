import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*custom imports*/
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { CommonService } from './services/common.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    rippleEffect: false,
    mode: 'md'
  }), AppRoutingModule , HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , ApiService, CommonService, InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule {}
