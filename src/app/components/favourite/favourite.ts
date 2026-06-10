import { Component } from '@angular/core';
import {inject} from '@angular/core';
import {HousingService} from '../../services/housing';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-favourite',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './favourite.html',
  styleUrl: './favourite.css',
})
export class Favourite {
  protected housingService = inject(HousingService);
}
