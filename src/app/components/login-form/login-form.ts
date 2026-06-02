import { Component, OnInit,inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl:'./login-form.css'
})
export class LoginForm implements OnInit {
  private router = inject(Router);

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit() {
    const saved = localStorage.getItem('applyForm');
    if (saved) {
      this.form.patchValue(JSON.parse(saved));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    localStorage.setItem('applyForm', JSON.stringify(this.form.value));
    this.router.navigate(['/']);
  }
}
