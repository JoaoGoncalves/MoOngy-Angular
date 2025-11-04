import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesList } from './candidates-list';

describe('CandidatesList', () => {
  let component: CandidatesList;
  let fixture: ComponentFixture<CandidatesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
