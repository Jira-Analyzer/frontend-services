import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojComponent } from './myproj.component';

describe('MyprojComponent', () => {
  let component: MyprojComponent;
  let fixture: ComponentFixture<MyprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprojComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
