import { Component, Input } from '@angular/core';
import {Resena } from '../../models/Resena';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css'
})
export class ResenasComponent {
  @Input() resenas: Resena[] = [];

  getAverageRating(): number {
    if (this.resenas.length === 0) return 0;
    const sum = this.resenas.reduce((acc, r) => acc + r.puntuacion, 0);
    return Math.round((sum / this.resenas.length) * 10) / 10;
  }

  getStars(puntuacion: number): string {
    return '⭐'.repeat(puntuacion);
  }

  getSortedResenas(): Resena[] {
    return [...this.resenas].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }
}
