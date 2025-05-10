import { getAll, remove } from './db.js';

const table = document.querySelector('table.table');

const generateTable = (data = []) => {
    console.log(data);

    table.innerHTML = '';

    if (data.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.innerText = 'Nincs megjeleníthető adat.';
        table.parentElement.appendChild(emptyMessage);
        return;
    }

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const keys = Object.keys(data[0]);
    const tr = document.createElement('tr');
    thead.appendChild(tr);

    keys.forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    });

    const th = document.createElement('th');
    th.innerText = 'Műveletek';
    tr.appendChild(th);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    data.forEach(row => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        keys.forEach(key => {
            const td = document.createElement('td');
            td.innerText = row[key];
            tr.appendChild(td);
        });

        const td = document.createElement('td');
        tr.appendChild(td);

        const btnGroup = document.createElement('div');
        btnGroup.classList.add('btn-group');

        const infoBtn = document.createElement('button');
        infoBtn.classList.add('btn', 'btn-info');
        infoBtn.innerHTML = '<i class="fas fa-info-circle"></i> Megtekintés';
        btnGroup.appendChild(infoBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Törlés';
        btnGroup.appendChild(deleteBtn);

        td.appendChild(btnGroup);

        deleteBtn.addEventListener('click', async () => {
            await remove(row.id);
            tr.remove();
        });
    });
};

getAll().then(data => generateTable(data));