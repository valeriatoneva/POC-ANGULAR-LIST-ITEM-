import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home-child-view',
  imports: [],
  templateUrl: './home-child-view.component.html',
  styleUrls: ['./home-child-view.component.scss']
})
export class HomeChildViewComponent {
  constructor(
    protected stateService: StateService,
  ) {}
}
