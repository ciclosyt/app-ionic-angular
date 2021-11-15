import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/shared/services/peliculas.service';
import { switchMap } from 'rxjs/operators';
import { Peliculas } from 'src/app/shared/models/peliculas.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail-peliculas',
  templateUrl: './detail-peliculas.page.html',
  styleUrls: ['./detail-peliculas.page.scss'],
})
export class DetailPeliculasPage implements OnInit {

  userForm: FormGroup;
  peliModificable: any | null;
  state:  'loading' | 'loaded' | 'error' = 'loading';
  deshabilitado = true;
  botonDeshabilitado = true;

  constructor( private activateRoute: ActivatedRoute,
                private peliculasService: PeliculasService,
                private fb: FormBuilder,
                private router: Router,
                public toastController: ToastController,
                public alertController: AlertController ) { }

  ngOnInit() {

     this.userForm = this.fb.group({

      id: [ , []],
      title: ['', [Validators.required, Validators.minLength(2)]],
      poster: ['', [Validators.required, Validators.minLength(5)]],
      year: [ ,[Validators.required]],
      duration: [ ,[Validators.required, Validators.minLength(2)]],
      actor: [[] , []],
      genre: [ [],[]],
      imdbRating: [ ,[]]

     });

     this.userForm.disable();

      this.getMovie();

  }





  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Estas seguro que quieres borrarla?',
      message: '<strong>Cuidado</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('No borrada');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deletePeli();
          }
        }
      ]
    });

    await alert.present();
  }










  async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Error al actualizar tu Pelicula',
      duration: 3500
    });
    toast.present();
  }
  async presentToastErrorDelete() {
    const toast = await this.toastController.create({
      message: 'Error al Borrar tu Pelicula',
      duration: 3500
    });
    toast.present();
  }
  async presentToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Tu Pelicula ha sido actualizada',
      duration: 3500
    });
    toast.present();
  }
  async presentToastSuccessDelete() {
    const toast = await this.toastController.create({
      message: 'Tu Pelicula ha sido Borrada',
      duration: 3500
    });
    toast.present();
  }

  submitForm(){
    this.peliModificable = this.userForm.value;
  }

  deshabilitar(){
    this.userForm.enable();
    this.botonDeshabilitado = false;
  }

  getMovie(){

    this.state = 'loading';
    this.activateRoute.params.pipe(
      switchMap( ({id}) => this.peliculasService.getPeliculasPorId(id) )
    ).subscribe(
      (peli) => {
        this.peliModificable = peli;
        this.userForm.patchValue({...this.peliModificable});
        console.log(this.peliModificable);
        this.state = 'loaded';

      }, (error) =>{
        console.error(error);
        this.state = 'error';
      } )
  }

  update(){
    this.state = 'loading';
    this.userForm.disable();
    this.submitForm();
    this.peliculasService.updatePeliculasPorId(this.peliModificable)
              .subscribe(
                () => {
                  console.log(this.peliModificable);

                  this.presentToastSuccess();
                  this.state = 'loaded';
                  this.userForm.enable();
                  this.router.navigate(['/peliculas']);
                },
                (error) => {
                  this.presentToastError();
                  this.userForm.enable();
                })
  }

  deletePeli(){
    this.state = 'loading';
    this.activateRoute.params.pipe(
      switchMap( ({id}) => this.peliculasService.deletePeliculasPorId(id) )
    ).subscribe(
      () => {
        this.presentToastSuccessDelete();
        this.state = 'loaded';
        this.router.navigate(['/peliculas']);
      },
      (error) => {
        this.presentToastErrorDelete();
        this.userForm.enable();
      }
    )
  }

}
