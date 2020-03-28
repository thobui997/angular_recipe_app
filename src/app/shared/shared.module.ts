import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinerComponent } from './loading-spiner/loading-spiner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './placeholder/place-holder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    LoadingSpinerComponent,
    AlertComponent,
    PlaceHolderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinerComponent,
    AlertComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule
  ]
})

export class SharedModule {}
