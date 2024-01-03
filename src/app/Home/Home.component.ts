import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  car={
    carType:"",
    numberofCar:0,
    insurance:"",
    totalprice:0
  }
  bus={
    bustype:"",
    departureCity:"",
    insurance:"",
    numberOfSeats:"",
    destinationCity:"",
    departureDate:"",
    totalprice:""
  }
  flight={
    flightType:"",
    numberOfTickets:0,
    destinationCity:"",
    departureCity:"",
    departureDate:"",
    totalPrice:0



  }
  hotel={
    roomType:"",
    numberofRoom:0,
    numberOfAdults:0,
    numberOfChildren:0,
    restaurantFacilities:"",
    totalprice:0
  }
  roomprice :any={
    standard:1000,
    deluxe:1500,
    suite:2000,
  }
  busprice: any={
    standard:30000,
    deluxe:40000,
    sleeper:50000,
  }
  carprice:any={
    sedan:2500,
    Suv:3500,
    hatchback:5000
  }
  flightPrice:any={
    economy:10000,
    business:20000,
    firstClass:30000
  }
  hoteltotalPriceCalculate() {
    let roomPrice:any
    if(this.hotel.roomType in this.roomprice)
    {
      roomPrice=this.roomprice[this.hotel.roomType]
    }
    this.hotel.totalprice=roomPrice*this.hotel.numberofRoom
  }
  cartotalPriceCalculate() {
    let carPrice:any
    if(this.car.carType in this.carprice)
    {
      carPrice=this.carprice[this.car.carType]
    }
    this.car.totalprice=carPrice*this.car.numberofCar
  }
  bustotalPriceCalculate() {
    let busPrice:any
    if(this.bus.bustype in this.busprice)
    {
      this.bus.totalprice=this.busprice[this.bus.bustype]
    }
  }
  flighttotalPriceCalculate(){
    let flightprice:any
    if(this.flight.flightType in this.flightPrice)
    {
      flightprice=this.flightPrice[this.flight.flightType]
    }
    this.flight.totalPrice=flightprice*this.flight.numberOfTickets

  }
  hotelBooking()
  {
    alert("Your Booking was successful")
  }
  flightBooking()
  {
    alert("Your Booking was Successful")
  }
  busBooking()
  {
    alert("Your Booking was successful")
  }
  carBooking()
  {
    alert("Your Booking was successful")
  }
  Hotel=false
  Car=false
  Bus=false
  Flight=false
  bookHotel()
  {
    this.Hotel=true
    this.Car=false
    this.Bus=false
    this.Flight=false
  }
  bookCar()
  {
    this.Hotel=false
    this.Car=true
    this.Bus=false
    this.Flight=false

  }
  bookBus()
  {
    this.Hotel=false
    this.Car=false
    this.Bus=true
    this.Flight=false
  }
  bookFlight()
  {
    this.Hotel=false
    this.Car=false
    this.Bus=false
    this.Flight=true

  }


}
