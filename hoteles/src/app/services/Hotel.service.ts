import {Injectable} from '@angular/core';
import {Hotel} from '../models/Hotel';

@Injectable()
export class HotelService {
    constructor(){}
    
    getHoteles() {
        let hoteles = [
            new Hotel('Hotel Madero', null, null, null, null, null, null, null),
            new Hotel('Hilton Hotel', null, null, null, null, null, null, null),
            new Hotel('Hotel Muerdago', null, null, null, null, null, null, null)
        ];

        return hoteles;
    }
    
}
