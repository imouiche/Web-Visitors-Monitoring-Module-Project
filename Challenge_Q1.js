/* Code Challenge #1
@Author Inoussa Mouiche
Waterloo, Dec 19, 2018

*/

//let v = [1, 2, null, 1, 2, 2, null, 5, 1, null]
let v = [1, 5, null, 1, 2, 2, null, 3]
//let v = [1, 2, null, 1]

function IMW(v){
	var temp = [], list=[], m=v.length;
	for (let i=0; i<=m; i++){
		if (v[i] != null) {
			temp.push(v[i]);
		}
		else if ((v[i] == undefined && temp.length) || (v[i]==null && temp.length)) {
			var k=0;
			if (list.length) {
				for (let x of list){
					
					if (x.length >= temp.length){
						if (isSubsetOf(x, temp)){
							temp = [];
						}else if (temp.length){
							list.push(temp);
							temp = [];
						}
					}
					else {
						if (isSubsetOf(temp, x)){
							list.splice(k,1);
							list.push(temp);
							temp = [];
							k +=1;
						}else if (temp.length){
							list.push(temp);
							temp = [];
							k +=1;
						}

					}	
				}
			}
			else{
				list.push(temp);
				temp = [];
			}
		}
	}
	return list;
}

function maxSum(v){
	let imw = IMW(v);
	var imwLength = imw.length;
	if (imwLength <= 1){
		return imw[0];
	}
	else{
		var dict = {}, i=0, maxVal=0;
		for (let x of imw){
			var tmp = 0
			for (i=0; i<x.length; i++){
				tmp += x[i];
			}
			dict[tmp] = x;
			if (tmp>maxVal){
				maxVal = tmp;
			}		
		}

		return dict[maxVal]
	}
}

function minAvg(v){
	let imw = IMW(v);
	var imwLength = imw.length;
	if (imwLength <= 1){
		return imw[0];
	}
	else{
		var dict = {}, i=0, minVal=+Infinity;
		for (let x of imw){
			var tmp = 0, AvgTmp=0, xLength=x.length;
			for (i=0; i<xLength; i++){
				tmp += x[i];
			}
			AvgTmp = tmp/(1.*xLength);
			dict[AvgTmp] = x;
			if (minVal>AvgTmp){
				minVal = AvgTmp;
			}		
		}

		return dict[minVal]
	}
}
	
console.log(minAvg(v));

function isSubsetOf(set, subset) {
	var n = subset.length;
	var m = set.length;
	var j = 0;
	var i = 0;

    for (i = 0; i < n; i++) {
        for (j = 0; j < m;j++){
        	if (subset[j] == set[i]){
        		break;
        	}
        }
        if (j == m){
        	return false;
        }
    }
    return true;
}


