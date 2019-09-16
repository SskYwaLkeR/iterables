// underscore object
const _ = {};
_.each = function(list, callback){
  if(Array.isArray(list)){
    for(let i = 0; i < list.length; i++){
      callback(list[i], i, list)
    }
  }
 
  else{
    for(let keys in list){
      callback(list[keys], keys, list)
    }
  }
}

//Demonstration

let arr = [1,2,3];
let obj = {
  person1: "hrishi",
  person2: "skywalker"
};

let cbFunction = function(elements, index){
  console.log(elements, index)
}

_.each(obj, cbFunction); //logs hrishi skywalker along with person1 and person2 (refer to cbFunction console)
_.each(arr, cbFunction); //logs 1 2 3 and 0 1 2 (indexes) refer to cbFunction