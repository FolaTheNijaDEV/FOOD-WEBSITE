const getElement = (Selector)=>{
  const element=document.querySelector(Selector);
  if(element) return element
  throw Error(
    'please double check your class names,there is no ${selctor}class'
  )
}

const links=getElement('.nav-links')
const navBtnDOM=getElement('.nav-btn')

navBtnDOM.addEventListener('click',() => {
  links.classList.toggle('show-links')
})


const date = getElement('#date');
const currentYear = new Date().getFullYear()
date.textContent=currentYear