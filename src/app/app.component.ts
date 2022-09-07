import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  current = 0
  selectedNumbers: number[] = []
  selectedNumberText!: string
  // title = 'day30wsNumber';

  ngOnInIt(): void {
    this.reset()
  }

  reset() {
    this.current = Math.floor(Math.random() * (30-0+1)+0)
    this.selectedNumberText = "Empty for now!"
  }

  imageClicked(n : number) {
    console.info(">>> selected :: ",n)
    this.selectedNumbers.push(n)
    this.selectedNumberText = this.selectedNumbers.join(", ")
  }
}
