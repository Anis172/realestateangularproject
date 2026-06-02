import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { HousingService } from '../../services/housing';

@Component({
  selector: 'app-housing-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './housing-form.html',
  styleUrl:'./housing-form.css'
})
export class HousingForm {
  private service = inject(HousingService);
  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    availableUnits: new FormControl<number|null>(null, [Validators.required, Validators.min(1)]),
    price: new FormControl<number|null>(null, [Validators.required, Validators.min(10000)]),
    wifi: new FormControl(false),
    laundry: new FormControl(false),
    available: new FormControl(true)
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.service.addHouse({
      ...this.form.value as any,
      photo: '',
      coordinate: { latitude: 0, longitude: 0 }
    }).subscribe(() => this.router.navigate(['/']));
  }
}
