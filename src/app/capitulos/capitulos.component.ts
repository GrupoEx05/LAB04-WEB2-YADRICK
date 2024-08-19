import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { CapitulosService } from '../servicios/capitulos.service';

@Component({
  selector: 'app-capitulos',
  standalone: true,
  imports: [MatTableModule, MatPaginator, CommonModule, MatCardModule],
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.scss'],
  providers: [DatePipe],
})
export class CapitulosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created'];
  capitulos: any[] = [];
  totalResults: number = 0;
  pageSize: number = 20;
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private capitulosSrv: CapitulosService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.loadCapitulos(this.currentPage + 1);
  }

  loadCapitulos(page: number) {
    this.capitulosSrv.getCapitulos(page).subscribe((datos: any) => {
      this.capitulos = datos.results.map((capitulo: any) => ({
        ...capitulo,
        air_date: this.datePipe.transform(capitulo.air_date, 'medium'),
        created: this.datePipe.transform(capitulo.created, 'medium'),
      }));
      this.totalResults = datos.info.count;
    });
  }

  handlePageEvent(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCapitulos(this.currentPage + 1);
  }
}
