function getFirstSelector(selector){
 var firstSelector = document.querySelector (selector);
 return firstSelector;
}

function nestedTarget(){
  var nest=document.getElementById('nested').querySelector ('.target');
  return nest;
}

function increaseRankBy(n){
  const ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i=0; i<ranked.length; i++){
    ranked[i].innerHTML=parseInt(ranked[i].innerHTML) + n;
  }
  return ranked;
}

function deepestChild(){
 const deep=document.getElementById('grand-node').querySelectorAll('div');
 for (var i=0; i<deep.length-1; i++){
 var response=deep[i].querySelector('div');
  }
  return response;
}