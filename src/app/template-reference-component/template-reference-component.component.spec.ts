import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceComponentComponent } from './template-reference-component.component';

describe('TemplateReferenceComponentComponent', () => {
  let component: TemplateReferenceComponentComponent;
  let fixture: ComponentFixture<TemplateReferenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReferenceComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateReferenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
