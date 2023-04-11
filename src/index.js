import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import "../src/login/form.css"
//import "../src/task7 form/form/form.css"
//import Parent from './task1/parent';
//import Parent from './task2/parent';
//import Parent from './task3/parent';
// import Router from './task4/routing';
//import Parent from './task5/parent';
//import Form from './task6/form';
// import Myform from './task6/myform';
// import Routing from './login/routing';
//import Router from './task7 form/routing';
import Router from './context/routing';
import "../src/context/context.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <Router/>
    </div>
);