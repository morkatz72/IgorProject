import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStunningGraphComponent } from './product-stunning-graph.component';

describe('ProductStunningGraphComponent', () => {
  let component: ProductStunningGraphComponent;
  let fixture: ComponentFixture<ProductStunningGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStunningGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStunningGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
