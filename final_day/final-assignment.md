# Tugas Pembuatan RESTful API dengan Express.js

## Deskripsi Tugas

Anda diminta untuk membuat sebuah RESTful API menggunakan Express.js dengan beberapa persyaratan sebagai berikut:

1. Buat setidaknya 10 endpoint API yang berelasi. Anda dapat memilih jenis entitas atau fungsionalitas yang sesuai dengan proyek Anda, misalnya: User, Produk, Pesanan, dll.

2. Gunakan MongoDB sebagai database untuk menyimpan dan mengelola data.

3. Implementasikan konsep Model-View-Controller (MVC) untuk mengatur kode Anda dengan baik.

4. Gunakan JSON Web Token (JWT) untuk mengimplementasikan sistem otorisasi.

5. Buat sistem login dengan email dan password, lalu kirimkan token JWT kepada pengguna yang berhasil login.

6. Implementasikan middleware role untuk melindungi beberapa API agar hanya dapat diakses oleh pengguna dengan peran tertentu.

7. Beberapa endpoint API harus terbuka untuk publik, misalnya endpoint untuk registrasi pengguna atau melihat daftar produk.

8. Buat logging ke dalam file yang mencakup proses error dan setiap request yang masuk.

9. Gunakan dotenv untuk mengelola variabel lingkungan seperti konfigurasi database dan kunci rahasia JWT.

## Struktur Proyek

Anda disarankan untuk mengorganisasi proyek Anda dengan struktur berikut:

project-folder/  
|-- controllers/  
| |-- userController.js  
| |-- productController.js  
| |-- ...  
|-- models/  
| |-- User.js  
| |-- Product.js  
| |-- ...  
|-- routes/  
| |-- authRoutes.js  
| |-- userRoutes.js  
| |-- productRoutes.js  
| |-- ...  
|-- middlewares/  
| |-- authMiddleware.js  
| |-- roleMiddleware.js  
| |-- ...  
|-- config/  
| |-- db.js  
| |-- jwt.js  
|-- .env  
|-- app.js   


## Langkah-langkah Implementasi

Berikut langkah-langkah yang dapat Anda ikuti untuk mengimplementasikan tugas ini:

1. Inisialisasi proyek Node.js dan instalasi paket-paket yang diperlukan seperti `express`, `mongoose`, `jsonwebtoken`, `dotenv`, `winston`, dan lainnya.

2. Buat konfigurasi database MongoDB di dalam file `db.js` dalam folder `config`.

3. Buat konfigurasi JWT di dalam file `jwt.js` dalam folder `config`.

4. Set up Express.js di dalam file `app.js`. Terapkan middleware seperti `body-parser`, `cors`, `morgan`, dan lainnya.

5. Buat route dan controller untuk setiap entitas atau fungsi yang Anda inginkan. Implementasikan operasi CRUD (Create, Read, Update, Delete) sesuai kebutuhan.

6. Implementasikan sistem login dengan email dan password di dalam file `authController.js` dan `authRoutes.js`. Gunakan JWT untuk menghasilkan token setelah login berhasil.

7. Buat middleware `roleMiddleware.js` untuk mengendalikan akses ke API berdasarkan peran pengguna.

8. Lindungi beberapa endpoint yang memerlukan otorisasi dengan middleware yang sesuai.

9. Buat endpoint API yang terbuka untuk publik seperti registrasi pengguna atau melihat daftar produk.

10. Terapkan logging ke dalam file menggunakan `winston` untuk mencatat proses error dan request yang masuk.

11. Setel variabel lingkungan dalam file `.env` seperti URL MongoDB, kunci rahasia JWT, dan lainnya.

12. Terakhir, buat file `app.js` untuk menjalankan server Express Anda.

## Penilaian

Anda akan dinilai berdasarkan kemampuan Anda untuk mengimplementasikan semua persyaratan yang telah disebutkan di atas, struktur kode yang baik, dokumentasi yang jelas, serta keamanan dan efisiensi proyek Anda.

Selamat mengerjakan tugas ini!
