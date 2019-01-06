import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressenComponent } from './adressen.component';

describe('AdressenComponent', () => {
  let component: AdressenComponent;
  let fixture: ComponentFixture<AdressenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
