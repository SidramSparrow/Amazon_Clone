const closeBtn = document.getElementById('close');
const container = document.getElementById('my-collapse');
const done = document.getElementById('done');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const containerSec = document.getElementById('myCarousel');

closeBtn.addEventListener('click', (e) => {
    if (container.style.display === '') {
        container.style.display = 'none';
    }  
    if(container.style.display === 'none') {
        container.style.display = '';
    }
});
done.addEventListener('click',(e) => {
    container.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    document.getElementById('containerSec').carousel('prev');
  });

nextBtn.addEventListener('click', () => {
  document.getElementById('containerSec').carousel('next');
});