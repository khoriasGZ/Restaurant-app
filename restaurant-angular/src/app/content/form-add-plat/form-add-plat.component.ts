import { Component, OnInit } from '@angular/core';
import { PlatService } from '../../service/plat.service';
import { Plat } from '../model/Plat';

@Component({
  selector: 'app-form-add-plat',
  templateUrl: './form-add-plat.component.html',
  styleUrls: ['./form-add-plat.component.css']
})
export class FormAddPlatComponent implements OnInit {
  plat: Plat = { id: 0, nom: "", description: "", prix: 1 };
  constructor(private platService : PlatService) { }

  ngOnInit() {
    
  }
  onSubmit() {
    this.platService.addPlat(this.plat);
  }

}
