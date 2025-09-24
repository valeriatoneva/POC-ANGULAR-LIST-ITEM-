import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  imports: [IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    protected stateService: StateService,
    private router: Router,
  ) {}


  public clickListItem(): void {
    this.stateService.listSelectedItem.next('1');
    this.router.navigate(['/categories']);
  }

  public clickListItem1(): void {
    this.stateService.listSelectedItem.next('2');
    this.router.navigate(['/products']);
  }
}
