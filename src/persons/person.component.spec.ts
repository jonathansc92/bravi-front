import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [PersonComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bravi-front'`, () => {
    const fixture = TestBed.createComponent(PersonComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bravi-front');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PersonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('bravi-front app is running!');
  });
});
