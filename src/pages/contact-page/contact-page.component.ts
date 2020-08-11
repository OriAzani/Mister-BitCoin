import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../app/services/contact.service'
import { UserService } from '../../app/services/user.service'
import { BitcoinService } from '../../app/services/bitcoin.service'
import { Contact } from '../../app/models/contact.interface'
import { User } from '../../app/models/user.interface'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  filterBy = {term: ''};
  contacts  = [];
  user : User = null;
  bitcoinRate = 0 ;
  currContact : Contact = null;

  constructor(private contactService : ContactService, private userService : UserService, private bitcoinService : BitcoinService ) { }


  setCurrContact(contact){
    this.currContact = contact
  }

  deleteContact(id){
    this.contactService.deleteContact(id)
  }
  ngOnInit(): void {
    
    this.user = this.userService.getUser();
    
    this.bitcoinService.getRate()
    .subscribe((res) => {
      this.bitcoinRate = res
    })    


    this.contactService.loadContacts();
    var contacts$ = this.contactService.contacts$;
    contacts$.subscribe(contacts => this.contacts = contacts);
    
          // .then(contacts => this.contacts = contacts);
    // this.contactService.
  }

  setFilter(term): void {
    this.filterBy.term = term;
    this.contactService.loadContacts(this.filterBy);
  }
}
