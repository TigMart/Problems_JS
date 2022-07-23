var searchRange = function (nums, target) {
  let firstIndex = 0;
  let lastIndex = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target) {
      firstIndex = i;
      break;
    }
  }
  for (let j = nums.length - 1; j > 0; --j) {
    if (nums[j] === target) {
      lastIndex = j;
      break;
    }
  }
  //   console.log(firstIndex, lastIndex);
};

// searchRange([1, 2, 3, 4, 4, 5, 5, 6], 5);

function foo(nums, target) {
  let index = nums.indexOf(target);
  if (index > -1) {
    let start = index;
    let end = index;
    while (nums[index] === nums[index + 1]) {
      end++;
      index++;
    }
    return [start, end];
  }
  return [-1, -1];
}
// console.log(foo([1], 1));

function bar(nums, target) {
  let firstIndex = -1;
  let lastIndex = -1;
  if (nums.length === 0) return [firstIndex, lastIndex];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      firstIndex = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      lastIndex = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [firstIndex, lastIndex];
}

console.log(bar([1, 2, 3, 4, 5, 5, 6], 5));
