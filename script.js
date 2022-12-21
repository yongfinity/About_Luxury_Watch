

let toggleBtn = document.querySelector('#toggleBtn');
let menuList = document.querySelector('.items');

toggleBtn.addEventListener('click', clickFn);

function clickFn()
{
    menuList.classList.toggle('active');
}