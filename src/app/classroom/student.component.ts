import {Component, Input} from "@angular/core";

@ Component({
  selector: 'student',
  templateUrl:'./student.component.html'
})
export class StudentComponent {
  @Input()
 classN?:string;
  sobangai = 7;
 sobangaitang(){
     this.sobangai++;
 }
  sobangaigiam(){
   if(this.sobangai > 0){
     this.sobangai--;
   }
  }
}
