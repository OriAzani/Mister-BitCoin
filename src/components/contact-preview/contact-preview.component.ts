import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Contact } from '../../app/models/contact.interface'
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  constructor(private contactService : ContactService) { }
  @Input() contact :Contact;
  @Output() deleteContact = new EventEmitter

  imagePath = null;

  onDelete(event , id){
    event.preventDefault();
    this.deleteContact.emit(id)
  }
  ngOnInit(): void {
    this.imagePath = `http://robohash.org/${this.contact.name}`
  }

}
