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
  public filtrebynameandcity=signal("")
  public available=signal(false);
  public sortsense=signal("")

  houses = signal<HousingLocation[]>([]);
  favourites = signal<HousingLocation[]>(
    JSON.parse(localStorage.getItem('favourites') || '[]')
  );


  toggleFavourite(house: HousingLocation) {
    const isFav = this.favourites().some(h => h.id === house.id);
    if (isFav) {
      this.favourites.set(this.favourites().filter(h => h.id !== house.id));
    } else {
      this.favourites.set([...this.favourites(), house]);
    }
    localStorage.setItem('favourites', JSON.stringify(this.favourites()));
  }

  isFavourite(id: number) {
    return this.favourites().some(h => h.id === id);
  }
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
  filteredhouses(){
    let homes=this.houses().filter(house=>
      house.name.toLowerCase().includes(this.filtrebynameandcity().toLowerCase())||
      house.city.toLowerCase().includes(this.filtrebynameandcity().toLowerCase())||
      house.state.toLowerCase().includes(this.filtrebynameandcity().toLowerCase())).filter(h=>!this.available()||h.available)

      if(this.sortsense()==="asc"){
         homes=[...homes].sort((a,b)=>a.price-b.price)
      }else if(this.sortsense()==="desc"){
        homes=[...homes].sort((a,b)=>b.price-a.price)
      }
      return homes


  }

  constructor() {
    this.loadHouses();
  }
}
