import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


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


	@Output() hoteles: Array<Hotel>;

	ngOnInit(){
		/*this.hotelService.getPosts().subscribe(
			result => {
				console.log(result);
			},
			error => {
			console.log('ERROR');
				var errorMessage = <any> error;
				console.log(errorMessage);
			}
		)*/
		this.hotelService.getHoteles();
	}

}
