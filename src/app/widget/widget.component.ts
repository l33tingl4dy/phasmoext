import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  
  public ghostName = "John Anderson";
  public location = "Willow Street";
  public difficulty = "Professional";
  constructor() { }
  ngOnInit(): void {
  }

}
