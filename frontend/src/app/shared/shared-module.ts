import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './components/footer/footer';

import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    Footer
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    Footer
  ]
})
export class SharedModule { }
