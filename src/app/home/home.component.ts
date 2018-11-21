import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      var imageWidth = $('.mdl-layout__content').width();
      if (imageWidth < 412) {
        var imageHeight = $(window).height() - 110;
        var paddingBottom = (imageHeight / imageWidth) * 100 + '%';
        $('#image').css('padding-top', paddingBottom);
      } else {
        var imageHeight = $(window).height() - 133;
        var paddingBottom = (imageHeight / imageWidth) * 100 + '%';
        $('#image').css('padding-top', paddingBottom);
      }
    });
  }
}
