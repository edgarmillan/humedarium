import { Component, ViewChild  } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactenosPage } from '../pages/contactenos/contactenos';
import { PerfilPage } from '../pages/perfil/perfil';
import { AlbumPage } from '../pages/album/album';
import { MapPage } from '../pages/map/map';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  @ViewChild('nav') nav: Nav;
 

  
  private pages: Array<{titulo: string, component:any, icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
  
    });

    this.rootPage = WelcomePage;
    this.pages = [
      { titulo: 'Inicio', component: HomePage,    icon: 'home' },
      { titulo: 'Perfil', component: PerfilPage , icon: 'person' },
      { titulo: 'Contáctenos', component: ContactenosPage , icon: 'mail' }
    ]
 
  
  }
  goToPage(page){
    this.nav.setRoot(page);
  }
}

