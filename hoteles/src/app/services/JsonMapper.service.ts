import { Injectable } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import {Observable} from 'rxjs/Observable';


import { Hotel } from '../models/Hotel';

@Injectable()
export class JsonMapper {

    static operationMode = OperationMode.LOGGING;
    static ignorePrimitiveChecks = false;
    static valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    jsonConvert: JsonConvert = new JsonConvert();


    constructor() {
        this.jsonConvert.operationMode = JsonMapper.operationMode; // print some debug data
        this.jsonConvert.ignorePrimitiveChecks = JsonMapper.ignorePrimitiveChecks; // don't allow assigning number to string etc.
        this.jsonConvert.valueCheckingMode = JsonMapper.valueCheckingMode; // never allow null
    }

    deserialize(objJson: any, clase: any ): any {
        try {
            return this.jsonConvert.deserialize(objJson, clase);
        } catch (e) {
            console.log((<Error>e));
        }
    }

}
