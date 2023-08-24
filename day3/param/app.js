const express = require(‘express’);
const app = express();
const PORT = 3000;
// API 1: Menggunakan parameter URL
app.get(‘/api/users/:userId’, (req, res) => {
  const userId = req.params.userId;
  res.send(`Mengambil data untuk user dengan ID ${userId}`);
});
// API 2: Menggunakan parameter query
app.get(‘/api/search’, (req, res) => {
  const searchTerm = req.query.q;
  res.send(`Hasil pencarian untuk: ${searchTerm}`);
});
// API 3: Menggunakan kombinasi parameter URL dan query
app.get(‘/api/products/:productId’, (req, res) => {
  const productId = req.params.productId;
  const sortBy = req.query.sortBy || ‘default’;
  res.send(`Mengambil detail produk dengan ID ${productId}, diurutkan berdasarkan: ${sortBy}`);
});
// API 4: Contoh lain menggunakan parameter query
app.get(‘/api/posts’, (req, res) => {
  const category = req.query.category || ‘all’;
  const page = req.query.page || 1;
  res.send(`Mengambil postingan dari kategori ${category}, halaman ${page}`);
});
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});