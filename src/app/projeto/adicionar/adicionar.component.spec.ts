import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarComponent } from './adicionar.component';
import { ProjetoSerivce } from '../projeto/projeto.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdicionarComponent', () => {
  let component: AdicionarComponent;
  let fixture: ComponentFixture<AdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProjetoSerivce],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
