const apiUrl = 'https://nettuts.hu/jms/ImBenny95/';

export const getAll = (entity = 'cinema') => {
  return fetch(apiUrl + entity).then(res => res.json());
};

export const remove = (id, entity = 'cinema') => {
  return fetch(apiUrl + entity + '/' + id, {
    method: 'DELETE'
  });
};