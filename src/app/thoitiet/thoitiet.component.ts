import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@ Component({
  selector:'thoitiet',
  templateUrl:'./thoitiet.component.html'
})
export class ThoitietComponent{
  city : string ='HaNoi'
  temp : number = 30;
  hump : number = 70;
  press : number = 1002;
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.hanoi();
  this.sg();
  this.ld();
  this.ny();
  this.tko();
  this.bl();
  }
  hanoi(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
}
  sg(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  ld(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  ny(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  tko(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  bl(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
}
