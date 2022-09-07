import { Component, Input, OnInit, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  image!: string
  private _current = 0

  private updateImage(n : number) {
    console.info(">>> number:: ",n)
    this.image= `/assets/number${n}.jpg`
  }

  @Input()
  set current(n : number) {
    console.info(">>> set:: ",n)
    this._current = n;
    this.updateImage(n)
  }

  get current(): number {
    return this._current
  }

  

  @Output()
  onImageClicked = new Subject<number>()

  
  // image ='/assets/number${this.current}.jpg'


  constructor() { }

  ngOnInit(): void {
    this.updateImage(this._current)
  }

  imageClicked() {
    console.info(`--- current: ${this._current}`, this._current)
    console.info("--- current ", this._current)
    this.onImageClicked.next(this.current)
  }

  prev() {
    this._current--
    if (this._current <0) 
      this._current = 30
    this.updateImage(this._current)
  }

  next() {
    this._current++
    // this._current %= 31
    if (this._current >30) 
      this._current = 0
    this.updateImage(this._current)
  }

  

}
