module.exports = function(element){
  var el = element
  var l = parseFloat(getCSS(el, 'left'))
  var t = parseFloat(getCSS(el, 'top'))
  var t0 = false
  window.addEventListener('scroll', function(evt){
    if(t0) clearTimeout(t0)
    t0 = setTimeout(function(){
      var x = this.scrollX
      var y = this.scrollY
      el.style.top = t + y + 'px'
      el.style.left = l + x + 'px'
    }, 150)
  })
}

function getCSS(el, prop){
  return document.defaultView.getComputedStyle(el).getPropertyValue(prop)
} 
