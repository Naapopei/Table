import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  str: User;
  constructor(private http: HttpClient){}
      
    ngOnInit(){     
        this.http.get<User>('api/kek').subscribe((data) =>{ this.str = data});
        
        
        
      }

}
