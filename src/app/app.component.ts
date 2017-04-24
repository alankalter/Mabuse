import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Pipe, PipeTransform} from '@angular/core';
import { DateFilter } from '../share/pipes/dateFilter.pipe';
import { TheaterDateFilter } from '../share/pipes/dateFilter.pipe';
declare var moment: any;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']  
})
export class AppComponent {
  keysGetter = Object.keys;  
  currentDate = "";
  data: Array<any> = [];
  constructor(af: AngularFire) {    
    af.database.object('/Theaters', {preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          var newObj = {};
          newObj["name"] = snapshot.key;
          newObj["films"] = snapshot.val();
          this.data.push(newObj);
        });
        //set date on data to trigger pipe filter
         this.currentDate = moment().format("ddd MM/DD/2017");
        
      })
  }
  public incrementDate(amount) {
    var date = new moment(this.currentDate); 
    this.currentDate = date.add(amount, 'day').format("ddd MM/DD/YYYY");
 
  }
  public keyPressHandler(event) {
    if (event.keyCode == 39){
      this.incrementDate(1);
    }

    else if (event.keyCode == 37){
      this.incrementDate(-1);
    }
} 
}

