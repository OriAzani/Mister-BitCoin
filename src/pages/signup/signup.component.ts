import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }
    
  name: string = '';

  signup(ev): void {
    ev.preventDefault();
    if (!this.name) return
    this.userService.signup(this.name);
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}

