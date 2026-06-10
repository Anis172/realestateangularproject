import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../services/housing';
import { HousingLocation } from '../../models/HousingLocation';
import { CurrencyPipe } from '@angular/common';
import { ResenasComponent } from '../resenas/resenas';

@Component({
  selector: 'app-housing-detail',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, ResenasComponent],
  templateUrl: './housing-detail.html',
  styleUrl: './housing-detail.css',
})
export class HousingDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  protected housingService = inject(HousingService);

  house = signal<HousingLocation | undefined>(undefined);
  weather = signal<any>(null);
  alreadyApplied = signal(false); // ← add this!

  private apiKey = 'aa1f6fe6a9e31bd124780ff2514a8cfe';

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.housingService.getHouseByIdAsync(id).subscribe((h) => {
      this.house.set(h);

      // check if already applied
      const appliedId = localStorage.getItem('appliedHouseId');
      if (appliedId === id) {
        this.alreadyApplied.set(true);
      }

      if (h) {
        this.http
          .get<any>(
            `https://api.openweathermap.org/data/2.5/weather?lat=${h.coordinate.latitude}&lon=${h.coordinate.longitude}&appid=${this.apiKey}&units=metric`,
          )
          .subscribe((data) => this.weather.set(data));
      }
    });
  }
}
