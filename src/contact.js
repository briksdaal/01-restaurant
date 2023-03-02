function getContact() {
  const contact = document.createElement('div');
  contact.textContent = 'Contact us';
  contact.classList.add('contact-page');

  return contact;
}

export default getContact;
