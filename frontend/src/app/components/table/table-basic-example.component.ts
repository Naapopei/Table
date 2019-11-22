import { Component, OnInit, ViewChild,  } from '@angular/core';
import { User } from '../../users';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TableUserService } from 'src/app/table-user.service';
 

@Component({
  selector: 'table-basic-example',
  styleUrls: ['./table-basic-example.component.css'],
  templateUrl: './table-basic-example.component.html',
})
export class TableBasicExample implements OnInit {
  sub:any;
  user:User;
  str: User[] = [];
  displayedColumns: string[] = ['name', 'weight', 'age'];
  dataSource = new MatTableDataSource<User>();

  constructor(private http: HttpClient,private router: Router,
    private route:ActivatedRoute,
    private readonly tableUserService:TableUserService ) {}


  highlight(row):void{
    this.router.navigateByUrl("registration?id=" + row._id);
    console.log(row);
    let user: User=row;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngOnInit() {
    this.tableUserService.get('api/kek').subscribe((data: User[]) => {
      this.str = data;
      this.dataSource = new MatTableDataSource<User>(this.str);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

  
  onClick(){
    this.router.navigateByUrl('registration');
  }

  applyFilter(filterValue: string){

    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}