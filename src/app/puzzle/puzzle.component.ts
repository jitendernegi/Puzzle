import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
  selector: "[app-text-box],[app-drop-down]"
})
export class PuzzleComponent implements OnInit {
  matrix: any;
  input: number = 0;
  list: any = [
    { id: 0, name: 'left' },
    { id: 1, name: 'right' }
  ];
  methods: any = [
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' }
  ];
  direction = 0;
  method: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  getMinValue(i, j) {
    return i > j ? j : i;
  }
  getColumnValue(value) {
    value--;
    if (value > this.input) {
      value = -1;
    }
    return value;
  }
  getMatrixCol(n) {
    let p;
    if (n <= 8) {
      p = 3;
    } else if (n > 8 && n < 25) {
      p = 5;
    } else if (n > 24 && n < 49) {
      p = 7;
    } else {
      p = 11;
    }
    return p;
  }
  getSpiral(input) {
    if (this.method == 1) {
      this.printSpiralCase1(input);
    }
    else if (this.method == 2) {
      this.printSpiralCase2(input);
    }
  }
  getValue(row: number, column: number) {
    if (this.matrix[row]) {
      if (this.matrix[row][column]) {
        return this.matrix[row][column];
      }
    }
    return 0;
  }
  setValue(row: number, column: number, value: number) {
    value = this.getColumnValue(value);
    if (this.matrix[row]) {
      return this.matrix[row][column] = value;
    } else {
      this.matrix[row] = new Array();
      this.matrix[row][column] = value;
    }
  }

  // Logic 1 for printing Integer spiral

  printSpiralCase1(input) {
    this.matrix = [];
    let row: number = 0;
    let col: number = 0;
    let direction = "right";
    this.input = input;
    input = this.getMatrixCol(input);
    let maxLength = input * input;
    for (let i = maxLength; i > 0; i--) {
      if (direction == "right" && (col > input - 1 || this.getValue(row, col) != 0)) {
        direction = "down";
        col--;
        row++;
      }
      if (direction == "down" && (row > input - 1 || this.getValue(row, col) != 0)) {
        direction = "left";
        row--;
        col--;
      }
      if (direction == "left" && (col < 0 || this.getValue(row, col) != 0)) {
        direction = "up";
        col++;
        row--;
      }
      if (direction == "up" && row < 0 || this.getValue(row, col) != 0) {
        direction = "right";
        row++;
        col++;
      }
      this.setValue(row, col, i);
      if (direction == "right") {
        col++;
      }
      if (direction == "down") {
        row++;
      }
      if (direction == "left") {
        col--;
      }
      if (direction == "up") {
        row--;
      }
    }

    // If direction is Right

    if (this.direction == 1) {
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].reverse();
      }
    }
  }

  // Logic 2 for printing Integer spiral

  printSpiralCase2(input) {
    this.matrix = [];
    this.input = input;

    let length = this.getMatrixCol(this.input);
    for (let i = 0; i < length; i++) {
      let col: Array<any> = [];
      for (let j = 0; j < length; j++) {
        let x = this.getMinValue(this.getMinValue(i, j), this.getMinValue(length - 1 - i, length - 1 - j));
        if (i <= j) {
          col[j] = this.getColumnValue((length - 2 * x) * (length - 2 * x) - (i - x) - (j - x));
        }
        else {
          col[j] = this.getColumnValue((length - 2 * x - 2) * (length - 2 * x - 2) + (i - x) + (j - x));
        }
      }

      // If direction is Right

      if (this.direction == 1) {
        col.reverse();
      }
      this.matrix.push(col);
    }
  }
}


