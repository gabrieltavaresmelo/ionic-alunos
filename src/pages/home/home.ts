import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vetor2=[
    { foto:'https://avatars.githubusercontent.com/u/2178796?v=4', nome: 'Gabriel', telefone: '8599715666', matricula: '123' },
    { foto:'assets/imgs/logo.png', nome: 'Maria', telefone: '8599715666', matricula: '123' },
    { foto:'assets/imgs/logo.png', nome: 'João', telefone: '8599715666', matricula: '123' },
  ]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar',
      message: "Insira o nome do aluno",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome do aluno'
        },
        {
          name: 'telefone',
          placeholder: 'Telefone do aluno'
        },
        {
          name: 'matricula',
          placeholder: 'Matrícula do aluno'
        },
        {
          name: 'foto',
          placeholder: 'URL da Foto do aluno'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            console.log('clicado: ', data);

            let a = { foto:data.foto, nome: data.nome, telefone: data.telefone, matricula: data.matricula };
            this.vetor2.push(a) // add no vetor
          }
        }
      ]
    });
    prompt.present();
  }

  excluir(item) {
    console.log('excluir', item);

    for (let i = 0; i < this.vetor2.length; i++) {
      const element = this.vetor2[i];
      
      if(element.nome == item.nome) {
        // console.log('achei!', i, element.nome);
        this.vetor2.splice(i, 1)
      }
    }
  }

  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Tem certeza que deseja excluir?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            this.excluir(item)
          }
        }
      ]
    });
    confirm.present();
  }

}
