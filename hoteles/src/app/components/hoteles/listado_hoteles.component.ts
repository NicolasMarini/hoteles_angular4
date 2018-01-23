import { Component } from '@angular/core';
import { HotelService } from '../../services/Hotel.service';
import { Hotel } from '../../models/Hotel';

@Component({
  selector: 'listado-hoteles',
  templateUrl: './listado_hoteles.component.html',
  providers: [HotelService]
})


export class ListadoHotelesComponent {
  title = 'LISTADO DE HOTELES';

    constructor(
        private hotelService: HotelService
    ){}


  public hoteles: Array<Hotel> = this.hotelService.getHoteles();
}
