import { Router } from 'express';
import path from 'path';
import hbs from 'handlebars';
const { readFile } = require('fs').promises;

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const file = await readFile(path.resolve(__dirname, '..', 'public', 'index.hbs'), 'utf-8');
    const hbsTemplate = hbs.compile(file);
    const components = renderToString(<App />);
    const finalHtml = hbsTemplate({ components });
    console.log('something');
    res.send(finalHtml);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;