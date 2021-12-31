import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

//Services
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-best-stories',
  templateUrl: './best-stories.component.html',
  styleUrls: ['./best-stories.component.css']
})

export class BestStoriesComponent implements OnInit {
  ELEMENT_DATA: number[] = [];
  displayedColumns: string[] = ['story'];
  dataSource = new MatTableDataSource<number>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api:ApiService) { 
  }

  ngOnInit(): void {
    this.api.getBestStories().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
