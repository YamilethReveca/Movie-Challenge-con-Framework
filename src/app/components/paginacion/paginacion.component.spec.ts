import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginacionComponent } from './paginacion.component';

describe('PaginacionComponent', () => {
  let component: PaginacionComponent;
  let fixture: ComponentFixture<PaginacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear', () => {
    expect(component).toBeTruthy();
  });

  it('debería emitir el evento pageChange en anterior', () => {
    // Mock the event emitter
    spyOn(component.pageChange, 'emit');

    // Set current page to 2
    component.currentPage = 2;

    // Call the anterior method
    component.anterior();

    // Expect that the pageChange event was emitted with the correct value
    expect(component.pageChange.emit).toHaveBeenCalledWith(1);
  });

  it('debería emitir el evento pageChange en siguiente', () => {
    // Mock the event emitter
    spyOn(component.pageChange, 'emit');

    // Set current page to 2 and total pages to 5
    component.currentPage = 2;
    component.totalPages = 5;

    // Call the siguiente method
    component.siguiente();

    // Expect that the pageChange event was emitted with the correct value
    expect(component.pageChange.emit).toHaveBeenCalledWith(3);
  });

  it('debería emitir el evento pageChange en cambioPagina', () => {
    // Mock the event emitter
    spyOn(component.pageChange, 'emit');

    // Call the cambioPagina method with a new page value of 3
    component.cambioPagina(3);

    // Expect that the pageChange event was emitted with the correct value
    expect(component.pageChange.emit).toHaveBeenCalledWith(3);
  });

});
