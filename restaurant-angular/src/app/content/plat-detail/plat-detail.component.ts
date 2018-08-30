import { Component, OnInit, Input } from '@angular/core';
import { Plat } from '../model/Plat';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.css']
})
export class PlatDetailComponent implements OnInit {

  plat : Plat

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
      console.log(this.route.data);
      this.route.data.subscribe(v => {
        this.plat = v.plat;
      })
  }

}
