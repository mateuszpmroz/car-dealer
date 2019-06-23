import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertListingComponent } from './advert-listing.component';

describe('AdvertListingComponent', () => {
  let component: AdvertListingComponent;
  let fixture: ComponentFixture<AdvertListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
