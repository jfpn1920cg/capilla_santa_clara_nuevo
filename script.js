//funcionalidad_carrusel
let slideIndex = 1;
showSlides(slideIndex);
function changeSlide(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.querySelectorAll(".slides img");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
//funcionalidad_categoria
document.getElementById('ver-mas-btn').addEventListener('click', function() {
    const categoriasOcultas = document.querySelectorAll('.oculto');
    categoriasOcultas.forEach(function(categoria) {
        categoria.classList.remove('oculto');
    });
    const noticiaCategoria = document.getElementById('noticia-categoria');
    noticiaCategoria.style.maxHeight = '800px';
    noticiaCategoria.style.overflowY = 'scroll';
    document.getElementById('ver-mas-btn').style.display = 'none';
    document.getElementById('scroll-top-btn').style.display = 'block';
});
document.getElementById('scroll-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
//funcionalidad_calendario
const diasContainer = document.getElementById('dias');
const mesAnioTexto = document.getElementById('mes-anio');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
function actualizarCalendario(mes, anio) {
    mesAnioTexto.textContent = `${meses[mes]} ${anio}`;
    const primerDia = new Date(anio, mes, 1).getDay();
    const ultimoDia = new Date(anio, mes + 1, 0).getDate();
    diasContainer.innerHTML = '';
    const espaciosPrevios = (primerDia + 6) % 7;
    for (let i = 0; i < espaciosPrevios; i++) {
        const espacio = document.createElement('div');
        diasContainer.appendChild(espacio);
    }
    for (let dia = 1; dia <= ultimoDia; dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.textContent = dia;
        diasContainer.appendChild(diaElemento);
    }
}
prevBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    actualizarCalendario(currentMonth, currentYear);
});
nextBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    actualizarCalendario(currentMonth, currentYear);
});
actualizarCalendario(currentMonth, currentYear);
//funsionalidad_galeria
document.getElementById('visualizar-galeria').addEventListener('click', function() {
    const listaMedios = document.getElementById('lista-medios');
    const lista = document.getElementById('lista');
    listaMedios.classList.toggle('oculto');
    if (!listaMedios.classList.contains('oculto')) {
        lista.innerHTML = '';
        const medios = [
            { tipo: 'Foto', nombre: 'Foto 1', url: 'media/fotos/foto1.jpg' },
            { tipo: 'Foto', nombre: 'Foto 2', url: 'media/fotos/foto2.jpg' },
            { tipo: 'Video', nombre: 'Video 1', url: 'media/videos/video1.mp4' }
        ];
        medios.forEach(medio => {
            const li = document.createElement('li');
            li.textContent = `${medio.tipo}: ${medio.nombre}`;
            lista.appendChild(li);
        });
    }
});