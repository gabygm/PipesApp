import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsPagesComponent } from './basics-pages.component';

describe('BasicsPagesComponent', () => {
  let component: BasicsPagesComponent;
  let fixture: ComponentFixture<BasicsPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicsPagesComponent]
    });
    fixture = TestBed.createComponent(BasicsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
