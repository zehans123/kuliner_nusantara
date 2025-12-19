const foodData = {
  'rendang': {
    title: 'Rendang Minangkabau',
    img: 'rendang.jpeg',
    desc: 'Rendang adalah masakan tradisional Minangkabau yang dibuat dari daging sapi pilihan yang dimasak perlahan dengan santan dan campuran rempah-rempah khas seperti serai, lengkuas, jahe, kunyit, cabai, dan bawang. Proses memasak yang lama menghasilkan tekstur daging empuk dan bumbu meresap sempurna hingga menghasilkan rasa gurih, pedas, dan kaya rempah. Rendang juga dikenal mampu bertahan lama tanpa bahan pengawet karena teknik memasaknya yang unik, dan bahkan dinobatkan sebagai salah satu makanan terenak di dunia.'
  },
  'gudeg': {
    title: 'Gudeg Yogyakarta',
    img: 'gudeg.jpeg',
    desc: 'Gudeg merupakan makanan khas Yogyakarta yang terbuat dari nangka muda (gori) yang dimasak dengan santan, gula merah, dan bumbu rempah seperti bawang merah, bawang putih, lengkuas, serta daun salam. Proses memasak yang memakan waktu lama membuat gudeg memiliki rasa manis yang khas serta tekstur lembut. Biasanya disajikan bersama ayam kampung, telur, tahu, tempe, dan sambal goreng krecek yang gurih dan pedas. Gudeg menjadi ikon kuliner Jogja yang wajib dicoba wisatawan.'
  },
  'sotobanjar': {
    title: 'Soto Banjar',
    img: 'soto-banjar.jpeg',
    desc: 'Soto Banjar adalah soto khas masyarakat Banjar di Kalimantan Selatan yang memiliki kuah bening kekuningan dengan cita rasa harum rempah seperti kayu manis, cengkih, kapulaga, dan bawang. Isiannya terdiri dari suwiran ayam, perkedel, dan potongan telur rebus. Soto ini biasanya disajikan bersama ketupat atau lontong, ditambah sambal dan jeruk limau untuk memberikan rasa segar. Rasanya ringan, gurih, dan sangat cocok dinikmati kapan saja.'
  },
  'cotomakassar': {
    title: 'Coto Makassar',
    img: 'coto-makasar.jpeg',
    desc: 'Coto Makassar merupakan sup daging khas Makassar yang terbuat dari jeroan dan daging sapi yang direbus lama hingga empuk. Kuahnya unik karena berbahan dasar kacang tanah yang dihaluskan dan dicampur dengan berbagai rempah, sehingga menghasilkan rasa gurih, pekat, dan sedikit creamy. Biasanya disajikan bersama buras atau ketupat, dilengkapi dengan sambal kacang dan jeruk nipis untuk menambah cita rasa. Coto Makassar menjadi salah satu kuliner tradisional paling populer dari Sulawesi Selatan.'
  },
  'ayambetutu': {
    title: 'Ayam Betutu',
    img: 'ayam-betutu.jpeg',
    desc: 'Ayam Betutu adalah hidangan khas Bali berupa ayam utuh yang dilumuri bumbu lengkap berupa cabai, bawang, kunyit, jahe, lengkuas, kemiri, serta rempah bali lainnya. Ayam kemudian dibungkus dengan daun pisang atau daun kelapa dan dimasak dalam waktu lama hingga bumbu meresap ke seluruh bagian daging. Rasanya pedas, gurih, dan sangat aromatik. Ayam Betutu biasanya disajikan pada upacara adat dan kini menjadi salah satu kuliner wajib bagi wisatawan yang berkunjung ke Bali.'
  }
};

function openModal(key) {
  const data = foodData[key];
  if (data) {
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalImg').src = data.img;

    document.getElementById('foodModal').style.display = "block";
  }
}

function closeModal() {
  document.getElementById('foodModal').style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('foodModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
