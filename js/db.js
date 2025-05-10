const apiUrl = 'https://nettuts.hu/jms/ImBenny95/'; // csak a gyökér URL

// Az összes adat lekérdezése GET metódussal
export const getAll = (entity = 'cinema') => {
  return fetch(apiUrl + entity).then(res => res.json());
};

// Egy adott elem törlése ID alapján
export const remove = (id, entity = 'cinema') => {
  return fetch(apiUrl + entity + '/' + id, {
    method: 'DELETE'
  });
};