function getContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact-page');

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';

  const contactContent = document.createElement('div');
  contactContent.classList.add('contact-content');

  const details = document.createElement('div');
  details.classList.add('details');

  const address1 = document.createElement('p');
  address1.textContent = '175 W 87th St';

  const address2 = document.createElement('p');
  address2.textContent = 'New York, NY 10024, USA';

  const tel = document.createElement('a');
  tel.textContent = '(123) 456-7890';
  tel.href = 'tel:123456789';

  const openingHours1 = document.createElement('p');
  openingHours1.textContent = 'Monday - Friday: 11:00 AM - 10:00 PM';

  const openingHours2 = document.createElement('p');
  openingHours2.textContent = 'Saturday - Sunday: 9:00 AM - 9:00 PM';

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  details.appendChild(overlay);
  details.appendChild(openingHours1);
  details.appendChild(openingHours2);
  details.appendChild(address1);
  details.appendChild(address2);
  details.appendChild(tel);

  const map = document.createElement('iframe');
  const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.840686570091!2d-73.97487062837831!3d40.787516456496064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258837dc90d81%3A0x9939b9657af5b99f!2s175%20W%2087th%20St%2C%20New%20York%2C%20NY%2010024%2C%20USA!5e0!3m2!1sen!2sil!4v1677797362648!5m2!1sen!2sil';
  map.src = src;

  contactContent.appendChild(details);
  contactContent.appendChild(map);

  contact.appendChild(contactHeading);
  contact.appendChild(contactContent);

  return contact;
}

export default getContact;
