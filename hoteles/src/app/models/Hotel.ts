import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Hotel {
    
    @JsonProperty("nombre", String)
    nombre:string = undefined;

    @JsonProperty("descripcion", String)
    descripcion: string = undefined;

    @JsonProperty("condiciones", [String])
    condiciones: Array<string> = undefined;

    @JsonProperty("comodidades", [String])
    comodidades: Array<string> = undefined;

    @JsonProperty("comentarios", [String])
    comentarios: Array<string> = undefined;

    @JsonProperty("cantHabitaciones", Number)
    cantHabitaciones: number = undefined;

    @JsonProperty("cantPersonas", Number)
    cantPersonas: number = undefined;

    @JsonProperty("fotos", [String])
    fotos: Array<string> = undefined;

    /*
    constructor(
        @JsonProperty("nombre", String)
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
    */
}