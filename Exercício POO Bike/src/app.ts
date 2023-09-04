import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
// import crypto from "crypto";


export class App{
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    addUser(user: User): void{
        if(this.users.some(Ruser =>{return Ruser.email === user.email})){
            throw new Error('User email already exist!')
        }
        this.users.push(user)
    }


    registerBike(bike: Bike): void{
        if(this.bikes.some(Rbike => {return Rbike.id === bike.id})){
            throw new Error('Bike already exist')
        }
        this.bikes.push(bike)
    }

    removeUser(email: string){
        
        if(this.users.findIndex(Ruser => Ruser.email === email)){
            let toRemove = this.users.findIndex(user => user.email == email)
            this.users.splice(toRemove, 1)
        }            
    }

    rentBike(bike: Bike, email: string, startDate: Date, endDate: Date){

        if(bike == undefined){
            throw new Error('This bike is undefined')
        }
        
        let Ruser = this.users.find(Uuser => Uuser.email === email)
        if(Ruser == undefined){
            throw new Error ('User does not exist')
        }
        
        let bikeVet = this.rents.filter(Rrent => Rrent.bike === bike)
        let createRent = Rent.create(bikeVet, bike, Ruser, startDate, endDate)

        this.rents.push(createRent)

    }

    returnBike(bike: Bike, dateReturn: Date){

        let contractBike = this.rents.find(Rbike => Rbike.bike == bike)

        if(contractBike == undefined){
            throw new Error('Bike is not rent')
        }
        contractBike.dateReturned = dateReturn
    }
            
}