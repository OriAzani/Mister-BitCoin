import { Injectable } from '@angular/core';
import { utils }  from '../services/utils.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

// user = { name: "Ochoa Hyde", coins: 100, moves: [] }

loggedInUser : any = {
  name: '',
  coins: 100,
  moves: [] 
}

 public getUser() {
  let user = utils.loadFromStorage('user');
  if(user) return user
  return null
  // utils.storeToStorage('user' ,this.user);
  // return this.user
}

public signup(name) {
  this.loggedInUser.name = name;
  utils.storeToStorage('user' , this.loggedInUser)
}

public logout(){
  localStorage.removeItem('user')
}

 public addMove(amount,name) {
  let move = {name, amount, time: Date.now()}
  let user = utils.loadFromStorage('user');
  user.moves.unshift(move)
  user.coins -= +amount
  utils.storeToStorage('user' , user)
 }
  constructor() { }
}
