import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FOTOS } from '../../config/api.config';
import { Foto } from '../../model/foto';

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  fotos : Foto[] = FOTOS;

navFotoDetalhe(foto : foto){
  this.navCtrl.push('FotoDetalhePage',{foto : foto});
}

}
