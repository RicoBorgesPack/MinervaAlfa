import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatcherComponent } from './teatcher.component';

describe('TeatcherComponent', () => {
  let component: TeatcherComponent;
  let fixture: ComponentFixture<TeatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
