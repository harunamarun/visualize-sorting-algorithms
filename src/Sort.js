class SortOfQuick {
  constructor(array) {
    this.array = array;
  }

  sort() {
    const recursionOfSort = (start = 0, end = this.array.length - 1) => {
      let left = start;
      let right = end;
      let pivot = this.array[start];

      while (right >= left) {
        while (this.array[left] < pivot) {
          left++;
        }
        while (pivot < this.array[right]) {
          right--;
        }
        if (right <= left) {
          break;
        }

        let temp = this.array[left];
        this.array[left] = this.array[right];
        this.array[right] = temp;
        left++;
        right--;
      }

      if (start < left - 1) {
        recursionOfSort(start, left - 1);
      }
      if (right + 1 < end) {
        recursionOfSort(right + 1, end);
      }
    };
    recursionOfSort();
    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SortOfQuick;
