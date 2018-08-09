import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ContactenosPage } from '../pages/contactenos/contactenos';
import { PerfilPage } from '../pages/perfil/perfil';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { AlbumPage } from '../pages/album/album';
import { MapPage } from '../pages/map/map';
import { ImagesProvider } from '../providers/images/images';
import { ImageInfoPage } from '../pages/image-info/image-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    ContactenosPage,
    LoginPage,
    WelcomePage,
    SignUpPage,
    AlbumPage,
    MapPage,
    ImageInfoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    ContactenosPage,
    LoginPage,
    WelcomePage,
    SignUpPage,
    AlbumPage,
    MapPage,
    ImageInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ImagesProvider
  ]
})
export class AppModule {
 


}
