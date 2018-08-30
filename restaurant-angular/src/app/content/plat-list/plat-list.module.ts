import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatComponent } from './plat/plat.component';
import { PlatListComponent } from './plat-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [PlatComponent, PlatListComponent],
  exports : [PlatListComponent]
})
export class PlatListModule { }
