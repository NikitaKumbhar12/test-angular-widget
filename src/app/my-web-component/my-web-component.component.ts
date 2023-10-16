import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-web-component',
  templateUrl: './my-web-component.component.html',
  styleUrls: ['./my-web-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyWebComponentComponent implements OnInit {

  ngOnInit(): void {
      console.log('MyWebComponent method')
  }

}
