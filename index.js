// const express = require('express');
import express from 'express';
const app = express();
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// const path = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './views/contact.html'));
});

app.get('/signIn', (req, res) => {
    res.sendFile(path.join(__dirname, './views/signIn.html'));
});

app.get('/signUp', (req, res) => {
    res.sendFile(path.join(__dirname, './views/signUp.html'));
});

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
