import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  listPorcent: Array<number> = [
    1.05,
    1.1,
    1.15,
    1.2,
    1.25,
    1.3,
    1.35,
    1.4,
    1.45,
    1.5,
    1.55,
    1.6,
    1.65,
    1.7,
    1.75,
    1.8,
    1.85,
    1.9,
    1.95,
    2

  ];

  listG: Array<number> = [
    0.05,
    0.1,
    0.15,
    0.2,
    0.25,
    0.3,
    0.35,
    0.4,
    0.45,
    0.5,
    0.55,
    0.6,
    0.65,
    0.7,
    0.75,
    0.8,
    0.85,
    0.9,
    0.95,
    1
  ]

  listPrice : any[] = [
    {
      "porcent" : '5%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '10%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '15%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '20%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '25%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '30%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    }
    ,
    {
      "porcent" : '35%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '40%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '45%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '50%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '55%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '60%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '65%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '70%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '75%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '80%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '85%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '90%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '95%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '100%',
      "price": 0,
      "gain": 0,
      "status": '',
      "is_optimum": ''
    }
  ]
  newPrice: any;
  price1: number = 0;
  price2: number = 0;
  status!: boolean; 
  priceFinal: number = 0;
  priceSub: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
 
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      precio1: 0,
      precio2: 0
    })
  }

  optimal(event: Event){
    event.preventDefault();
    var data = this.listPrice.values.toString
    console.log(data)
    this.newPrice = this.form.value
    this.price1 = this.newPrice.precio1;
    this.price2 = this.newPrice.precio2;
    for (let index = 0; index < this.listPorcent.length; index++) {
       this.priceSub  = this.price1 * this.listG[index]
       this.priceFinal = this.price1 * this.listPorcent[index];
       this.listPrice[index].price = this.priceFinal
       this.listPrice[index].gain = this.priceSub
        if (this.priceFinal <= this.price2) {
         this.status = true
         var statusString = 'Optimo'
         this.listPrice[index].status = statusString
         this.listPrice[index].is_optimum = this.status
         
        } else {
          this.status= false
          var statusString = 'No Optimo'
          this.listPrice[index].status = statusString
          this.listPrice[index].is_optimum = this.status
       } 
    }
  }

  

}
