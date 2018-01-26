import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Hotel {
    
    constructor(
        @JsonProperty("name", String)
        public nombre:string = undefined,

        @JsonProperty("descripcion", String)
        public descripcion: string = undefined,

        @JsonProperty("condiciones", [String])
        public condiciones: Array<string> = undefined,

        @JsonProperty("comodidades", [String])
        public comodidades: Array<string> = undefined,

        @JsonProperty("comentarios", [String])
        public comentarios: Array<string> = undefined,

        @JsonProperty("cantHabitaciones", Number)
        public cantHabitaciones: number = undefined,

        @JsonProperty("cantPersonas", Number)
        public cantPersonas: number = undefined,

        @JsonProperty("fotos", [String])
        public fotos: Array<string> = undefined,
    ){}
}