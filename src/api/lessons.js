// src/api/lessons.js
// Jednoduchá “databáze” hodin – časy jsou ISO stringy.
// UPRAV je podle sebe.

const lessons = [
  {
    subject: 'Matematika',
    topic: 'Lineární rovnice',
    // za ~10 minut od teď
    time: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
  },
  {
    subject: 'Čeština',
    topic: 'Skladba věty',
    // za ~2 hodiny
    time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    subject: 'Fyzika',
    topic: 'Newtonovy zákony',
    // zítra v 8:00
    time: (() => {
      const d = new Date();
      d.setDate(d.getDate() + 1);
      d.setHours(8, 0, 0, 0);
      return d.toISOString();
    })(),
  },
];

export function getLessons() {
  return lessons;
}
