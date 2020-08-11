import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ContactService } from '../../app/services/contact.service';
// import { Contact } from '../../app/models/contact.interface'
import { Contact } from '../../app/services/contact.model'

import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private location : Location) { }

    contactToEdit= null;     
    imagePath = null;
    
    loadContact(id) {
      if(id) {
        this.contactService.getContactById(id)
        .subscribe(contact => this.contactToEdit = {...contact})
      } else {
        this.contactToEdit = new Contact;
        // this.contactToEdit = this.contactService.getEmptyContact()
      }
    }

    saveContact(ev){
      ev.preventDefault();
      this.contactService.saveContact(this.contactToEdit)
      this.location.back();
    }
  
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params.id
      this.loadContact(id)
      if(this.contactToEdit){
        this.imagePath = `http://robohash.org/${this.contactToEdit.name}`
      }
    }

}

