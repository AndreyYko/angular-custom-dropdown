import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() isDisabled: boolean;
  public isHovered = false;
  public isSelected = false;

  constructor() { }

  ngOnInit() {
  }
  public mouseEnterHandler(): void {
    this.isHovered = true;
  }
  public mouseLeaveHandler(): void {
    this.isHovered = false;
  }
  public clickHandler(): void {
    this.isSelected = !this.isSelected;
  }
}
