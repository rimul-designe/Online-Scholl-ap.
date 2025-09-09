// demo rozvrh – ISO časy v místním datu
export function fetchLessons() {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');

  const makeTime = (h, min) => `${y}-${m}-${d}T${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}:00`;

  return [
    { id: '1', subject: 'Matematika', topic: 'Zlomky',  start: makeTime(8, 0),  end: makeTime(8, 45),  teacher: 'Novák' },
    { id: '2', subject: 'Čeština',    topic: 'Vyjmenovaná slova', start: makeTime(9, 0),  end: makeTime(9, 45),  teacher: 'Dvořáková' },
    { id: '3', subject: 'Fyzika',     topic: 'Hustota', start: makeTime(10, 0), end: makeTime(10, 45), teacher: 'Kučera' }
  ];
}
