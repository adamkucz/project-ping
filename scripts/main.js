window.onscroll = function() {resizeHeader()}

function resizeHeader(){

  var nav = document.getElementsByTagName('nav')[0]
  var pplogo = nav.getElementsByTagName('img')[0]

  const mediaQuery = window.matchMedia('(min-width: 601px)')

  // Not mobile view
  if(mediaQuery.matches){
    // user not at top of page
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      nav.style.opacity = ".9"
      nav.style.height = '80px'
      nav.style.lineHeight = "80px"
      nav.getElementsByTagName("ul")[0].style.display = "inline"
      nav.getElementsByTagName("ul")[0].style.float = "right"
         
      pplogo.style.display = "inline";
      pplogo.style.float = "left";
      pplogo.style.marginLeft = "25px";
      pplogo.style.width = "75px"
      pplogo.style.height = "75px"

      nav.getElementsByTagName("a")[0].style.cursor = "pointer"

      // user at top of page
    } else {
      nav.style.opacity = "1"
      nav.style.height = '200px'
      nav.style.lineHeight = "normal"
      nav.getElementsByTagName("ul")[0].style.display = "block"
      nav.getElementsByTagName("ul")[0].style.float = "none"

      pplogo.style.display = "block"
      pplogo.style.float = "none"
      pplogo.style.margin = "auto"
      pplogo.style.width = "150px"
      pplogo.style.height = "150px"

      nav.getElementsByTagName("a")[0].style.cursor = "default"
      
    }
  } else { // mobile view
    // user not at top of page
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      nav.style.opacity = ".9"
      nav.style.height = '80px'

      pplogo.style.width = "75px"
      pplogo.style.height = "75px"

      nav.getElementsByTagName("ul")[0].style.display = "none"

    // user at top of page
    } else {
      nav.style.opacity = "1"
      nav.style.height = '130px'

      pplogo.style.width = "125px"
      pplogo.style.height = "125px"

      nav.getElementsByTagName("ul")[0].style.display = "none"
    }
  }
}
