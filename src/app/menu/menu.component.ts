import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

import {MenuService} from './menu.service';
import {Menu} from './models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu;

  constructor(private menuservice: MenuService) {}

  ngOnInit() {
    this.getItems();

    $(document).ready(function() {
      $('.yes-image').css('color', 'white');
      $('.yes-imageText').css('color', 'white');

      $('.mdl-card')
          .hover(function() {
            $(this).toggleClass('mdl-shadow--16dp');
          })
          .css('cursor', 'pointer');
    });
  }

  getItems(): void {
    this.menuservice.getMenuItems().subscribe(menu => (this.menu = menu));
  }
}
