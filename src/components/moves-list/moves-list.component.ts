import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  constructor(private userService: UserService) { }
  user = null;

  ngOnInit(): void {
   this.user  = this.userService.getUser()
  }

}
