const menuItems = [
  { title: 'О нас', href: '#about' },
  { title: 'Что ты делаем', href: '#what_we_make' },
  { title: 'Услуги', href: '#services' },
  { title: 'Преимущества', href: '#advantages' },
  { title: 'Портфолио', href: '#portfolio' },
  { title: 'Связаться с нами', href: '#contact_us' },
];

generateMenu();

function generateMenu() {
  const element = document.querySelector('#menu-items');

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.classList.add('menu-item');
    
    a.setAttribute('href', item.href);
    a.textContent = item.title;
    li.appendChild(a);

    element.appendChild(li);
  });
}