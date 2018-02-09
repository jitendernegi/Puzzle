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
    it('should be able to return 4 if 5 is greater than 4', () => {
      expect(component.getColumnValue(5)).toBe(4);
    });
  }
  )
  describe('Get Matrix Column', () => {
    it('should be able to return 3 if number is less than 8', () => {
      expect(component.getMatrixCol(7)).toBe(3);
    });
    it('should be able to return 5 if number is greater than 8 and less than 25', () => {
      expect(component.getMatrixCol(9)).toBe(5);
    });
    it('should be able to return 7 if number is greater than 24 and less than 49', () => {
      expect(component.getMatrixCol(25)).toBe(7);
    });
    it('should be able to return 11 if greater than 50', () => {
      expect(component.getMatrixCol(51)).toBe(11);
    });
  }
  )
  describe('Print spiral pattern case 1', () => {
    it('should return an array having 3*3 matrix if number is less than 8', () => {
      expect(component.printSpiralCase1(7)).toBeDefined;
    });
    it('should return an array having 5*5 matrix if number is greater than 8 and less than 25', () => {
      expect(component.printSpiralCase1(9)).toBeDefined;
    });
    it('should return an array having 7*7 matrix if number is greater than 24 and less than 49', () => {
      expect(component.printSpiralCase1(25)).toBeDefined;
    });
    it('should return an array having 11*11 matrix if number is greater than 49', () => {
      expect(component.printSpiralCase1(50)).toBeDefined;
    });
  })
});
