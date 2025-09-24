import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildViewComponent } from './home-child-view.component';

describe('HomeChildViewComponent', () => {
  let component: HomeChildViewComponent;
  let fixture: ComponentFixture<HomeChildViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChildViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
