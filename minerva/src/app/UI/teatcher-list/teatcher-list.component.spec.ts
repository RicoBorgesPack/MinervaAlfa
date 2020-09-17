import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatcherListComponent } from './teatcher-list.component';

describe('TeatcherListComponent', () => {
  let component: TeatcherListComponent;
  let fixture: ComponentFixture<TeatcherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatcherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatcherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
