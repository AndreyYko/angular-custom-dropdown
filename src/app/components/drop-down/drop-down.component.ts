import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() autocomplete = false;
  @Input() select = false;
  @Input() checkbox = false;
  @Input() data: string[];
  @Input() isDisabled: boolean;
  public isHovered = false;
  public isSelected = false;
  public currentValue: string | string[];

  constructor() {}

  ngOnInit() {
    if (this.checkbox) {
      this.currentValue = [];
    } else {
      this.currentValue = '';
    }
  }
  public mouseEnterHandler(): void {
    if (!this.isDisabled) { this.isHovered = true; }
  }
  public mouseLeaveHandler(): void {
    if (!this.isDisabled) { this.isHovered = false; }
  }
  public toggleDropDown(value?: boolean, item?: string): void {
    if (!this.isDisabled) {
      if (value === false || value === true) {
        this.isSelected = value;
      } else {
        this.isSelected = !this.isSelected;
      }
      if (item) {
        if (this.checkbox && typeof this.currentValue !== 'string') {
          if (this.currentValue.includes(item)) {
            this.currentValue.splice(this.currentValue.indexOf(item), 1);
          } else {
            this.currentValue.push(item);
          }
        } else {
          this.currentValue = item;
        }
      } else if (item === null) {
        if (this.checkbox) {
          this.currentValue = [];
        } else {
          this.currentValue = '';
        }
      }
    }
  }
  public inputHandler(e): void {
    this.currentValue = e.target.value;
  }
}
