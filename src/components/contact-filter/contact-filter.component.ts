import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() filter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  setFilter(term) {
    this.filter.emit(term)
  }

}
