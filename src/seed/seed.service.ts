import { BrandsService } from './../brands/brands.service';
import { CarsService } from './../cars/cars.service';
import { Injectable } from '@nestjs/common';
import { CARS_SEDD } from './data/cars.seed';
import { BRANDS_SEDD } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService:CarsService,
    private readonly brandsService:BrandsService
  ){}

  populateDB(){

    this.carsService.fillCarsWithSeedData(CARS_SEDD);
    this.brandsService.fillCarsWithSeedData(BRANDS_SEDD);
    return "Seed executed";
  }
}
