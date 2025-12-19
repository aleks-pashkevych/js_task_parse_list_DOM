'use strict';

const listItem = document.querySelectorAll('li');
const listRoot = document.querySelector('ul');
// console.log(listRoot);

const newList = sortList(getEmployees(listItem));

listItem.forEach((el) => {
  el.remove();
});

newList.forEach((el) => {
  const listItm = document.createElement('li');

  listItm.textContent = el.name;
  listItm.dataset.position = el.position;
  listItm.dataset.salary = el.salary;
  listItm.dataset.age = el.age;
  listRoot.appendChild(listItm);
});

function sortList(list) {
  return list.sort(function (a, b) {
    if (a.salary < b.salary) {
      return 1;
    }

    if (a.salary > b.salary) {
      return -1;
    }

    return 0;
  });
}

function getEmployees(list) {
  const arr = [];

  list.forEach((el) => {
    const val = {};

    val.name = el.textContent;
    val.position = el.dataset.position;
    val.salary = Number(el.dataset.salary.replace(/[^0-9.-]+/g, ''));
    val.age = Number(el.dataset.age);

    arr.push(val);
  });

  return arr;
}
