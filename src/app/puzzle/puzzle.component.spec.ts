import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PuzzleComponent } from './puzzle.component';

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;
  let result;

  beforeEach(() => {
    component = new PuzzleComponent();
  });

  afterEach(() => {
    localStorage.removeItem('token');
    component = null;
  });

  it('should defined component', () => {
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
  describe('Print spiral pattern case 1 for left direction', () => {
    it('should return an array having length 3 if number is less than 8', () => {
      result = component.printSpiralCase1(7);
      expect(result[0].length).toBe(3);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(7);
      expect(result[0][2]).toBe(6);      
    });
    it('should return an array having length 5 matrix if number is greater than 8 and less than 25', () => {
      result = component.printSpiralCase1(9);
      expect(result[0].length).toBe(5);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(-1);
      expect(result[0][2]).toBe(-1);   
      expect(result[0][3]).toBe(-1);   
      expect(result[0][4]).toBe(-1);   
    });
    it('should return an array having length 7 matrix if number is greater than 24 and less than 49', () => {
      result = component.printSpiralCase1(25);
      expect(result[0].length).toBe(7);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(-1);
      expect(result[0][2]).toBe(-1);   
      expect(result[0][3]).toBe(-1);   
      expect(result[0][4]).toBe(-1); 
      expect(result[0][5]).toBe(-1); 
      expect(result[0][6]).toBe(-1); 
    });
    it('should return an array having length 11 matrix if number is greater than or equal to 49', () => {
      result = component.printSpiralCase1(50);
      expect(result[0].length).toBe(11);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(-1);
      expect(result[0][2]).toBe(-1);   
      expect(result[0][3]).toBe(-1);   
      expect(result[0][4]).toBe(-1); 
      expect(result[0][5]).toBe(-1); 
      expect(result[0][6]).toBe(-1); 
      expect(result[0][7]).toBe(-1);
      expect(result[0][8]).toBe(-1);
      expect(result[0][9]).toBe(-1);   
      expect(result[0][10]).toBe(-1);   
    });
  })
  describe('Print spiral pattern case 1 for right direction', () => {
    it('should return an array having length 3 if number is less than 8', () => {
      result = component.printSpiralCase1(7);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(3);
      expect(this.matrix[0][0]).toBe(6);
      expect(this.matrix[0][1]).toBe(7);
      expect(this.matrix[0][2]).toBe(-1);      
    });
    it('should return an array having length 5 matrix if number is greater than 8 and less than 25', () => {
      result = component.printSpiralCase1(9);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(5);
      expect(this.matrix[0][0]).toBe(-1);
      expect(this.matrix[0][1]).toBe(-1);
      expect(this.matrix[0][2]).toBe(-1);   
      expect(this.matrix[0][3]).toBe(-1);   
      expect(this.matrix[0][4]).toBe(-1);   
    });
    it('should return an array having length 7 matrix if number is greater than 24 and less than 49', () => {
      result = component.printSpiralCase1(25);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(7);
      expect(this.matrix[0][0]).toBe(-1);
      expect(this.matrix[0][1]).toBe(-1);
      expect(this.matrix[0][2]).toBe(-1);   
      expect(this.matrix[0][3]).toBe(-1);   
      expect(this.matrix[0][4]).toBe(-1); 
      expect(this.matrix[0][5]).toBe(-1); 
      expect(this.matrix[0][6]).toBe(-1); 
    });
    it('should return an array having length 11 matrix if number is greater than or equal to 49', () => {
      result = component.printSpiralCase1(50);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(11);
      expect(this.matrix[0][0]).toBe(-1);
      expect(this.matrix[0][1]).toBe(-1);
      expect(this.matrix[0][2]).toBe(-1);   
      expect(this.matrix[0][3]).toBe(-1);   
      expect(this.matrix[0][4]).toBe(-1); 
      expect(this.matrix[0][5]).toBe(-1); 
      expect(this.matrix[0][6]).toBe(-1); 
      expect(this.matrix[0][7]).toBe(-1);
      expect(this.matrix[0][8]).toBe(-1);
      expect(this.matrix[0][9]).toBe(-1);   
      expect(this.matrix[0][10]).toBe(-1);   
    });
  })
  describe('Print spiral pattern case 2 for left direction', () => {
    it('should return an array having length 3 if number is less than 8', () => {
      result = component.printSpiralCase2(7);
      expect(result[0].length).toBe(3);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(7);
      expect(result[0][2]).toBe(6);      
    });
    it('should return an array having length 5 matrix if number is greater than 8 and less than 25', () => {
      result = component.printSpiralCase2(9);
      expect(result[0].length).toBe(5);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(-1);
      expect(result[0][2]).toBe(-1);   
      expect(result[0][3]).toBe(-1);   
      expect(result[0][4]).toBe(-1);   
    });
    it('should return an array having length 7 matrix if number is greater than 24 and less than 49', () => {
      result = component.printSpiralCase2(25);
      expect(result[0].length).toBe(7);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(-1);
      expect(result[0][2]).toBe(-1);   
      expect(result[0][3]).toBe(-1);   
      expect(result[0][4]).toBe(-1); 
      expect(result[0][5]).toBe(-1); 
      expect(result[0][6]).toBe(-1); 
    });
    it('should return an array having length 11 matrix if number is greater than or equal to 49', () => {
      result = component.printSpiralCase2(50);
      expect(result[0].length).toBe(11);
      expect(result[0][0]).toBe(-1);
      expect(result[0][1]).toBe(-1);
      expect(result[0][2]).toBe(-1);   
      expect(result[0][3]).toBe(-1);   
      expect(result[0][4]).toBe(-1); 
      expect(result[0][5]).toBe(-1); 
      expect(result[0][6]).toBe(-1); 
      expect(result[0][7]).toBe(-1);
      expect(result[0][8]).toBe(-1);
      expect(result[0][9]).toBe(-1);   
      expect(result[0][10]).toBe(-1);   
    });
  })
  describe('Print spiral pattern case 2 for right direction', () => {
    it('should return an array having length 3 if number is less than 8', () => {
      result = component.printSpiralCase2(7);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(3);
      expect(this.matrix[0][0]).toBe(6);
      expect(this.matrix[0][1]).toBe(7);
      expect(this.matrix[0][2]).toBe(-1);      
    });
    it('should return an array having length 5 matrix if number is greater than 8 and less than 25', () => {
      result = component.printSpiralCase2(9);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(5);
      expect(this.matrix[0][0]).toBe(-1);
      expect(this.matrix[0][1]).toBe(-1);
      expect(this.matrix[0][2]).toBe(-1);   
      expect(this.matrix[0][3]).toBe(-1);   
      expect(this.matrix[0][4]).toBe(-1);   
    });
    it('should return an array having length 7 matrix if number is greater than 24 and less than 49', () => {
      result = component.printSpiralCase2(25);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(7);
      expect(this.matrix[0][0]).toBe(-1);
      expect(this.matrix[0][1]).toBe(-1);
      expect(this.matrix[0][2]).toBe(-1);   
      expect(this.matrix[0][3]).toBe(-1);   
      expect(this.matrix[0][4]).toBe(-1); 
      expect(this.matrix[0][5]).toBe(-1); 
      expect(this.matrix[0][6]).toBe(-1); 
    });
    it('should return an array having length 11 matrix if number is greater than or equal to 49', () => {
      result = component.printSpiralCase2(50);
      this.matrix = result;
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
      expect(result[0].length).toBe(11);
      expect(this.matrix[0][0]).toBe(-1);
      expect(this.matrix[0][1]).toBe(-1);
      expect(this.matrix[0][2]).toBe(-1);   
      expect(this.matrix[0][3]).toBe(-1);   
      expect(this.matrix[0][4]).toBe(-1); 
      expect(this.matrix[0][5]).toBe(-1); 
      expect(this.matrix[0][6]).toBe(-1); 
      expect(this.matrix[0][7]).toBe(-1);
      expect(this.matrix[0][8]).toBe(-1);
      expect(this.matrix[0][9]).toBe(-1);   
      expect(this.matrix[0][10]).toBe(-1);   
    });
  })
});
