import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Foto } from '../../model/foto';

@IonicPage()
@Component({
  selector: 'page-foto-detalhe',
  templateUrl: 'foto-detalhe.html',
})
export class FotoDetalhePage {

  foto : foto;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.foto = this.navParams.get('foto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoDetalhePage');
  }

}
