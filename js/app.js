const gras             = document.getElementById('gras');
const italic           = document.getElementById('italic');
const underline        = document.getElementById('underline');
const fontFamily       = document.getElementById('font-family');
const fontSize         = document.getElementById('font-size');
const copytext         = document.getElementById('copytext');
const increaseFontSize = document.getElementById('increase-font-size');
const decreaseFontSize = document.getElementById('decrease-font-size');
const backgroundColor  = document.getElementById('background-color');
const backgroundInput  = document.getElementById('background-input');
const textColor        = document.getElementById('text-color');
const textcolorInput   = document.getElementById('textcolor-input');
const resetSettings    = document.getElementById('reset-settings');
const unorderedList    = document.getElementById('unordered-list');
const orderedList      = document.getElementById('ordered-list');
const center           = document.getElementById('center');
const left             = document.getElementById('left');
const right            = document.getElementById('right');
const selectHeader     = document.getElementById('select-header');
const header           = document.getElementById('header');
const expandList       = document.getElementById('expand-list');

let fontSizeValue = fontSize.value;

copytext.addEventListener('click',_=>document.execCommand('copy'));
gras.addEventListener('click',_=>document.execCommand('bold'));
italic.addEventListener('click',_=>document.execCommand('italic'));
underline.addEventListener('click',_=>document.execCommand('underline'));

fontFamily.addEventListener('change',function(){
  document.execCommand('fontName',false,this.value);
});

fontSize.addEventListener('change',function(){
  document.execCommand("fontSize", false, "7");
  var fontElements = window.getSelection().anchorNode.parentNode;
  fontElements.removeAttribute("size");
  fontSizeValue = this.value;
  fontElements.style.fontSize = `${fontSizeValue}px`;
});

increaseFontSize.addEventListener('click',function(){
  document.execCommand("fontSize", false, "7");
  const fontElements = window.getSelection().anchorNode.parentNode;
  fontElements.removeAttribute("size");
  fontSizeValue++;
  fontElements.style.fontSize = `${fontSizeValue}px`;
});

decreaseFontSize.addEventListener('click',function(){
  document.execCommand("fontSize", false, "7");
  const fontElements = window.getSelection().anchorNode.parentNode;
  fontElements.removeAttribute("size");
  fontSizeValue--;
  fontElements.style.fontSize = `${fontSizeValue}px`;
});

backgroundColor.addEventListener('click',function(){
  backgroundInput.setAttribute('type',"color");
  backgroundInput.addEventListener('change',function(){
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('backColor',false,this.value);
  });
  backgroundInput.style.display = "none";
  backgroundInput.click();
});

textColor.addEventListener('click',function(){
  textcolorInput.setAttribute('type',"color");
  textcolorInput.addEventListener('change',function(){
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor',false,this.value);
  });
  textcolorInput.style.display = "none";
  textcolorInput.click();
});

resetSettings.addEventListener('click',_=>document.execCommand('removeFormat'));
unorderedList.addEventListener('click',_=> document.execCommand('insertunorderedlist'));
orderedList.addEventListener('click',_=> document.execCommand('insertorderedlist'));
center.addEventListener('click',_=> document.execCommand('justifyCenter'));
left.addEventListener('click',_=> document.execCommand('justifyLeft'));
right.addEventListener('click',_=> document.execCommand('justifyRight'));

selectHeader.addEventListener('click',_=> header.classList.toggle('open'));
header.addEventListener('click',e=>e.stopPropagation());

window.addEventListener('click', e =>{
  if(e.target != header && e.target != selectHeader)
    header.classList.remove('open');
  if(e.target != expandList.lastElementChild && e.target != expandList)
    expandList.lastElementChild.classList.remove('open')
});

Array.from(header.children).forEach(h=> h.addEventListener('click',function(){
  document.execCommand('formatBlock',false,this.tagName);
  this.parentElement.classList.remove('open');
}));

expandList.addEventListener('click',function(){
  this.lastElementChild.classList.toggle('open');
});