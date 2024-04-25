
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', ()=>{
  menu.style.display='block';
  menuBtn.style.display='none';
  closeBtn.style.display='inline-block';
})

closeBtn.addEventListener('click', ()=>{
  menu.style.display='none';
  menuBtn.style.display='inline-block';
  closeBtn.style.display='none';
})


const navItems = menu.querySelectorAll('li');

const changeActiveitem = ()=>{
  navItems.forEach(item=>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item=>{
  const link = item.querySelector('a');
  link.addEventListener('click', ()=>{
    changeActiveitem();
    link.classList.add('active');
  })
})

const readMore = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMore.addEventListener('click', ()=>{
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
  readMore.innerText = "Show Less";
  }else{
    readMore.innerText = "Show More";
  }
});

