/* Code Challenge #2
@Author Inoussa Mouiche
Waterloo, Dec 20, 2018
*/

function twoSum(Array, S) {
    var L = Array.length; // array length
    var count = 0, dict = {}, isValid ={};
    for(var i = 0; i < L; i++){
        if(typeof(isValid[S - Array[i]]) !== 'undefined'){
            dict[Array[isValid[S - Array[i]]-1]] = Array[i]
            count +=1;
        }
        
        isValid[Array[i]] = i + 1;
    }
    
    if (count /(1.*Array.length)>0){
       console.log('It is possible with the probability equals to :' + count/(1.*Array.length)) ;
       console.log('Those Numbers are ranged in key-value paires as follow')
    } else{
        console.log('It is not possible in this vector'); 
    }
    
    return dict  
};

console.log(twoSum([0,4,5,7,8,9,-2,11], 9));