import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Peliculas } from 'src/app/shared/models/peliculas.model';
import { PeliculasService } from '../../shared/services/peliculas.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.page.html',
  styleUrls: ['./crear-pelicula.page.scss'],
})
export class CrearPeliculaPage implements OnInit {

  userForm: FormGroup;
  peliNueva: Peliculas;
  state:  'loading' | 'loaded' | 'error' = 'loading';

  constructor( private peliculasService: PeliculasService,
                private route: Router,
                 private fb: FormBuilder,
                 public toastController: ToastController,
                 public alertController: AlertController) { }

  ngOnInit() {
    this.presentAlertConfirm();

    this.userForm = this.fb.group({

      id: [ ,[]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      poster: ['',[Validators.required, Validators.minLength(5)]],
      genre: ['',[Validators.required]],
      year: [ ,[Validators.required]],
      duration: [ ,[Validators.required]],
      imdbRating: [ ,[Validators.required]]

     });

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Quieres crear tu propia peli?',
      message: 'Cuidado con los <strong>Spoilers</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.route.navigate(['/peliculas']);
          }
        }, {
          text: 'SI',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  };

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tu Pelicula ha sido guardada con exito.',
      duration: 3500
    });
    toast.present();
  }

  async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Error al guardar tu Pelicula',
      duration: 3500
    });
    toast.present();
  }

  submitForm(){
    this.peliNueva = this.userForm.value;
  }

  guardarPeli(){

    this.submitForm();

    this.peliculasService.createPeli(this.peliNueva)
      .subscribe(
        () => {

          this.presentToast();

          this.route.navigate(['/peliculas']);
        }, (error) => {
          console.error(error);
          this.presentToastError();
          this.userForm.patchValue({});

        }
      )
  }
}
