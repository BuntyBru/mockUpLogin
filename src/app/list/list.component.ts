import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  time: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Austin', time:'8:00pm', address: 'USA'},
  {position: 2, name: 'Rohan', time:'8:00pm', address: 'India'},
  {position: 3, name: 'Rajiv', time:'8:00pm', address: 'India'},
  {position: 4, name: 'Bunty', time:'8:00pm', address: 'India'},
  {position: 5, name: 'Peter', time:'8:00pm', address: 'USA'},
  {position: 6, name: 'Parker', time:'8:00pm', address: 'UK'},
  {position: 7, name: 'Neymann', time:'8:00pm', address: 'Germany'},
  {position: 8, name: 'Arpit', time:'8:00pm' , address: 'Canada'},
  {position: 9, name: 'Ankit', time:'8:00pm' , address: 'Australia'},
  {position: 10, name: 'Mayank', time:'8:00pm', address: 'UK'},
  {position: 11, name: 'Sam', time:'8:00pm' , address: 'Norway'},
  {position: 12, name: 'Mohit', time:'8:00pm', address: 'Mongolia'},
  {position: 13, name: 'Arko', time:'8:00pm' , address: 'UAE'},
  {position: 14, name: 'Shreya', time:'8:00pm' , address: 'Iceland'},
  {position: 15, name: 'Paul', time:'8:00pm' , address: 'Norway'},
  {position: 16, name: 'Sridhar', time:'8:00pm' , address: 'Australia'},
  {position: 17, name: 'Carlos', time:'8:00pm', address: 'Canada'},
  {position: 18, name: 'Amir', time:'8:00pm' , address: 'Argentina'},
  {position: 19, name: 'Paulson', time:'8:00pm', address: 'Ireland'},
  {position: 20, name: 'Cal', time:'8:00pm', address: 'USA'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'time', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

