import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PuzzleComponent } from './puzzle.component';

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;

  beforeEach(() => {
    component = new PuzzleComponent();
  });

  afterEach(() => {
    localStorage.removeItem('token');
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Get Min Value', () => {
    it('should be able to return minimum value from 5 and 6', () => {
      expect(component.getMinValue(5, 6)).toBe(5);
    });
  }
  )
  describe('Get Column Value', () => {
    beforeEach(() => {
      component.inputNumber = 4;
    });
    it('should be able to return -1 if 6 is greater than 4', () => {
      expect(component.getColumnValue(6)).toBe(-1);
    });
    it('should be able to return', () => {
      expect(component.getColumnValue(5)).toBe(4);
    });
    it('should create', () => {
      expect(component.getColumnValue(4)).toBe(3);
    });
  }
  )
  describe('Get Matrix Column', () => {
    it('should return 3 if number is less than 8', () => {
      expect(component.getMatrixCol(7)).toBe(3);
    });
    it('should return 5 if number is greater than 8 and less than 25', () => {
      expect(component.getMatrixCol(9)).toBe(5);
    });
    it('should return 7 if number is greater than 24 and less than 49', () => {
      expect(component.getMatrixCol(25)).toBe(7);
    });
    it('should return 11 if greater than 50', () => {
      expect(component.getMatrixCol(50)).toBe(11);
    });
  }
  )
  describe('Get Spiral', () => {
    beforeEach(() => {
      component.inputNumber = 1;
    });
    it('should return 3 if number is less than 8', () => {
      expect(component.getMatrixCol(7)).toBe(3);
    });
    it('should return 5 if number is greater than 8 and less than 25', () => {
      expect(component.getMatrixCol(9)).toBe(5);
    });
  }
  )
});
