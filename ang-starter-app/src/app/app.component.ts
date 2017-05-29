import { Component, Input } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';

import {GalleriaModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    message: string;
    cars: SelectItem[];
    images: any[];

    constructor() {
        this.cars = [];
        this.cars.push({label: 'Audi', value: 'Audi'});
        this.cars.push({label: 'BMW', value: 'BMW'});
        this.cars.push({label: 'Fiat', value: 'Fiat'});
        this.cars.push({label: 'Ford', value: 'Ford'});
        this.cars.push({label: 'Honda', value: 'Honda'});
        this.cars.push({label: 'Jaguar', value: 'Jaguar'});
        this.cars.push({label: 'Mercedes', value: 'Mercedes'});
        this.cars.push({label: 'Renault', value: 'Renault'});
        this.cars.push({label: 'VW', value: 'VW'});
        this.cars.push({label: 'Volvo', value: 'Volvo'});
    }

    ngOnInit() {
    this.images = [];
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria1.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria2.jpg', alt: 'Description for Image 2', title: 'Title 2'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria3.jpg', alt: 'Description for Image 3', title: 'Title 3'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria4.jpg', alt: 'Description for Image 4', title: 'Title 4'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria5.jpg', alt: 'Description for Image 5', title: 'Title 5'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria6.jpg', alt: 'Description for Image 6', title: 'Title 6'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria7.jpg', alt: 'Description for Image 7', title: 'Title 7'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria8.jpg', alt: 'Description for Image 8', title: 'Title 8'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria9.jpg', alt: 'Description for Image 9', title: 'Title 9'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria10.jpg', alt: 'Description for Image 10', title: 'Title 10'});
    this.images.push({source: 'showcase/resources/demo/images/galleria/galleria12.jpg', alt: 'Description for Image 12', title: 'Title 12'});
    }
}
