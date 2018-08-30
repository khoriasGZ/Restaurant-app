import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PlatListComponent } from '../content/plat-list/plat-list.component';
import { PlatDetailComponent } from '../content/plat-detail/plat-detail.component';
import { PlatResolverService } from '../resolver/plat-resolver.service';
import { FormAddPlatComponent } from '../content/form-add-plat/form-add-plat.component';
 

 
const appRoutes: Routes = [
  { path: '', component: PlatListComponent },
  { path: 'addDetail', component: FormAddPlatComponent },
  { path: "plat/:id", component: PlatDetailComponent,
            resolve : {
              plat : PlatResolverService
            }}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}