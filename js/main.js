//Google Maps
//Initialize and add the map
function initMap() {
  // Your Location
  const loc = {
    lat: 40.416775,
    lng: -3.703790
  };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  })
}

// Sticky menu background
window.addEventListener('scroll',function(){
    if(this.window.scrollY>150){
      document.querySelector('#navbar').style.opacity = 0.9;
    }else{
      document.querySelector('#navbar').style.opacity= 1;
    }
})

// Smooth Scrolling

$('#navbar a').on('click', function (event) {

  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 65
    }, 800);
  }
});