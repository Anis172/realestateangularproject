import { Resena } from './Resena';

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  available: boolean;
  price: number;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  resenas: Resena[];
}
