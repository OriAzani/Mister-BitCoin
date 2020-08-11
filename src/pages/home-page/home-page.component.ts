import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../app/services/contact.service'
import { UserService } from '../../app/services/user.service'
import { BitcoinService } from '../../app/services/bitcoin.service'
import { Contact } from '../../app/models/contact.interface'
import { User } from '../../app/models/user.interface'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  contacts  = [];
  user : User = null;
  bitcoinRate = 0 ;
  currContact : Contact = null;

  constructor(private router:Router , private contactService : ContactService, private userService : UserService, private bitcoinService : BitcoinService ) { }


  setCurrContact(contact){
    this.currContact = contact
  }

  imagePath = null;
      
  ngOnInit(): void {
   
    this.user = this.userService.getUser();
    if (!this.user) {   
      this.router.navigate(['/signup']);
      return
    }

    this.bitcoinService.getRate()
    .subscribe((res) => {
      this.bitcoinRate = res
    })    

    this.contactService.loadContacts();
    var contacts$ = this.contactService.contacts$;
    contacts$.subscribe(contacts => this.contacts = contacts);
    
          // .then(contacts => this.contacts = contacts);
    // this.contactService.
    this.imagePath = `http://robohash.org/${this.user.name}`
  }


}
