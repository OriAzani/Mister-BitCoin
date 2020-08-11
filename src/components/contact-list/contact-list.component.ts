import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
// import { Contact } from 'src/app//'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
 
  currContact = null;
  @Input() contacts;
  @Output() contactSelected = new EventEmitter();
  @Output() deleteTheContact = new EventEmitter();

    constructor() { }


    setCurrContact(contact) {
      this.contactSelected.emit(contact);
    }

    deleteContact(id){
      this.deleteTheContact.emit(id)
    }
    
  ngOnInit(): void {
  }

}
