import { Component } from '@angular/core';

@Component({
  selector: 'summary-page',
  imports: [],
  templateUrl: './summary-page.html',
  styleUrl: './summary-page.css',
  host: {
    class: "w-screen mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4"
  }
})
export default class SummaryPage {
}
