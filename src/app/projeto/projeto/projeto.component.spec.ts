import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoComponent } from './projeto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjetoSerivce } from './projeto.service';

describe('ProjetoComponent', () => {
  let component: ProjetoComponent;
  let fixture: ComponentFixture<ProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProjetoSerivce],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
