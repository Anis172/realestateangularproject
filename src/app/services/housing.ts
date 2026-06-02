import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingLocation } from '../models/HousingLocation';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001/housingLocation';

  houses = signal<HousingLocation[]>([]);


  getHouseByIdAsync(id: string) {
    return this.http.get<HousingLocation>(`${this.apiUrl}/${id}`);
  }

  addHouse(house: any) {
    return this.http.post<HousingLocation>(this.apiUrl, house).pipe(
      tap(() => this.loadHouses())
    );
  }

  loadHouses() {
    this.http.get<HousingLocation[]>(this.apiUrl)
      .subscribe(data => this.houses.set(data));
  }

  constructor() {
    this.loadHouses();
  }
}
