import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  
  }

  showMap(){
    const location = new google.maps.LatLng(4.912462, -74.017738);

    const options = {
      center: location,
      zoom: 14
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);



  var locations = [
    ['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]
  ];

  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    this.image = 'assets/imgs/pin.png';
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: this.map,
      icon: this.image
    });
  
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(this.map, marker);
      }
    })(marker, i));
  }
  

}
}
