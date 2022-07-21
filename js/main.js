//Slidshow

var i = 0;
  var images = [];
  var time = 800;

  images[0] = 'Images/Bonding_Header-1.jpg';
  images[1] = 'Images/Bonding_Header-2.jpg'; 
  images[2] = 'Images/Bonding_Header-3.jpg';
  images[3] = 'Images/Bonding_Header-4.jpg'; 
  images[4] = 'Images/Bonding_Header-5.jpg'; 
  images[5] = 'Images/Bonding_Header-6.jpg'; 
  images[6] = 'Images/Bonding_Header-7.jpg';

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

//Close Modal
const modal = document.querySelector('.modalCover');
const cover = document.querySelector('.modalBox');
const closeModalBtn = document.querySelector('#closeModal');

closeModalBtn.addEventListener('click', modalClose);

function modalClose(){
  modal.classList.remove('modalCover');
  cover.classList.remove('modalBox');
  closeModalBtn.style.display = 'none';
  cover.style.display = 'none';
}

//Newsletter

/*const newsletter = document.getElementbyId('appear');
const openNewsletterBtn = document.getElementbyId('show');

openNewsletterBtn.addEventListener('click', newsletterAppear);

function newsletterAppear(){
  //newsletter.classList.display('block');
  document.getElementbyID('appear').style.display= "block";
}*/




//RadioButton Selection


/*var i = 0;
var images = [];

images[0] = 'images/PACEHOLDER.jpg';
images[1] = 'images/PACEHOLDER.jpg';
images[2] = 'images/PACEHOLDER.jpg';
....
images[23] = 'images/PACEHOLDER.jpg';

function check_value() {
  document.getElementIdBy("radio1.selected")
    //1
    document.getElementById(#radio1) = "<images/HOLDER.jpg>";
  }
} 
const bonds = {
   bond1: [pic1, pic2, pic3, pic4],
   bond2: [pic1, pic2, pic2, pic4]
}
event.lookUpId

let selectedBond = evt.target.id
bonds[selectedBond]

bonds[selectedBond]
is equivalent to bonds['bond1']
*/
