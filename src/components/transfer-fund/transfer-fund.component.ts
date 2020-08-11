import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Contact } from '../../app/models/contact.interface'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

@Input() contact:Contact;

amount = null;

  constructor(private router:Router ,private userService:UserService) { }

  sendAmount(){
    this.userService.addMove(this.amount, this.contact.name)
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }

}
