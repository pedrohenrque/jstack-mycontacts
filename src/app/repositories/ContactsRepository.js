const { v4 } = require('uuid');
const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.find((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  // bind postgres onde é associado ao $ + posição numérica nos Values // ~no sql-injection
  // '*' após o RETURNING é um alias para retornar todas as colunas

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
