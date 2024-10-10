var arr= [1,2,3,4,5,{id:1,age:25},[1,2,3]];                   //1st
for(i=arr.length-1;i>=0;i--){
    console.log(arr[i]);   
}


var str1="vamsi"                                               //2nd
var reversestr1=""
for(j=str1.length-1;j>=0;j--){
    reversestr1=reversestr1+str1[j]       
}
console.log(reversestr1);


var str2="hello everyone"                                       //3rd
var reversestr2=""
for(k=str2.length-1;k>=0;k--){
    reversestr2=reversestr2+str2[k]       
}
console.log(reversestr2);


var arr2=[1,2,3,4,5,{id:1,age:25},[1,2,3]]                      //4th                                                           
for(key of arr2){
    if (typeof key === "object") {
        if("age" in key){
            console.log(key.age);
        }
    }
}
