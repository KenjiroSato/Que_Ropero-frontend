import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuario } from './lista-usuario';

describe('ListaUsuario', () => {
  let component: ListaUsuario;
  let fixture: ComponentFixture<ListaUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
