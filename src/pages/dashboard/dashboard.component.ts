import { Component, OnInit } from '@angular/core';
import { BitcoinService }  from '../../app/services/bitcoin.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private bitcoinService : BitcoinService) { }
 
   marketValue = {
     title : 'Bitcoin  Market Value :',
     type : 'LineChart',
     columnNames : ['Year', 'Asia'],
     options : { hAxis: { direction: 1, slantedText: true, slantedTextAngle: 45,}},
     data : null,
     monthSpan: 1
   }

   confirmedTransactions= {
    title : 'Bitcoin  Transactions : (Daily) ',
    type : 'LineChart',
    columnNames : ['Year', 'Asia'],
    options : { hAxis: { direction: 1, slantedText: true, slantedTextAngle: 45,}},
    data : null,
    daySpan: 7
   }

  getMarketPrice(){
    this.bitcoinService.getMarketPrice(this.marketValue.monthSpan)
    .subscribe(res => {
     const values = res.values
     this.marketValue.data = values.map( coord => [new Date(coord.x*1000) , coord.y] )
      })
  }

  getConfirmedTransactions(){
    this.bitcoinService.getConfirmedTransactions(this.confirmedTransactions.daySpan)
    .subscribe(res => {
     const values = res.values
     this.confirmedTransactions.data = values.map( coord => [new Date(coord.x*1000) , coord.y] )
      })
  }

  setDaySpan(ev){
     this.confirmedTransactions.daySpan = ev.target.value
     this.getConfirmedTransactions()
  }
  setMonthSpan(ev){
     this.marketValue.monthSpan = ev.target.value
     this.getMarketPrice()
  }


  ngOnInit(): void {
  this.getMarketPrice()
  this.getConfirmedTransactions()
  }

}