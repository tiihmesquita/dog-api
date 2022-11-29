import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogServiceService } from '../dog-service.service';
@Component({
  selector: 'app-dog-component',
  templateUrl: './dog-component.component.html',
  styleUrls: ['./dog-component.component.css']
})
export class DogComponentComponent implements OnInit {

  dog ?: Dog;
  constructor(private dogService: DogServiceService) { 

  }

  ngOnInit(): void {
    this.getDog();
  }
  getDog(){
    this.dogService.getDog()
      .subscribe(dog => this.dog = dog)
  }

}
