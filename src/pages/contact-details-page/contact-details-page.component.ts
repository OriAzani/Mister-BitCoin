import { Component, OnInit, Input,Output } from '@angular/core';
import { Contact } from '../../app/models/contact.interface'
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  @Input() currContact: Contact;

  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute,) { }
  
  contact: Contact = null;
  imagePath = null;


  loadContact() {
    const id = this.activatedRoute.snapshot.params.id;
    this.contactService.getContactById(id)
      .subscribe(contact => this.contact = contact)
  }
  ngOnInit(): void {
    this. loadContact()
    this.imagePath = `http://robohash.org/${this.contact.name}`

  }

}
