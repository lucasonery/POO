export class Bike{
    constructor(
        public name:string,
        public type:string,
        public bodySize:number,
        public maxLoad:number,
        public rate:number,
        public id:number,
        public coords: number[] = [],
    ){}
}