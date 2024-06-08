import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponentComponent } from './entry-component.component';

describe('EntryComponentComponent', () => {
  let component: EntryComponentComponent;
  let fixture: ComponentFixture<EntryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryComponentComponent]
    });
    fixture = TestBed.createComponent(EntryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
