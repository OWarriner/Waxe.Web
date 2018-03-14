import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiongridComponent } from './collectiongrid.component';

describe('CollectiongridComponent', () => {
  let component: CollectiongridComponent;
  let fixture: ComponentFixture<CollectiongridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiongridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiongridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
