// Floating ad close button
document.getElementById('close-ad').addEventListener('click', () => {
    document.getElementById('floating-ad').style.display = 'none';
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200; // speed
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Simple testimonial slider auto-scroll
const slider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 320;
    if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
        scrollAmount = 0;
    }
    slider.scrollTo({
        top:0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 4000);
