function binarySearch(nums, target){
    let left = 0;
    let right = nums.length-1

    while(left<=right){
        const mid = Math.round((left+right)/2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] > target){
            right = mid-1
        }else{
            left = mid+1
        }
    }

    return -1
    
}


const nums = [1,2,3,4,5,6,7,8,9,10]
const target = 8

console.log(binarySearch(nums,target))
