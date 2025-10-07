import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-hijo',
  imports: [],
  templateUrl: './after-content-hijo.html',
  styleUrl: './after-content-hijo.css'
})
export class AfterContentHijo implements AfterContentInit, AfterContentChecked {

  ngAfterContentInit(): void {
    console.log("AfterContentHijo.AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentHijo.AfterContentChecked");
  }
}
