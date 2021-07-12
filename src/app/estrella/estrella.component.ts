import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EstrellaComponent),
      multi: true
    }
  ]
})
export class EstrellaComponent implements OnInit, ControlValueAccessor {
  @Input() cantidad;
  estrellaActual = 0;
  array: number[] = [];
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisable: boolean;

  constructor() {}
  writeValue(value: number): void {
    if (value > 0) {
      this.estrellaActual = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  check(value: number) {
    if (value <= this.estrellaActual) {
      return true;
    } else {
      return false;
    }
  }

  set(value: number) {
    if (this.estrellaActual == 0) {
      this.estrellaActual = value;
    } else if (this.estrellaActual !== 0 && value == this.estrellaActual) {
      this.estrellaActual = 0;
    } else {
      this.estrellaActual = value;
    }
    this.onTouch();
    this.onChange(this.estrellaActual);
  }

  ngOnInit() {
    for (let i = 1; i <= this.cantidad; i++) {
      this.array.push(i);
    }
  }
}
