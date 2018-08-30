import { Component, OnInit, Input } from '@angular/core';
import { Plat } from '../model/Plat';
import { PlatService } from '../../service/plat.service';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrls: ['./plat-list.component.css']
})
export class PlatListComponent implements OnInit {

  

  constructor(private platService : PlatService) { }

  ngOnInit() {

    this.platService.getPlats();

  }

  

}
