import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }
  
  public getRate() : Observable<any> {    
    return this.http.get<any>(`https://blockchain.info/tobtc?currency=USD&value=1`);
  }
  public getMarketPrice(months): Observable<any> {
    return this.http.get<any>(`https://api.blockchain.info/charts/market-price?timespan=${months}months&format=json&cors=true`)
  }
  public getConfirmedTransactions(days): Observable<any> {
    return this.http.get<any>(`https://api.blockchain.info/charts/trade-volume?timespan=${days}days&format=json&cors=true`)
  }
}
