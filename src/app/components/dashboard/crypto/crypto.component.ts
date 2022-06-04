import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/crypto'

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  public bitcoinBtc = chartData.bitcoinBtc.options;
  public litecoinLtc = chartData.litecoinLtc.options;
  public ethereumEtc = chartData.ethereumEtc.options;
  public candleStick = chartData.candleStick.options;
  public marketDepth = chartData.marketDepth;
  

  constructor() { }

  ngOnInit(): void {
  }

}
