import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefregerationComponent } from './refregeration.component';

describe('RefregerationComponent', () => {
  let component: RefregerationComponent;
  let fixture: ComponentFixture<RefregerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefregerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefregerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
