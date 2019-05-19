import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  myform: FormGroup;
  debugData: any;
  foodSub: Subscription;
  stationerySub: Subscription
  stationeryValChngSub: Subscription
  foodValChngSub: Subscription

  constructor(private dataService: DataService) { }

  ngOnInit() {

    // debug purpose - display form json data on page
    this.debugData = this.dataService.getFormData();

    this.myform = new FormGroup({
      stationery: new FormControl('', [Validators.min(10), Validators.max(1000), Validators.pattern("^[0-9]*$")]),
      food: new FormControl('', [Validators.min(10), Validators.max(1000), Validators.pattern("^[0-9]*$")])
    }
      , { updateOn: 'blur' }
    );




    this.foodSub = this.dataService.fetchData('food')
      .subscribe(val => this.myform.patchValue({ food: val }))

    this.stationerySub = this.dataService.fetchData('stationery')
      .subscribe(val => this.myform.patchValue({ stationery: val }))


    this.onChanges()
  }

  onChanges(): void {
    this.stationeryValChngSub = this.myform.get('stationery').valueChanges
      .subscribe(stationeryVal => this.dataService.updateJsonData(stationeryVal, 'stationery'));

    this.foodValChngSub = this.myform.get('food').valueChanges
      .subscribe(foodVal => this.dataService.updateJsonData(foodVal, 'food')
      );



  }



  ngOnDestroy() {
    this.foodSub.unsubscribe();
    this.stationerySub.unsubscribe();
    this.stationeryValChngSub.unsubscribe();
    this.foodValChngSub.unsubscribe();
  }
}
