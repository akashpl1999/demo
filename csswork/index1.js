// // function reverse(str) {
// //     return str.split('').reverse().join('');
// //   }


// //   console.log(reverse("akashpl123"))


// // var str='akashpl123'
// // console.log(str.split('').reverse().join(''))



// // function isPalindrome(str){
// //     if(str === str.split('').reverse().join('')){
// //         return true;
// //     }else{
// //         return false
// //     }
// // }

// // console.log(isPalindrome("abccbaa"))

// //  function ispalidrome(str){


// //      for(let i=0; i <= str.length; i++){
// //         console.log(str[str.length-1-i])

// //         if(str[i] !== str[str.length-1-i]){
// //             console.log(str[str.length-1-i])

// //             return false;
// //          }else{
// //             console.log(str[str.length-1-i])

// //             return true;
// //          }

// //  }
// // }

// //  console.log(ispalidrome("wabccbaaw"))



//  let n1=0;
//  let n2=1;
//  let nextterm;
//  const number=10
//  nextterm = n1 + n2;

//  while(nextterm <= number){
//     console.log(nextterm)

//     n1=n2;
//     n2=nextterm;
//     nextterm =n1+n2;
//  }
//  console.log(nextterm)


//   function fibbo(n){

//     let fibo = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         console.log(fibo[i+1])
//       fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo[n];


//   }

//   console.log(fibbo(10))


//3

//    var arr=[1,2, [3,4],[5,6],7]

//        function arrmain(arr){


//        return   arr.reduce((acc, val)=>{

//             return Array.isArray(val)? acc.concat(arrmain(val)) : acc.concat(val)

//         },[])


//        }

//        console.log(arrmain([1,2, [3,4],[5,6],7]))


// function fibbononic(n){

//     let fibbo=[0,1]

//     for(let i=2; i<=n; i++){

//         fibbo[i]=fibbo[i-1]+fibbo[i-2]
//     }
//     console.log(fibbo[n])
//     return fibbo[n]



// }
// console.log(fibbononic(10))


// function strrevers(str){

//      for(let i=0;  i<=str.length; i++){


//         if(str[i] === str[str.length-1-i]){

//             return true

//         }else{

//             return false
//         }
//     }
// }

// console.log(strrevers("abccba"))




// const arr=[1,2,3,4,5]


//   const data=arr.sort((a,b)=>b-a)

//   const largestproduct=arr[0]*arr[arr.length-1]*arr[arr.length-2]


//   function getLargestProduct(nums) {
//     nums.sort((a, b) => b - a);
//     const largestProduct = nums[0] * nums[1] * nums[2];
//     const largestProduct2 = nums[0] * nums[nums.length -1] * nums[nums.length - 2];
//     console.log(largestProduct2)
//     return Math.max(largestProduct, largestProduct2);
//   }
//   console.log(getLargestProduct([1,2,3,4,5]))



// }
//}


// function uniqueValues(nums) {
//     if (nums.length === 0) return [];
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] !== nums[j]) {
//         i++;
//         nums[i] = nums[j];
//       }
//     }
//     return nums.slice(0, i+1 );
//   }
//   const input = [1, 2, 1, 3, 4, 2, 4, 3];

//   function isBalanced(str) {
//     let stack = [];
//     let pairs = {
//       "(": ")",
//       "{": "}",
//       "[": "]"
//     };

//     for (let char of str) {
//       if (char in pairs) {
//         stack.push(char);
//       } else {
//         let last = stack.pop();
//         console.log(pairs[last])
//         if (pairs[last] !== char) {
//           return false;
//         }
//       }
//     }

//     return stack.length === 0;
//   }



//    function isBalanced(str){

//         let stake=[];

//         let pairs = {

//             "(":")",

//             "{":"}",

//             "[":"]"
//         }


//         for(let char of str){


//             if(char in pairs){

//                 stake.push(char)




//              } else {

//                 let last = stake.pop()

//                 if(pairs[last] !== char){

//                     return false

//                 }


//             }

//         }
//         return str.length===0


//    }
//   console.log(isBalanced('{{}{}}'))




// function sameFrequency(num1, num2) {
//     let str1 = num1.toString();
//     let str2 = num2.toString();
//     if (str1.length !== str2.length) return false;
//     let count1 = {};
//     let count2 = {};
//     for (let i = 0; i < str1.length; i++) {
//       count1[str1[i]] = (count1[str1[i]] || 0) + 1;
//       count2[str2[i]] = (count2[str2[i]] || 0) + 1;

//       console.log(count1)
//     }
//     for (let key in count1) {
//         console.log(count1[key])

//       if (count1[key] !== count2[key]) return false;
//     }
//     return true;
//   }
//   
// //}



//  


// function arrdata(arr){

//     const output=[]

//      for(let j=0 ;j<arr.length;  j++ ){

//           if(output.indexOf(arr[j])===-1){  /// output.indexof(arr[0])==> output.indexof(1)

//              output.push(arr[j])

//           }
//           console.log(output)



//       }


// }
// console.log(arrdata([1,1,2,2,3,3,4,4,7,9]))




// function arrdata1(arr){

//     var output=[];  

//    for(let i=0; i< arr.length; i++){

//     if(!output.includes(arr[i])){

//         output.push(arr[i])

//     }

//     console.log(output)

//    }
// }

// console.log(arrdata1([1,1,2,2,3,2,3,3,4,4,7,9]))



// function strdata(str){
//       let count1 = {};

//     for(let i=0; i<str.length; i++){

//         count1[str[i]]  = (count1[str[i]] || 0 ) + 1;
//     }

//     return count1

// }

// console.log(strdata('akash'))


// function main(str){

//    let outstr=[]


//    for(let i=0; i<str.length; i++){
//       if(!outstr.includes(str[i])){
//          outstr.push(str[i])
//       }


//    }
//    return outstr.join("")


// }

//   const arr1=[4,5,6,1,2]
//   const arr2=[

//     {a:1},
//     {b:2},
//     {c:3},
//     {d:4},
//     {e:5},
//     {f:6},
//     {g:7},
//     {h:8},
//     {i:9},
//     {j:10},

//   ]


//    const data= arr1.forEach((elm)=>{

//           return Object.values(arr2).reduce( ( acc,val)  =>  val)

//    })


//  console.log(data)

//   function revese(str){
//     let out=[]

//     for(let i=0;i<str.length;i++){
//       out.push (str[str.length-1-i])

//     }

//      return out.join('')

//   }

//   console.log(revese("akash"))



// function revese(str){
//     var out=""

//     for(let i=str.length-1; i>=0; i--){
//         out+=str[i]

//     }

//      return out;


//   }

//   console.log(revese("akash"))


// const arr1 = [4, 5, 6, 1, 2];
// const arr2 = [
//   {a:1},
//   {b:2},
//   {c:3},
//   {d:4},
//   {e:5},
//   {f:6},
//   {g:7},
//   {h:8},
//   {i:9},
//   {j:10},
// ];


// output //

// {d:4},
// {e:5},
// {f:6},
// {a:1},
// {b:2},
// {g:7},
// {h:8},
// {i:9},
// {j:10},





// let result = arr11.reduce((acc, val) => {
//   let obj = arr22.find(o => Object.values(o).includes(val));
//   obj ? acc.push(obj) : acc;
//   return acc;
// }, []);

// let remaining = arr22.filter(o => !Object.values(o).some(val => arr1.includes(val)));

// result = result.concat(remaining);

// console.log(result);



// const arr1 = [4, 5, 6, 1, 2];
// const arr2 = [  {a:1},  {b:2},  {c:3},  {d:4},  {e:5},  {f:6},  {g:7},  {h:8},  {i:9},  {j:10},];

// const result = [];





//    for(let i=0;i<arr1.length; i++){

//         let value=arr1[i]
//                               //1,2,3,4             //4  5 6 
//       let index=arr2.find(o=>Object.values(o)[0]===value)   // 

//       result.push(index)
//    }

//    for(let i=0; i<arr2.length;  i++){

//    const obj=arr2[i]  ///{a:1},{b:2}

//     let index=Object.values(obj)[0] //1,2,3,4 etc

//     if(!arr1.includes(index)){

//       result.push(obj)
//     }

//    }


// for (let i = 0; i < arr1.length; i++) {

//   const value = arr1[i];

//   const obj = arr2.find(x => Object.values(x)[0]===value);

//   console.log(obj)

//   result.push(obj);
// }

// for (let i = 0; i < arr2.length; i++) {


//   const obj = arr2[i];

//   const value = Object.values(obj)[0];
//   console.log(value)

//   if (!arr1.includes(value)) {
//     result.push(obj);
//   }
// }

//console.log(result);

// function getMissingNumber1(arr){
//      let output=[]

//     for(let i=0; i<arr.length; i++){

//               if(!(arr[i]+1 == arr[i+2])){
//                  output.push(arr[i])
//               }
//               return output

//        }

// }

// function getMissingNumber(arr) {
//   const n = arr.length; //4
//   const expectedSum = (n + 1) * (n + 2) / 2; ///21
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);//16
//   return expectedSum - actualSum; 
// }


// console.log(getMissingNumber([1,2,3,4,6]))

// function palidrom(str){
//     var output="";

//    for(let i=str.length-1;i>=0;i--){
//        output+=str[i]

//    }
//    return output
//   }
//   console.log(palidrom("abccbaq"))


//  function fiboonoic(n){


//     let fibo=[0,1]

//     for(let i=2; i<=n; i++){
//     fibo[i]= fibo[i-1] + fibo[i-2]
//     }
//     return fibo[n]
//  }
//  console.log(fibbononic(5))


//  function fibbononic(n){

//   let fibbo=[0,1]

//   for(let i=2; i<=n; i++){

//       fibbo[i]=fibbo[i-1]+fibbo[i-2]
//   }
//   console.log(fibbo[n])
//   return fibbo[n]
//  }


// var num=10;
// var n1=0;
// var n2=1;
// var nextterm;


// for(let i=1; i<=num;  i++){


//     console.log(n1)

//     nextterm=n1+n2;
//     n1=n2;
//     n2=nextterm
// }

// const arr  = ['a','123', 'sgfd' ]


// const data = arr.push("akash")

//   console.log( data) 

//   const array1 = ["a","123", "sght"];
// console.log(array1.unshift("5"));
// console.log(array1.join('-'));


// function flternarry(arr){



//   return arr.reduce((acc,val)=>{

//      return  Array.isArray(val) ? acc.concat(flternarry(val)) : acc.concat(val)


// },[])

// }

// console.log(flternarry([1,2,[3,4],3,6]))



// function revesrstr(str){

//        var out="";

//      for(let i=str.length-1; i>=0; i--){
//         out+=str[i]         
//      }
//      return out
// }
// console.log(revesrstr("alaska"))


// function work(arr){


//   var sum =7
//   var out =-1;
//   for(let i=0; i<arr.length; i++){

//      for(let j=i+1; j<arr.length; j++){

//            if(sum == arr[i]+arr[j]){

//             out= [i,j]

//             break;
//            }


//            if(out  !== -1){

//             break;
//            }

//      }
//      }

//      return out;

// }

// console.log(work([1,2,3,4,5]))






// function nonrepeat(str){

//    var counts={};
//    var out=""


//    for(let i=0; i<str.length; i++){



//       counts[str[i]]= (counts[str[i] ] || 0)+1

//    }



//    for(let i=0; i<str.length; i++){

//     if( counts[str[i]] === 1){

//            out+=str[i]

//        }

//    }


//    return out

// }


// console.log(nonrepeat("aabbcddfggh"))


// function firstNonRepeatingChar(str) {
//   const charCounts = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     charCounts[char] = (charCounts[char] || 0) + 1;
//   }
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charCounts[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }



//  function removerepeted(str){

//     var out="";


//     for(let i=0;  i<str.length; i++){

//       if(!out.includes(str[i])){

//          out+=str[i]

//       }
//     }


//     return out

//  }

//  console.log(removerepeted("aabbcddff"))

//  const strdata="akash"

//  console.log(strdata.includes("a"))




// function removerepet(arr){

//     var out=[]

//     for(let i=0;  i<arr.length; i++){

//         if(!out.includes(arr[i])){

//              out.push(arr[i])
//         }

//     }

//     return out;


// }

// console.log(removerepet([1,2,3,2,2,3,4,6,4]))


// var n1=0
// var n2=1
// var nextterm;

//  var number=10;


//   for(let i=2;  i<number; i++){


//     console.log(n1)
//     nextterm=n1+n2

//     n1=n2;
//     n2=nextterm;


//   }




// function matrixdata(maxarr){

//    console.log(maxarr)


//    var sum=0;

//     for(let i=0; i<maxarr.length; i++){

//       console.log(maxarr[i][1])

//    sum += maxarr[0][i]

//   sum += maxarr[i][]






//       }

//       return sum




//   }


// console.log(matrixdata([[1,2,3], [4,5,6], [7,8,9]]))




//  function rotete(str1, str2){



//       var concatdata=str1+str2

//       console.log(concatdata)


//        return concatdata.indexOf(str2)




//  }

//  console.log(rotete("abcde", "cdfab"))

// function arrhandle(arr) {

//   const data = arr.sort((a, b) => b - a)
//   console.log(data)

//   const results = arr[0] - arr[arr.length - 1]

//   return results
// }

// console.log(arrhandle([2, 3, 10, 6, 4, 8, 1]))






// function maxDifference(arr) {
//   let min = arr[0];
//   let maxDiff = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] - min > maxDiff) {
//       maxDiff = arr[i] - min;
//     }
//   }

//   return maxDiff;
// }

// console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // 9


// function maxDifference(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     let maxDiff = 0;
//     var min = arr[i];
//    for (let j = 1; j < arr.length; j++) {
//     if (arr[j] < min) {
//       min = arr[j];
//     } else if (arr[j] - min > maxDiff) {
//       maxDiff = arr[j] - min;
//     }
//   }
//   return maxDiff;

// }
// }

// console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // 9




//  function main(a){
//   return function sub(b){

//      var sum=a+b
//      return sum

//   }
//  }
//  console.log(main(4)(5))



//  const str="aabbccdde"

//   const res=new Set(str)

//    console.log(Object.values(res))



//    const mySet = new Set(str);
//    const myArray = Array.from(mySet);

//    console.log(myArray.toString("")); // Output: ['a', 'b', 'c', 'd', 'e']

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//    for (var i = 0; i < 10; i++) {

//     setTimeout(() => console.log(a[i]), 1000);
//   }





// var a=3;
// var b=a++; assign and increment
// var c=++a; increment and assign
// console.log(a,b,c)


// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NULL);
// console.log(typeof typeof 1);


// const arr=[1,2,3,4,5,6]
// let arr1 = [
//   ["id", "1"],
//   ["name", "Test User"],
//   ["age", "25"],
//   ["profession", "Developer"],
// ];


//   // console.log(Object.assign({}, arr))
//  // console.log({...arr})

//  console.log(Object.fromEntries(arr1));




//    function  handledata(str1, str2){

//        for(let i=0;  i<str1.length; i++){


//            for(let j=0;  j < str2.length; j++){


//                if(str1[i]==str2[j]){

//                   return true

//               }



//           }

//           }


//   }

//  console.log( isAnagram("listen", "silent"))






//   function isAnagram(str1, str2) {


//     const cleanedStr1 = str1.toLowerCase().replace(/\s+/g, '');
//     const cleanedStr2 = str2.toLowerCase().replace(/\s+/g, '');

//     if (cleanedStr1.length !== cleanedStr2.length) {
//       return false;
//     }

//     const charCount1 = {};
//     const charCount2 = {};




//     // Count the frequency of characters in the first string
//     for (let i = 0; i < cleanedStr1.length; i++) {
//       const char = cleanedStr1[i];
//       if (charCount1[char]) {
//         charCount1[char]++;
//       } else {
//         charCount1[char] = 1;
//       }
//     }



//     // Count the frequency of characters in the second string



//     for (let i = 0; i < cleanedStr2.length; i++) {
//       const char = cleanedStr2[i];
//       if (charCount2[char]) {
//         charCount2[char]++;
//       } else {
//         charCount2[char] = 1;
//       }
//     }

//     // Compare the two frequency objects
//     for (const key in charCount1) {
//         console.log(charCount1[key])

//       if (charCount1[key] !== charCount2[key]) {


//         return false;

//       }

//     }

//     console.log(charCount2)


//     return true;
//   }




// function  isAnagram(str1, str2){

//    const newstr1= str1.toLowerCase().replace(/\s+/g, '')

//    const newstr2= str2.toLowerCase().replace(/\s+/g, '')


//    if(newstr1.length !== newstr2.length){

//     return false

//    }



//    if(newstr1.split('').sort().join("") == newstr2.split('').sort().join("")){
//      return true
//    }else{
//     return false
//    }







// }


//  function isAnagram( str1, str2 ) {


//        if(str1.length !== str2.length ) return false


//        let count1={};
//        let count2={};


//        for(let i=0;  i<str1.length; i++){


//           if(count1[str1[i]]){

//             count1[str1[i]]++
//           }else{

//             count1[str1[i]]=1
//           }


//        }



//        for(let i=0;  i<str2.length; i++){


//         if(count2[str2[i]]){

//           count2[str2[i]]++

//           }else{

//           count2[str2[i]]=1


//         }
//       }


//         for (let key in count1){

//            if(count1[key]!== count2[key]){
//                 return false
//            }


//         }








//        return true


//  }

// console.log(isAnagram("akash","haska"))



//     function isAnagram( str1, str2 ) {


//       if(str1.length !== str2.length ) return false


//       let count1={};
//       let count2={};


//       for(let i=0;  i<str1.length; i++){

//          count1[str1[i]]= (count1[str1[i]] || 0)+1;


//       }

//       for(let i=0;  i<str2.length; i++){

//         count2[str2[i]]= (count2[str2[i]] || 0) + 1;

//       }








//        for (let key in count1){

//           if(count1[key]!== count2[key]){
//                return false
//           }


//        }



//       return true


// }

// console.log(isAnagram("akash","haska"))




// count2[str2[i]]= (count2[str2[i]] || 0) + 1;


//  if(count2[str2[i]]){

//       return  count2[str2[i]]++

//  }else{

//      return  count2[str2[i]]=1

//  }

//     function handledata(){

// const arr1 = [4, 5, 6, 3, 2]


// const arr2 = [

//   { a: 1 },
//   { b: 2 },
//   { c: 3 },
//   { d: 4 },
//   { e: 5 },
//   { f: 6 },
//   { g: 7 },
//   { h: 8 },
//   { j: 9 },
//   { k: 10 }

// ]



//       var result=[];


//       for (let i = 0; i < arr1.length; i++) {

//                  let value=arr1[i]

//                  const index=arr2.find(o=>Object.values(o)[0] == value)


//                 result.push(index)

//                }


//                for (let i = 0; i < arr2.length; i++) {

//                   let value =arr2[i]

//                   let index= Object.values(value)[0]

//                   console.log(value)


//                    if(!arr1.includes(index))
//                      console.log(index)

//                           result.push(value)


//                }


//                 return result;

//               }

//               console.log(handledata())


//  function handledata(){

// const arr1 = [4, 5, 6, 3, 2]


// const arr2 = [{ a: 1 },{ b: 2 },
//   { c: 3 },
//   { d: 4 },
//   { e: 5 },
//   { f: 6 },
//   { g: 7 },
//   { h: 8 },
//   { j: 9 },
//   { k: 10 }

// ]

// var output=[];


//    arr1.forEach(val=>{

//         let index = arr2.find(o=>Object.values(o)[0] == val)
//          return output.push(index)

//    }) 


//     arr2.forEach(val=>{

//         let index= Object.values(val)[0];

//         if(!arr1.includes(index)){
//           return output.push(val)
//         }

//     })



//    return output

//   }

//   console.log(handledata())
















// function handleall(str) {


//   let case1 = [ "a", "e", "i", "o","u" ]
//   const case2 = [ "b", "c", "d","f", "g" ]
//   const case3 = [ "h", "j", "k", "l", "m" ]
//   const case4 = ["n", "p"," q", "r", "s", "t", "v", "w", "x", "y", "z" ]


//   let letter;


  
//   switch (true) {

//     case case1.includes(str[0]):     ///  case1    can make "aeiou" then it consider has 
//       letter = "a"
//       break
    
//     case case2.includes(str[0]):
//       letter = "b"
//       break
    

//     case case3.includes(str[0]):
//       letter = "c"
//       break
    

//     case case4.includes(str[0]):
//       letter = "d"
//       break
    

//   }


//   return letter




// }

// console.log(handleall("akshk"))




  // function vowandconst(str){


  //     let out=""
      
  //     for(let i=0; i<str.length; i++){

  //         if('aeiou'.includes(str[i])){

  //            out+= str[i] +'\n';

  //         }

  //     }


  //     for(let i=0; i<str.length; i++){
          
  //          if(!out.includes(str[i])){

  //             out+=str[i] +'\n'
  //          }


  //       }


  //     return out  ;

  // }

  // console.log(vowandconst("abcidoolumonke"))  //aioouoe




  //  function arrhandle(arr){

  //      let count=0;


       
  //         for(let i=0;  i<arr.length; i++){

            
  //             if(arr[i].x ==arr[i].y){   /// 
  //               count++   
  //             }

  //         }
  //         return count
  //  }

  //   console.log(arrhandle([{ x:1, y:1 },{x:1 , y:2},{x:2 , y:1},{x:2,y:2},{x:3, y:1},{x:3,y:3}, {x:4,y:4}]))
 

     

  // function arrfun(arr){

  //      let larger=0;

  //      let seclarger=0;


  //      for(let i=0;  i<arr.length; i++) {
     
  //              if(arr[i] > larger){

  //                  seclarger=larger
  //                  larger=arr[i]



  //                }   else if(arr[i] > seclarger && arr[i]<larger){

  //                    seclarger=arr[i] 
  //                    console.log(seclarger)

  //               }


                

  //       }



  //       return seclarger
      
       

  // }

  //  console.log(arrfun([1,2,3,45,24,89,26]))

   
   



//    // initialize the array
// let array = [1,2,3,45,24,89,26];

// // initialize variables to keep track of the maximum and second maximum
// let maxNum = -Infinity;
// let secondMax = -Infinity;

// // loop through the array
// for (let i = 0; i < array.length; i++) {
//   // update the maximum number
//   if (array[i] > maxNum) {
//     secondMax = maxNum;
//     maxNum = array[i];
//   }
//   // update the second maximum number
//   else if (array[i] > secondMax && array[i] != maxNum) {
//     secondMax = array[i];
//   }
// }

// // print the second maximum number
// console.log("The second largest number in the array is:", secondMax);

   
  

  // for(let i=1; i<11; i++){
  //   console.log(`${7}x${i}=${7*i}`)
  // }



    // for(let i=0; i<100; i++){
         
    //     if(!(i%2==0)){                 ///add number
    //       console.log(i)
    //     }
         
    // }
 
    
    
    
    // var fact=1;

    //  for(let i=2;i<=5;i++){
                                     // factorial
    //      fact*=i
    //  }
    //  console.log(fact)






    // function isPrime(number) {


    //   if (number <= 1) {
    //     return false;
    //   }
    //   for (let i = 2; i <= Math.sqrt(number); i++) {
    //     if (number % i === 0) {
    //       return false;
    //     }
    //   }
    //   return true;
    // }
    
    // for (let i = 1; i <= 100; i++) {
    //   if (isPrime(i)) {
    //     console.log(i);
    //   }



    // }


    
//     for(let i=2; i<100;i++){
//       let isprime=true;
//         for(let j=2; j<= Math.sqrt(i);  j++){
//         if(i%j==0){
//         isprime=false;
//         break

//         }
//      }       

//      if(isprime){  

//       console.log(i)
//      }



// }


  // function isprime(num){

  //      if(num<=1){

  //           return 0


  //      }

          
  //        for(let i=2; i<num ; i++){
        
  //           if(num % i === 0){

  //             return 0
            
  //           }


  //        }

  
  //        return 1
      
  // }

  


  //  console.log(isprime(10))



    //  for(let i=2; i<20; i++){

    //    if(isprime(i)){

    //          console.log(i)

    //    }
    //  }




    //  function arrshift(arr){

    //        out=[];

    //      for(let i=1;  i<arr.length;  i++){

    //                out+=arr[i-1]
    //      }
    //      return out
    //  }



    //   console.log(rightShift([1,2,34,4,5]))



      
    //   function rightShift(arr) {
    //     const lastElement = arr[0];
    //     const out = [lastElement];

    //     for (let i = 1; i < arr.length-1; i++) {
    //       out.push(arr[i]);
    //     }
    //     return out;
    //   }
      


    // function rightshift(arr){

       
    //          let first=arr[arr.length-1]
            
    //          let out=[first]

    //          for(let i=0; i<arr.length-1; i++){
                  

    //            out.push(arr[i])



    //          }
              
    //          return out
         

    //   }


    // console.log(rightshift([1,2,3,4,5]))
  


//     function leftshift(arr){

       
//       let first=arr[0]
     
//       let out=[]

//       for(let i=1; i< arr.length; i++){
           

//          out.push(arr[i])



//       }
       
//       out.push(first)
 
       
//       return out
  

// }


// console.log(leftshift([1,2,3,4,5]))



  //  function arrrevers(arr){

  //        let out=[];


  //       // for(let i=arr.length-1; i>=0 ; i--){

  //       //    out.push(arr[i])

  //       // }



  //       for(let i=0; i<arr.length ; i++){

  //         out.push(arr[arr.length-1-i])

  //      }


  //       return out

  //  }

  //  console.log(arrrevers([1,2,3,4,5]))





    // function arrmain(arr1, arr2){


    //       let out=[];


          // for(let i=0; i<arr1.length;i++){

          //   for(let j=0; j<arr2.length;j++){            // to remove  common elements

          //        if(arr1[i]==arr2[j]){
          //           out.push(arr1[i])
          //        }
                 
          //   }
              


        // }

       



        //   for(let i=0; i<arr1.length;i++){

        //      if(arr2.includes(arr1[i])){


        //         out.push(arr1[i])

        //      }
               


        //   }



        //   for(let i=0; i<arr2.length;i++){

        //     if(arr1.includes(arr2[i])){
        //        out.push(arr2[i])
        //     }
              


        //  }


    //      return out

    // }

    // console.log(arrmain([1,2,3,4,5],[2,3,5,6,7]))

    


      //  function sumisprime(num){


      //      if(num<=1){
      //       return false;
      //      }


      //        for(let i=2; i<num; i++){


      //               if(num%i==0){
      //                 return false;
      //               }

      //        }

      //        return true
      //  }



      //   for(let i=0; i<100 ;i++){  
        
        
      //     let sum=0;

              
      //       if(sumisprime(i)){
          
           
      //         console.log(  sum+ =i )


      //       }



      //          }


    

      //  for(let i=2;i<20; i++){

      //        let isprime=0;

      //       for(let j=2; j<20; j++){

      //             if(i%j==0){

      //               isprime=0
      //               break;

      //             }
      //       }



      //       if(isprime ==0){

      //            console.log(i)

      //       }



         
      //  }


      // let sum=0;
      
      // for (let i = 2; i < 100; i++) {


      //   let isPrime = true;


      //   for (let j = 2; j < i; j++) {


      //     if (i % j === 0) {

      //       isPrime = false;

      //       break;
      //     }

      //   }





      //   if (isPrime) {
      //     sum +=i
         
      //   }




      //  }
      //  console.log(sum);



      //  function primedata(num){

             
      //   if(num<=1){

      //     return false
      //   }

      //    for(let i=2; i<num; i++){
      //        if(num%i==0){
      //         return false
            
      //        }

            
      //    }
        
               
      //     return true


      //     }

      //     let count=0;
      //     let curnum=2;
      //     let lastnum=null



          
      //      for(let i=2; i<50; i++){
          

      //            if(primedata(i)){

      //              if(lastnum !== null){

      //                  console.log(i - lastnum)

      //              }

      //              lastnum=curnum



      //            }
      //            i++

                 
              
      //      }
        