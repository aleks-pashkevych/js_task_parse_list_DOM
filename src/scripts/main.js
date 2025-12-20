'use strict';

const list = [...document.querySelectorAll('li')];
const rootList = document.querySelector('ul');
const sorted = sortList(list);

rootList.innerHTML = '';

sorted.forEach((el) => {
  rootList.appendChild(el);
});

getEmployees(list);

function sortList(items) {
  items.sort((a, b) => {
    const currA = helper(a);
    const currB = helper(b);

    return currB - currA;
  });

  return items;
}

function helper(arg) {
  return Number(arg.dataset.salary.replace(/[^0-9.-]+/g, ''));
}

function getEmployees(employees) {
  const arr = [];

  employees.forEach((el) => {
    const val = {};

    val.name = el.textContent;
    val.position = el.dataset.position;
    val.salary = helper(el);
    val.age = Number(el.dataset.age);

    arr.push(val);
  });

  return arr;
}
