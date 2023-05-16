import { BarraNavegacionComponent } from './barra-navegacion.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('BarraNavegacionComponent', () => {
  let component: BarraNavegacionComponent;
  let fixture: ComponentFixture<BarraNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
