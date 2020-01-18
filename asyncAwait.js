// await wont wait for the asyn func in CALLBACK based fns like forEach, map, reduce , filter
// but works in while , for loop

let fruits = ['apple','grape','bananana'];
let fruitBasket = {
  apple: 27, 
  grape: 11,
  pear: 14 
}

let sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let getNumFruit = fruit => {
  return sleep(1000).then(v => fruitBasket[fruit])
}


// forEach does not work with await
let forEachEg = ()=> {
   console.log(`Start`);
  fruits.forEach(async(fruit)=>{
       let x =  await getNumFruit(fruit);
       console.log(`fruit is ${x}`);
  });  
 console.log(`End `);
}



let mapEg = async() =>{

 console.log(`Start`);
 
 let res = fruits.map(async(fruit)=>{
  let x =  await getNumFruit(fruit);
  return x;
 
 });
  console.log(` res is ${res}`);
  let resResolved = await Promise.all(res);
    console.log(`resResolved  = ${resResolved}`);
  console.log(`End`);
}



// async Doent wrk with filter,  as it  is like array.filter(true)

let filterExample = async ()=>{

  console.log(`Start `);
  
  let resPromise = fruits.filter(async(fruit)=>{
      let y = await getNumFruit(fruit);
       return y >21;
  });
  
  console.log(`y is promise array ${resPromise}`);
  let yResolved = await Promise.all(resPromise);
  
  console.log(`End  ${yResolved}`);

}

let reduceNormal = () =>{

let res =   fruits.reduce((sum,elem)=>{
    sum+= elem;
    return sum;
  },0);
  console.log(`res = ${res}`);
}


let reduceAsyncAwait = () =>{
  
 let res = fruits.reduce(async(sum,fruit)=>{
    let y = await getNumFruit(fruit);
    sum+= y;
    return sum;
  },0);
   
   console.log(`res = ${res}`);// res = [object Promise]
}

// in above example , sum after the 1st iteration is promise as async always returns a promise


