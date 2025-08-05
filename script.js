function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>a-b);
	let closest = arr[0]+arr[1]+arr[2];
	let n = arr.length;
	for(let i=0;i<n-2;i++){
		let left=i+1;
		let right=n-1;
		while(left<right){
			let sum=arr[i]+arr[left]+arr[right];
			if(Math.abs(sum-target)<Math.abs(closest-target)){
				closest=sum;
			}
			if(sum<target){
				left++;
			}else{
				right--;
			}
		}
	}
	return closest;
  
}

module.exports = threeSum;
