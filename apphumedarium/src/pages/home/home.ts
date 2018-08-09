import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Platform, Nav, AlertController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images'
import { ImageInfoPage } from '../../pages/image-info/image-info'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails: any;
  images: any;
  respouceData: any;
  respounce: any;


  constructor(public navCtrl: NavController,
    public menu: MenuController,
    public alertctl: AlertController,
    public imagesProvider: ImagesProvider,) 
  
  {
    const data = JSON.parse(localStorage.getItem('user'));
    console.log(data);
    this.userDetails = data.user;
    console.log(this.userDetails);
    this.getImagesHome();
    
  }
  getImagesHome(){
      this.imagesProvider.getImage(this.userDetails.auth_token).then((result) => {
      this.respounce = result;
      this.images = this.respounce.data;
      console.log(this.images)
    },(err) => {
      //console.log(err);
    });
  }

  goImage(urlImage, imgDescription, imgDate){
    this.navCtrl.push(ImageInfoPage,{
      img: urlImage,
      info:imgDescription,
      fecha: imgDate
    });
  }

}
