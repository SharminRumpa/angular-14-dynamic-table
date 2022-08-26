import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: 'dynamic-table.component.html',
  //styleUrls: ['order.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  @ViewChild(MatPaginator) _paginator: MatPaginator;
  @ViewChild(MatSort) _sort: MatSort;

  dataList: any = [];
  totalRows = 0;
  pageSize = 15;
  currentPage = 0;
  pageSizeOptions: number[] = [15, 30, 50, 100];

  content: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: any = [];

  constructor() {}

  ngOnInit() {
    //this.dataList = this.data;
    //console.log(this.dataList);
    this.getData(1, 50);
  }

  getData(pageIndex: number, pageSize: number) {
    this.content = this.data;
    if (this.displayedColumns.length == 0) {
      for (const column of Object.keys(this.content[0])) {
        this.displayedColumns.push(column);
      }
    }
    this.dataSource = new MatTableDataSource<any>(this.content);
    setTimeout(() => {
      this._paginator.pageIndex = this.currentPage;
      this._paginator.length = 100;
      this.dataSource.sort = this._sort;
    });
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getData(event.pageIndex, event.pageSize);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  data = [
    {
      id: '5d2bdad4d23987041dc5c8d6',
      age: 29,
      name: 'William',
      company: 'FLEXIGEN',
      email: 'undefined.undefined@flexigen.co.uk',
      phone: '+1 (893) 475-3508',
      address: '807 Sharon Street, Boomer, Missouri, 3484',
    },
    {
      id: '5d2bdad4035e6cad7b39a9c8',
      age: 21,
      name: 'Atkinson',
      company: 'PULZE',
      email: 'undefined.undefined@pulze.tv',
      phone: '+1 (901) 541-2875',
      address: '898 Arkansas Drive, Gloucester, Delaware, 8173',
    },
    {
      id: '5d2bdad4e34f03ad91d999bd',
      age: 21,
      name: 'Gretchen',
      company: 'ENVIRE',
      email: 'undefined.undefined@envire.biz',
      phone: '+1 (840) 587-2019',
      address: '635 Berkeley Place, Freeburn, Idaho, 866',
    },
    {
      id: '5d2bdad4f5a5c141f34adc93',
      age: 20,
      name: 'Olson',
      company: 'MARTGO',
      email: 'undefined.undefined@martgo.us',
      phone: '+1 (800) 408-2978',
      address: '845 Bay Street, Johnsonburg, Montana, 7584',
    },
    {
      id: '5d2bdad48a0315859623e102',
      age: 33,
      name: 'Camacho',
      company: 'RAMJOB',
      email: 'undefined.undefined@ramjob.name',
      phone: '+1 (864) 546-3079',
      address: '287 Micieli Place, Marbury, New Hampshire, 5877',
    },
    {
      id: '5d2bdad48a031585962023e1',
      age: 35,
      name: 'Camacho',
      company: 'RAMJOB',
      email: 'undefined.undefined@ramjob.name',
      phone: '+1 (864) 546-3079',
      address: '287 Micieli Place, Marbury, New Hampshire, 5877',
    },
    {
      id: '5d2bdad48a0319623e102585',
      age: 40,
      name: 'Camacho',
      company: 'RAMJOB',
      email: 'undefined.undefined@ramjob.name',
      phone: '+1 (864) 546-3079',
      address: '287 Micieli Place, Marbury, New Hampshire, 5877',
    },
  ];
}
