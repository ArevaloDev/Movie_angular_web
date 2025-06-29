import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImageComponent } from './no-image.component';

describe('NoImageComponent', () => {
  let component: NoImageComponent;
  let fixture: ComponentFixture<NoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
