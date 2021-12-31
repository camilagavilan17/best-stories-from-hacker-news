import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

//Services
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  ELEMENT_DATA: number[] = [];
  displayedColumns: string[] = ['story'];
  dataSource = new MatTableDataSource<number>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api:ApiService) { 
  }

  ngOnInit(): void {
    this.api.getTopStories().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
