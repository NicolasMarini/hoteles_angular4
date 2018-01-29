import { Injectable } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript"



import { Hotel } from '../models/Hotel';

@Injectable()
export class JsonMapper {


    jsonConvert: JsonConvert = new JsonConvert();

    static operationMode = OperationMode.LOGGING;
    static ignorePrimitiveChecks = false;
    static valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    configure() {
        this.jsonConvert.operationMode = JsonMapper.operationMode; // print some debug data
        this.jsonConvert.ignorePrimitiveChecks = JsonMapper.ignorePrimitiveChecks; // don't allow assigning number to string etc.
        this.jsonConvert.valueCheckingMode = JsonMapper.valueCheckingMode; // never allow null
    }

    deserialize(): any {
        this.configure();
    }
    


}