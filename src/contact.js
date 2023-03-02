function getContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact-page');

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';

  const contactContent = document.createElement('div');
  contactContent.classList.add('contact-content');

  contact.appendChild(contactHeading);
  contact.appendChild(contactContent);

  return contact;
}

export default getContact;
