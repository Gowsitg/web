document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message!');
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill in all fields.');
  }
});


function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");

   if(sidenav) {  
    sidenav.classList.toggle('show');
   }
}

        function download() {
          const cvUrl = 'scripts/document/gowsish.pdf';
          const a = document.createElement('a');
          a.href = cvUrl;
          a.download = 'gowsithsh.pdf'; // Specify the file name to save as
          document.body.appendChild(a);

          a.click();

          document.body.removeChild(a);
        }

document.addEventListener('DOMContentLoaded', function() {
  // window.scrollTo({ top: 0, behavior: 'smooth' });

  const menuLinks = document.querySelectorAll('.link_items');
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          menuLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
      });
  });
});
