import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { coffeeData } from '../../mocked/coffee-data.mock';
import { CommonModule } from '@angular/common';
import { bakeryData } from '../../mocked/bakery-data.mock';
import { coffeeBagsData } from '../../mocked/coffee-bags-data.mock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coffees: MenuItem[] = [];
  bakeries: MenuItem[] = [];
  bags: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.coffees = coffeeData;
    this.bakeries = bakeryData;
    this.bags = coffeeBagsData;
  }
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('bakerySliderTrack') bakerySliderTrack!: ElementRef;
  @ViewChild('bagsSliderTrack') bagsSliderTrack!: ElementRef;

  scrollLeft() {
    this.sliderTrack.nativeElement.scrollBy({ left: -280, behavior:'smooth'});
  }

  scrollRight(){
    this.sliderTrack.nativeElement.scrollBy({ left: 280, behavior:'smooth'});
  }
  scrollBakeryLeft() {
    this.bakerySliderTrack.nativeElement.scrollBy({ left: -280, behavior: 'smooth' });
  }
  
  scrollBakeryRight() {
    this.bakerySliderTrack.nativeElement.scrollBy({ left: 280, behavior: 'smooth' });
  }

  scrollBagsLeft() {
    this.bagsSliderTrack.nativeElement.scrollBy({ left: -280, behavior: 'smooth' });
  }
  
  scrollBagsRight() {
    this.bagsSliderTrack.nativeElement.scrollBy({ left: 280, behavior: 'smooth' });
  }
  goToMenu(){
    this.router.navigate(['/menu']);
  }
}
