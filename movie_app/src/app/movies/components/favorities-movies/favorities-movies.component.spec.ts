import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritiesMoviesComponent } from './favorities-movies.component';

describe('FavoritiesMoviesComponent', () => {
  let component: FavoritiesMoviesComponent;
  let fixture: ComponentFixture<FavoritiesMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritiesMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritiesMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
