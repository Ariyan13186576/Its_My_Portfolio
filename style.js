document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.optn').classList.toggle('show');
});


      function openNav() {
        document.getElementById("myNav").style.width = "60%";

        document.getElementById("myNav").style.width = "70%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }






// Disable right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable text selection and drag events
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

// Disable specific keyboard shortcuts (like Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+Shift+I)
document.addEventListener('keydown', function(event) {
    // Prevent Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+Shift+I
    if (
        (event.ctrlKey && ['u', 's', 'c'].includes(event.key.toLowerCase())) ||
        (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i')
    ) {
        event.preventDefault();
    }
});
