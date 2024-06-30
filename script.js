document.getElementById('btn').addEventListener('click', function() {
    var content = document.querySelector('.showable-content');
    var heading = document.querySelector('.heading');
    content.classList.toggle('show');
    heading.classList.toggle('show');
});