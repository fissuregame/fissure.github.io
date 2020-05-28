function openLink(evt, animName) {
  let i, tablinks;
  const x = document.getElementsByClassName("tabs");

  if(animName === 'FAQ') {
    initAccordion(document.getElementById("accordion"));
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " active";

  collapseMenu()
}

function showDescription(event) {
  let id = event.currentTarget.id;
  const twentyfive = document.querySelector('.twentyfive')
  const fifty = document.querySelector('.fifty')
  const seventyFive = document.querySelector('.seventyFive')

  if(id === 'zero'){
    hideDescription()
  }else if(id === 'twentyfive'){
    twentyfive.querySelector('figcaption').classList.add('showDescription')
    fifty.querySelector('figcaption').classList.remove('showDescription')
    seventyFive.querySelector('figcaption').classList.remove('showDescription')
  }else if(id === 'fifty'){
    twentyfive.querySelector('figcaption').classList.add('showDescription')
    fifty.querySelector('figcaption').classList.add('showDescription')
    seventyFive.querySelector('figcaption').classList.remove('showDescription')
  }else if(id === 'seventyFive'){
    twentyfive.querySelector('figcaption').classList.add('showDescription')
    fifty.querySelector('figcaption').classList.add('showDescription')
    seventyFive.querySelector('figcaption').classList.add('showDescription')
  }else{
    twentyfive.querySelector('figcaption').classList.add('showDescription')
    fifty.querySelector('figcaption').classList.add('showDescription')
    seventyFive.querySelector('figcaption').classList.add('showDescription')  
  }
}

function hideDescription() {
  const allObjectives = document.querySelectorAll('.contributions__description figcaption')
  allObjectives.forEach(item => {
      item.classList.remove('showDescription')
  })
}

function initAccordion(accordionElem){
  const allPanelElems = accordionElem.querySelectorAll(".panel");
  for (let i = 0, len = allPanelElems.length; i < len; i++){
    allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  showPanel(allPanelElems[0])

  function handlePanelClick(event){
    showPanel(event.currentTarget);
  }

  function showPanel(panel){
    let expandedPanel = accordionElem.querySelector(".active");
    if (expandedPanel){
        expandedPanel.classList.remove("active");
    }
    panel.classList.add("active");
  }
}

const buttonMenu = document.querySelector('.nav-toggle')
const menu = document.querySelector('nav')
buttonMenu.addEventListener('click', collapseMenu, false)

function collapseMenu() {
  menu.classList.toggle('collapse')
  buttonMenu.classList.toggle('open')
}

var disqus_config = function () {
  this.page.url = window.location.href;  
  this.page.identifier = window.location.href; 
};

(function() { 
  var d = document, s = d.createElement('script');
  s.src = 'https://fissure-1.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
