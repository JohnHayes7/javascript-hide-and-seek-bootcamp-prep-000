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
  for (let i=0; i<lists.length; i++){
   var results=parseInt(lists)+(lists.innerHTML+n);
  }
  return results;
}