import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPage } from './summary-page';

describe('SummaryPage', () => {
  let component: SummaryPage;
  let fixture: ComponentFixture<SummaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
