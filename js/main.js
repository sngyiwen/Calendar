function removeClass(elem, className) {
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  }
}

functionAttribute(elem, attrName){
    if(elem.hasAttribute(attrName)){
        elem.removeAttribute(attrName);
    }
}