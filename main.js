document.addEventListener('DOMContentLoaded', function() {
  const back = document.querySelector('footer i');
  back.addEventListener('click', () => {
    window.scroll({top: 0, behavior: "smooth"});
  });
});