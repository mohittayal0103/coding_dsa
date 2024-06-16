var nextGreaterElement = function(nums2) {
    const v = [];
    const s = [];
    for(let i = nums2.length-1; i >= 0; i++){
        if(s.length == 0){
            v.push(-1);
        }
        else if(s.length > 0 && s.top() > nums2[i]){
            v.push(s.top());
        }
        else if(s.length > 0 && s.top() < nums2[i]){
            while(s.length > 0 && s.top() <= nums2[i]){
                s.pop();
            }
            if(s.length == 0){
                v.push(-1);
            }
            else{
                v.push(s.top());
            }
        }
        s.push(nums2[i]);
    } 
    console.log(v);
};

nextGreaterElement([[1,3,4,2,3,6]])

// //right
// [1,3,4,2,3,6]
// [6]
// [-1,6,3,6,4,3]
// [3,4,6,3,6,-1]