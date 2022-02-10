import { Injectable } from '@angular/core';

import { ToastController, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public api_url = 'https://kyoskio.com/kyoskios/francis.php';
  
  public api_token = localStorage.getItem('api_token');
  public isLoading = false;
  public alertoptions: any = { header: 'Encabezado', subheader: 'Sub encabezado', message: 'Mensaje.', buttons: ['Aceptar']}

  constructor(public toast: ToastController, public loading: LoadingController, public navCtrl: NavController, public router: Router, public alertController: AlertController) { }

  async showloader(msj = "Cargando...") {
    this.isLoading = true;
    return await this.loading.create({
        message: msj,
        spinner: 'circles' 
    }).then(a => {
        a.present().then(() => {
            if (!this.isLoading) {
                a.dismiss().then(() => console.log('Abort loading'));
            }
        });
    });
  }
  checkLogin(){
    this.api_token = localStorage.getItem('api_token');
    if(this.api_token == '0' || this.api_token == null || this.api_token == ''){
        this.navCtrl.setDirection('root');
        this.router.navigate(['/login']);
    }
  }
  async hideloader() {
      this.isLoading = false;
      return await this.loading.dismiss().then(() => console.log('Loading dismissed'), err => console.log(err));
  }

  async toasting(msj, dur = 2000) {
      const toast = await this.toast.create({
          message: msj, 
          position: "bottom", 
          duration: dur
      });
      toast.present();
  }

  async presentAlert(options = this.alertoptions) {
      const alert = await this.alertController.create({
        header: options.header,
        subHeader: options.subheader,
        message: options.message,
        buttons: options.buttons
      });

      await alert.present();
  }
}
