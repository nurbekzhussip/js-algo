function swap(indx1, indx2, arr) {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(j, j + 1, nums);
      }
    }
  }

  return nums;
}

console.log(bubbleSort([5, 2, 7, 3, 4, 1, 9, 0, 8, 6, 10]));

//Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2).
