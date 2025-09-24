import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SeriesService, Series } from './series.service'; // Importa el servicio y la interfaz
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
//  styleUrls: ['./series-list.component.css']
  standalone: true,
  imports: [CommonModule]
})
export class SeriesListComponent implements OnInit {
  series: Series[] = [];
  errorMessage: string = '';

  constructor(private seriesService: SeriesService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe({
      next: (data) => {
        this.series = (data as any).value;
        this.cdr.markForCheck(); // Notifica a Angular que debe revisar y actualizar la vista
      },
      error: (err) => {
        console.error('Error al obtener las series:', err);
        this.errorMessage = 'No se pudieron cargar las series. Por favor, inténtalo de nuevo más tarde.';
      }
    });
  }
}
