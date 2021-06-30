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
    1.3
  ];

  listPrice : any[] = [
    {
      "porcent" : '5%',
      "price": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '10%',
      "price": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '15%',
      "price": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '20%',
      "price": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '25%',
      "price": 0,
      "status": '',
      "is_optimum": ''
    },
    {
      "porcent" : '30%',
      "price": 0,
      "status": '',
      "is_optimum": ''
    }
  ]
  newPrice: any;
  price1: number = 0;
  price2: number = 0;
  status!: boolean; 
  res: number = 0;
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
       this.res = this.price1 * this.listPorcent[index];
       this.listPrice[index].price = this.res
        if (this.res <= this.price2) {
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
