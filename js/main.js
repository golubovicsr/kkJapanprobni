   // Selektuj dugme
  const backToTop = document.getElementById('backToTop');

  // Prikazi ili sakrij dugme prilikom skrola
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // kada je skrol > 200px
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  // Klik dugmeta vodi na vrh sa glatkom animacijom
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animacija se desi samo prvi put
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));





const vestWrappers = document.querySelectorAll('.vesti-img-wrapper, .vesti-text-wrapper');

const vestObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

vestWrappers.forEach(item => vestObserver.observe(item));
