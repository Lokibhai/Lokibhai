// var arr = [10,3,5,3];
// var arr1 = new Array();
// var x = 1;

// var j = 1;
// for(var i = 0 ; i< arr.length; i++)
// {
//     for(var j = i + 1; j < arr.length; j++)
//     {
//         if((arr[i] !== arr[j] + 1)||(arr[i] !== arr[j] - 1)||(arr[i] !== arr[j])){
//             console.log(arr[i]);
//         }
//     }
// }
// for(var k = 0 ; k< arr.length-1; k++){
//     console.log(arr1);
// }



var findLonely = function(nums) {
    let lonely = [];
    let map = new Map();
    
    for(let i=0; i < nums.length;i++){
        if(map.has(nums[i])){
            // if(i==0){
            // console.log(map.get(nums[i]));
            map.set(nums[i], map.get(nums[i]+1));
        }else{
            map.set(nums[i],1);
        }
    }
    
    for(let [key, value] of map){
        // console.log(key-1);
        // console.log(value);
        if(value==1 && !(map.has(key+1)) && !(map.has(key-1))){
            // console.log(value);
            lonely.push(key);
        }
    }
    return lonely;
};
var nums = [10,2,5,2,8];
console.log(findLonely(nums));