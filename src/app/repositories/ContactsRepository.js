const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Pedro Henrique',
    email: 'pedro@mail.com',
    phone: '213123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'jose@mail.com',
    phone: '213123203423423123',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      resolve(
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.find((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve, reject) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
