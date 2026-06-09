import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { HousingService } from '../../services/housing'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl:'./home.css'
})
export class Home {
  protected housingService = inject(HousingService);
  protected readonly HousingService = HousingService;
}
