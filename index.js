function getFirstSelector(selector){
  var result=document.querySelector(selector);
  return result;
}

function nestedTarget(){
 const nest=document.querySelector('#nested .target');
 return nest;
}

function increaseRankBy(n){
  var lists=document.querySelectorAll('.ranked-list');
  var children=lists.children;
  for (let i=0; i<children.length; i++){
   var results=parseInt(children[i].innerHTML)+n;
   return results;
  }
}