// Tema gelap/terang
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Filter project
function filterProjects(tag){
  const items = document.querySelectorAll('[data-proj]');
  items.forEach(el=>{
    const tags = (el.getAttribute('data-tags')||'').toLowerCase();
    el.style.display = tag === 'all' || tags.includes(tag) ? '' : 'none';
  });
}

// Tahun otomatis
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  filterProjects('all');
});
