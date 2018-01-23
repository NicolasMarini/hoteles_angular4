export class Hotel {
    
    constructor(
        public nombre:string,
        public descripcion:string,
        public condiciones:Array<string>,
        public comodidades:Array<string>,
        public comentarios:Array<string>,
        public cantHabitaciones:number,
        public cantPersonas:number,
        public fotos:Array<string>,
    ){}
}