import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  @Input()
  page: number;

  @Output()
  previousPage: EventEmitter<number>;

  @Output()
  nextPage: EventEmitter<number>;
}
