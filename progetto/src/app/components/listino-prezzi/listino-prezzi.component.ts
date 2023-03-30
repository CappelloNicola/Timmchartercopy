import { Component } from '@angular/core';



const ELEMENT_DATA: any[] = [
  {periodo1: '11/10-17/04	', periodo2: '17/04-29/05', periodo3: '29/05-17/07	', periodo4: '17/07-31/07	',periodo5:'31/07-21/08	',periodo6:'21/08-18/09',periodo7:'18/09-09/10'},
  {periodo1: '*3.550 euro	', periodo2: '*4.000 euro	', periodo3: '*4.500 euro', periodo4: '*4.705 euro', periodo5:'*5.450 euro	',periodo6:'*4.705 euro	',periodo7:'*4.000 euro'},
];

@Component({
  selector: 'app-listino-prezzi',
  templateUrl: './listino-prezzi.component.html',
  styleUrls: ['./listino-prezzi.component.css']
})
export class ListinoPrezziComponent {
  displayedColumns: string[] = ['periodo1', 'periodo2', 'periodo3', 'periodo4','periodo5','periodo6','periodo7'];
  dataSource = ELEMENT_DATA;
}
