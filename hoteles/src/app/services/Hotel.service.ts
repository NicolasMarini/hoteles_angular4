import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript"



import { Hotel } from '../models/Hotel';

@Injectable()
export class HotelService {
    
	public url: string;

    constructor(private http: HttpClient){
        //this.url = 'https://jsonplaceholder.typicode.com/posts'
        this.url = 'http://localhost:3000/'
    }
    
    getHoteles() {
        /*let hoteles = [
            new Hotel('Hotel Madero', null, null, null, null, null, null, null),
            new Hotel('Hilton Hotel', null, null, null, null, null, null, null),
            new Hotel('Hotel Muerdago', null, null, null, null, null, null, null)
        ];

        return hoteles;
        */

        // Choose your settings
        // Check the detailed reference in the chapter "JsonConvert class properties and methods"
        let jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

        



        let hoteles: Array<Hotel> = [];

        this.http.get(this.url + "hoteles/all").subscribe(
            result => {

                console.log(result);
                // Map to the hotel class
                let hotel: Array<Hotel>;
                try {
                    hotel = jsonConvert.deserialize(result, Hotel);
                    console.table(hotel);
                } catch (e) {
                    console.log((<Error>e));
                }
            },
            error => {
                console.log('ERROR');
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
    }

    getPosts() {
    	return this.http.get(this.url);
    }
    
}
