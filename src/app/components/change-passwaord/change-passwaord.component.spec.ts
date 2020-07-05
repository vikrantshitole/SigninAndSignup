import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswaordComponent } from './change-passwaord.component';

describe('ChangePasswaordComponent', () => {
  let component: ChangePasswaordComponent;
  let fixture: ComponentFixture<ChangePasswaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
