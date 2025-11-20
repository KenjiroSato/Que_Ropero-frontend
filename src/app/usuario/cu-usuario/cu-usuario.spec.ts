import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuUsuario } from './cu-usuario';

describe('CuUsuario', () => {
  let component: CuUsuario;
  let fixture: ComponentFixture<CuUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
