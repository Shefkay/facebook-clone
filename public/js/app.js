const container = document.querySelector('.signup_container');
const createAcc = document.querySelector('.create-account');
const closeContainer = document.querySelector('.close_button');
const signIn = document.querySelector('.add_account_container');

createAcc.addEventListener('click', () => {
  container.classList.add('showHide');
});

closeContainer.addEventListener('click', () => {
  container.classList.remove('showHide');
});


const signClick = document.querySelector('#addAccount');
const close = document.querySelector('.close');

signClick.addEventListener('click', (e) => {
  e.preventDefault();
  signIn.classList.add('showAddAccount');
});

// close.addEventListener('click', () => {
//   signIn.classList.remove('showAddAccount');
// });

close.onclick = () => {
  signIn.classList.remove('showAddAccount');
}


const removeProfileChild = document.querySelector('#profile_grid_child');
const removeIcons = document.querySelector('.remove_icons');

// removeIcons.addEventListener('click', () => {
//   removeProfileChild.style.display = 'none';
// });

removeIcons.onclick = () => {
  removeProfileChild.style.display = 'none'
}



// facebook home page left side show more and less

function showMore() {
  const dots = document.getElementById("dots");
  const moreIcons = document.getElementById("more");
  const showMoreLess = document.getElementById("show_more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    showMoreLess.innerHTML = "Show more";
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    showMoreLess.innerHTML = "Show less";
    moreIcons.style.display = "inline";
  }
}