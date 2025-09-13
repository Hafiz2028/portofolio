// File: next-i18next.config.js

// Menggunakan require untuk modul 'path'
const path = require('path');

// Menggunakan module.exports untuk mengekspor konfigurasi
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'], // Sesuaikan dengan bahasa Anda
  },
  returnNull: false,
  reloadOnPrerender: process.env.NODE_ENV !== 'production',
  // Logika ini hanya berjalan di server, jadi require aman digunakan
  localePath: path.resolve('./public/locales'),
};