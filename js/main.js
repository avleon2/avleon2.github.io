//Slidshow

var i = 0;
  var images = [];
  var time = 800;

  images[0] = 'images/Bonding_Header-1.jpg';
  images[1] = 'images/Bonding_Header-2.jpg'; 
  images[2] = 'images/Bonding_Header-3.jpg';
  images[3] = 'images/Bonding_Header-4.jpg'; 
  images[4] = 'images/Bonding_Header-5.jpg'; 
  images[5] = 'images/Bonding_Header-6.jpg'; 
  images[6] = 'images/Bonding_Header-7.jpg';

  function changeImg(){
    document.mySlides.src = images[i];

    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }
    
    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;

//RadioButton Selection

/*function check_value() {
  switch(#podPic) {
    //1
    document.getElementById(#radio1) = "<images/HOLDER.jpg>";
  }
}
*/


//Close Modal
const modal = document.querySelector('.modalCover');
const closeModalBtn = document.querySelector('#closeModal');
const cover = document.querySelector('.modalBox');

closeModalBtn.addEventListener('click', modalClose);

function modalClose(){
    modal.classList.remove('modalCover');
    cover.classList.remove('modalBox');
    closeModalBtn.style.display = 'none';
    cover.style.display = 'none';
}

//$("#myModal").modal('hide');