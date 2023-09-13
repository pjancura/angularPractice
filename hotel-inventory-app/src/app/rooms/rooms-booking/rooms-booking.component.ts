import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hotelInv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {
  id: number = 0;

  // id$ !: Observable<number>;

  // this 'id' is referencing the path to rooms-booking
  // ex: /rooms/8      id = 8 in this case
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')))

  constructor (private router: ActivatedRoute) {}

  ngOnInit(): void {
    // snapshot will not receive a new value once the view is loaded
    // this.id = this.router.snapshot.params['id'];

    // this.id$ = this.router.params.pipe(
    //   map(params => params['id'])
    // )

    // subscriptions can lead to data leakage
    // this.router.params.subscribe((params) => {this.id = params['id']})
  }
}
