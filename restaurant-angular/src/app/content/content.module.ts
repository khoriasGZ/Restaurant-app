import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { PlatListModule } from './plat-list/plat-list.module';
import { PlatDetailComponent } from './plat-detail/plat-detail.component';

@NgModule({
  imports: [
    CommonModule, PlatListModule
  ],
  declarations: [ContentComponent, PlatDetailComponent],
  exports : [ContentComponent]
  
})
export class ContentModule { }
