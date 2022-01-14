const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(titleCased())
//titleCased();
//console.log(capWords("what is the difference between event capturing and bubbling?"));
//console.log(titleCased());
// function myCb(someString) {
//   const singleTitle = someString
//   const words = singleTitle.split(" ")
//   let test = words.map(word => word[0].toUpperCase() + word.substring(1))
//   test = test.join(' ')
//   return test
// }
console.log(titleCased());
// function titleCased() {
//   const newArr = tutorials.map(title => {
//     //const singleTitle = title
//     const words = title.split(" ")
//     let test = words.map(word => word[0].toUpperCase() + word.substring(1))
//     test = test.join(' ')
//     return test
//   })
//   return newArr
// }

//const titleCased = tutorials.map(titleCased())
// function titleCased(){
//   const final = tutorials.map(title => {
//     let finalTitle = [];
//     const words = title.split(' ');
//     for (let i = 0; i < words.length; i++){
//       debugger
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//       finalTitle.push(words[i]);
//       debugger
//     } 
//     return finalTitle.join(' ');
//    })
//   return final;
//}
function titleCased(){
  const final = tutorials.map(title => {
  let finalTitle = [];
  const words = title.split(' ');
    for (let i = 0; i < words.length; i++){
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      finalTitle.push(words[i]);
    } 
    return finalTitle.join(' ');
   })
  return final;
}
// function capWords(title){
//   let finalTitle = [];
//   const words = title.split(' ');
//   //for (let title of array){
//     for (let i = 0; i < words.length; i++){
//       debugger
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//       finalTitle.push(words[i]);
//       debugger
//     } 
//     return finalTitle.join(' ');
    // finalArray.push(finalTitle);
    debugger
    // finalTitle = [];
    debugger
  //}
  //return finalTitle;
  // console.log(finalArray);
  // return finalArray;

// function titleCased()
// {
//   const cased = tutorials.map(title => {
//     for(let i = 0;i<title.length;i++)
//     {
//       title = title.replace(title[0],title[0].toUpperCase());
//       let newTitle = title
//       let finalTitle = ""
//       if(title[i] === ' ')
//       {
//         newTitle = title.substring(i).replace(title[i+1],title[i+1].toUpperCase());
//         finalTitle += newTitle.substring(i-title.length,i+1)
//         //finalTitle += newTitle.substring(0,newTitle.indexOf(" "));
//         //console.log(title[i+1] + " " + finalTitle);
//       }
//     }
//     return cased;
//   });
  // const cased = [];
  // for(let title of tutorials)
  // {
  //   for(let i = 0;i<title.length;i++)
  //   {
  //     //console.log(newTitle[i]);
  //     if(title[i-1] === ' ')
  //     {
  //       title = title.replace(title[i],title[i].toUpperCase());
  //     }
  //   }
  //   title = title.replace(title[0],title[0].toUpperCase());
  //   //console.log(newTitle);
  //   cased.push(title);
  // }
  //return cased;
  // //console.log(cased);
//}
//titleCased();
// let names = "kevin gallo";
// // for(let i = 0;i< names.length;i++)
// // {
// //   console.log(names[i].toUpperCase());
// // }
// let change;
// change = names.replace('k',"K");
// console.log(change);