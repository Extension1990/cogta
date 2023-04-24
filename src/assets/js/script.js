let lists = document.querySelectorAll('.menu-item');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
  item.addEventListener('click', function(){
    activeLink(this);
}));