export interface PlaceDetails {
    id: string;
    services: string[];
    name?: string;
    address?: string;
    openingHours?: string;
    photos?: string[];
    location?: {
        lat: number;
        lng: number;
    }
}