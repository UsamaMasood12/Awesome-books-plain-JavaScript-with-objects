import
BookManagement
from './modules/bookmanagement.js';
import
addNew
from './modules/addNew.js';
import
removeBooks
from './modules/removeBooks.js';
import {
  showListSection,
  showAddNew,
  showContact,
} from './modules/navigation.js';
import {
  DateTime,
} from './modules/luxon.js';

const addForm = document.querySelector('form');
const navListBtn = document.querySelector('#nav-list');
const navAddNewBtn = document.querySelector('#nav-add-new');
const navContactBtn = document.querySelector('#nav-contact');

