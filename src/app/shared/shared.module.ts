import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { LoadingFeedbackComponent } from './components/loading-feedback/loading-feedback.component';





@NgModule({
  declarations: [
    CardComponent,
    LoadingFeedbackComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardComponent,
    LoadingFeedbackComponent
  ]
})
export class SharedModule { }
