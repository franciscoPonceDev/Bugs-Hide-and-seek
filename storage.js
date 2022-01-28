window.onload = function storeInputs() {
  let lStorage = {};

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (localStorage.getItem('contact-form')) {
    lStorage = JSON.parse(localStorage.getItem('contact-form'));
    
    nameInput.value = lStorage.name;
    emailInput.value = lStorage.email;
    messageInput.value = lStorage.message;
    document.getElementById('body').style.cursor = 'none';
  } else {
    document.getElementById('body').style.cursor = 'none';
  }

  nameInput.addEventListener('change', (event) => {
    lStorage.value = { ...lStorage, name: event.target.value };
    localStorage.setItem('contact-form', JSON.stringify(lStorage));
  });

  emailInput.addEventListener('change', (event) => {
    lStorage.value = { ...lStorage, email: event.target.value };
    localStorage.setItem('contact-form', JSON.stringify(lStorage));
  });

  messageInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, message: event.target};
    localStorage.setItem('contact-form', JSON.stringify(lStorage));
  });
};
