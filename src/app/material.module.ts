import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class MaterialModule {}