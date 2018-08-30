import { Component, OnInit, Input } from '@angular/core';
import {Plat} from '../../model/Plat';


@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() plat : Plat;

  constructor() { }

  ngOnInit() {
  }

}
