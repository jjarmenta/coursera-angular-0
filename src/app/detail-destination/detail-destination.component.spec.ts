import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDestinationComponent } from './detail-destination.component';

describe('DetailDestinationComponent', () => {
  let component: DetailDestinationComponent;
  let fixture: ComponentFixture<DetailDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDestinationComponent]
    });
    fixture = TestBed.createComponent(DetailDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
