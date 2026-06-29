// const sampleListings = [
//   {
//     title: "Olive Villa",
//     description:
//       "At Olive Villa, comfort meets nature, promising a serene stay that rejuvenates the mind and soul.”",
//     price: 3199,
//     location:
//       "Near Malas Factory, Nandanvan Society A, Villa No. 9, Panchgani-Mahabaleshwar Road.",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.8567, 18.5204], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 1.jpg", url: "/images/vila 1.jpg" },
//       { filename: "vila 2.jpg", url: "/images/vila 2.jpg" },
//       { filename: "vila 3.jpg", url: "/images/vila 3.jpg" },
//       { filename: "vila 4.jpg", url: "/images/vila 4.jpg" },
//       { filename: "vila 6.jpg", url: "/images/vila 6.jpg" },
//     ],
//   },
//   {
//     title: "Forest Nature Villa",
//     description:
//       "Escape to Forest Nature Villa – where luxury meets nature in the heart of Mahabaleshwar.",
//     price: 15000,
//     location: "Machutar, near Bagdad Point, Mahabaleshwar, Maharashtra 415012",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.73268673760927, 17.86695825382404], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 6.jpg", url: "/images/vila 6.jpg" },
//       { filename: "vila 7.jpg", url: "/images/vila 7.jpg" },
//       { filename: "vila 8.jpg", url: "/images/vila 8.jpg" },
//       { filename: "vila 9.jpg", url: "/images/vila 9.jpg" },
//       { filename: "vila 10.jpg", url: "/images/vila 10.jpg" },
//     ],
//   },
//   {
//     title: "Gold Mist villa",
//     description:
//       "Where clouds kiss the hills — Gold Mist Villa lets you wake up to luxury draped in nature’s calm",
//     price: 45800,
//     location:
//       "Old Mahabaleshwar − Nakinda Road, Gold Mist, Ahead of Ramsukh Hotel, Kshetra, Old Mahabaleshwar, Mahabaleshwar, Satara, Maharashtra, 412806",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.6633, 17.9247], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 11.jpeg", url: "/images/vila 11.jpeg" },
//       { filename: "vila 12.jpg", url: "/images/vila 12.jpg" },
//       { filename: "vila 13.jpeg", url: "/images/vila 13.jpeg" },
//       { filename: "vila 14.jpeg", url: "/images/vila 14.jpeg" },
//       { filename: "vila 15.jpeg", url: "/images/vila 15.jpeg" },
//     ],
//   },
//   {
//     title: "Rigveda Villa",
//     description:
//       "Rigveda Villa offers an unforgettable escape with panoramic views, elegant interiors, and world-class amenities.",
//     price: 69420,
//     location:
//       "70, Hilltop Lane, Opposite Dukes Resort, Old Mumbai–Pune Highway, Khandala, Lonavala, Maharashtra 410301",
//     geometry: {
//       type: "Point",
//       coordinates: [73.36878301630625, 18.76097275387879], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 16.jpeg", url: "/images/vila 16.jpeg" },
//       { filename: "vila 17.jpeg", url: "/images/vila 72.jpeg" },
//       { filename: "vila 18.jpeg", url: "/images/vila 18.jpeg" },
//       { filename: "vila 19.jpeg", url: "/images/vila 19.jpeg" },
//       { filename: "vila 20.jpeg", url: "/images/vila 20.jpeg" },
//     ],
//   },
//   {
//     title: " Villa Capri",
//     description:
//       "Wake up to the hills, relax by your private pool — Villa Capri is your sanctuary in Lonavala",
//     price: 70000,
//     location:
//       "Chawdi Mohalla Rd, Limaye Wadi, Alibag, Kurvande, Lonavala, Maharashtra 410401",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.4083, 18.7467], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 21.jpeg", url: "/images/vila 21.jpeg" },
//       { filename: "vila 22.jpeg", url: "/images/vila 22.jpeg" },
//       { filename: "vila 23.jpeg", url: "/images/vila 23.jpeg" },
//       { filename: "vila 24.jpeg", url: "/images/vila 24.jpeg" },
//       { filename: "vila 25.jpeg", url: "/images/vila 25.jpeg" },
//     ],
//   },
//   {
//     title: "Casa Frangipani",
//     description: "Where the whisper of palms meets the rhythm of the sea.",
//     price: 63488,
//     location:
//       "Dhokawade (near Dhokawade Hospital), Taluka Alibag, District Raigad, Maharashtra",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [72.88, 18.78], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 29.jpg", url: "/images/vila 29.jpg" },
//       { filename: "vila 27.jpg", url: "/images/vila 27.jpg" },
//       { filename: "vila 28.jpg", url: "/images/vila 28.jpg" },
//       { filename: "vila 26.jpg", url: "/images/vila 26.jpg" },
//       { filename: "vila 30.jpg", url: "/images/vila 30.jpg" },
//     ],
//   },
//   {
//     title: "Cavo Villa",
//     description: "Where every sunrise feels like a personal painting",
//     price: 35000,
//     location: "House Number 440, Lonare, Thal,Alibag, Maharashtra 402207",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [72.85667, 18.69615], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 31.png", url: "/images/vila 31.png" },
//       { filename: "vila 32.png", url: "/images/vila 32.png" },
//       { filename: "vila 33.png", url: "/images/vila 33.png" },
//       { filename: "vila 34.png", url: "/images/vila 34.png" },
//       { filename: "vila 35.png", url: "/images/vila 35.png" },
//     ],
//   },
//   {
//     title: " Aqua Villa",
//     description:
//       "Discover tranquility at Aqua Villa, where modern comforts meet serene surroundings, offering the perfect escape for families and groups seeking relaxation and rejuvenation",
//     price: 54000,
//     location:
//       "Bungalow No. 534, Swami Samarth Nagar, Pimplebhat, Alibaug, Maharashtra 402209",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [72.8792, 18.6365], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 36.png", url: "/images/vila 36.png" },
//       { filename: "vila 37.png", url: "/images/vila 37.png" },
//       { filename: "vila 38.png", url: "/images/vila 38.png" },
//       { filename: "vila 39.jpg", url: "/images/vila 39.jpg" },
//       { filename: "vila 40.jpg", url: "/images/vila 40.jpg" },
//     ],
//   },
//   {
//     title: " Nivritti Villa",
//     description:
//       "A tranquil retreat nestled just steps away from Matheran Railway Station, where verdant hills embrace the villa and every dawn unfolds over mist-clad valleys — Nivritti Villa offers serenity in the heart of the Western Ghats.”",
//     price: 70000,
//     location:
//       "Nivritti Villa MG Road, Opposite Matheran Railway Station,Matheran, Raigad District,Maharashtra 410102",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.271179, 18.988659], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 41.jpg", url: "/images/vila 41.jpg" },
//       { filename: "vila 42.jpg", url: "/images/vila 42.jpg" },
//       { filename: "vila 43.jpg", url: "/images/vila 43.jpg" },
//       { filename: "vila 44.jpg", url: "/images/vila 44.jpg" },
//       { filename: "vila 45.jpg", url: "/images/vila 45.jpg" },
//     ],
//   },
//   {
//     title: " Mawi Infinity Villa",
//     description:
//       "Where the Pawna Lake mirrors the skies, framed by the Sahyadri hills — an infinity pool, lush forest, and serene lake views converge to cradle you in nature’s own luxury",
//     price: 115000,
//     location: "Pawna Dam, Kolechafesar, Pawna Lake, Lonavala, Maharashtra ",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.46385780723669, 18.67141955297364], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 46.jpg", url: "/images/vila 46.jpg" },
//       { filename: "vila 47.jpg", url: "/images/vila 47.jpg" },
//       { filename: "vila 48.jpg", url: "/images/vila 48.jpg" },
//       { filename: "vila 49.jpg", url: "/images/vila 49.jpg" },
//       { filename: "vila 50.jpg", url: "/images/vila 50.jpg" },
//     ],
//   },
//   {
//     title: " SaffronStays Parsi Manor",
//     description:
//       "Step into the timeless charm of a 130-year-old colonial Parsi manor nestled high among Matheran’s misty hills — where verandahs echo with history, Irani chai warms your hands, and lush forested valleys spread as far as the eye can see",
//     price: 12188,
//     location:
//       "Keki Lodge, Next to Byke Resort, Kasturba Road, Matheran, Raigad District, Maharashtra 410102",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.26788, 18.97961], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 51.jpg", url: "/images/vila 51.jpg" },
//       { filename: "vila 52.jpg", url: "/images/vila 52.jpg" },
//       { filename: "vila 53.jpg", url: "/images/vila 53.jpg" },
//       { filename: "vila 54.jpg", url: "/images/vila 54.jpg" },
//       { filename: "vila 55.jpg", url: "/images/vila 55.jpg" },
//     ],
//   },
//   {
//     title: " SaffronStays Apricus Farm",
//     description:
//       "An organic escape tucked among Karjat’s rolling hills — where a private pool, fruit-orchards and mountain vistas come together at Apricus Farm to offer peace under open skies",
//     price: 16422,
//     location:
//       "Plot No. 10, Nisarg Darshan, Falodhyan Vikas Sahakari Society, PO Vaverle,Taluka Khalapur, Dist. Raigad, Maharashtra 410102",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.28584, 18.91201], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 56.jpg", url: "/images/vila 56.jpg" },
//       { filename: "vila 57.jpg", url: "/images/vila 57.jpg" },
//       { filename: "vila 58.jpg", url: "/images/vila 58.jpg" },
//       { filename: "vila 59.jpg", url: "/images/vila 59.jpg" },
//       { filename: "vila 60.jpg", url: "/images/vila 60.jpg" },
//     ],
//   },
//   {
//     title: "Vintage Estate",
//     description:
//       "Perched by a tranquil lake, Vintage Estate is a romantic refuge where vintage charm meets nature’s calm — lounge by your private plunge pool, gaze across rolling lawns and river-views, and let each sunset paint the skies in hues you’ll never forget.",
//     price: 19000,
//     location:
//       "Vintage Estate (StayVista at Vintage Estate)Karjat Murbad Road, Ladivali, Taluka: Karjat, Post: Tiware, Dist. Raigad, Maharashtra 410201",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.3363, 18.9277], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 61.jpg", url: "/images/vila 61.jpg" },
//       { filename: "vila 62.jpg", url: "/images/vila 62.jpg" },
//       { filename: "vila 63.jpg", url: "/images/vila 63.jpg" },
//       { filename: "vila 64.jpg", url: "/images/vila 64.jpg" },
//       { filename: "vila 65.jpg", url: "/images/vila 65.jpg" },
//     ],
//   },
//   {
//     title: " Konkan Villas",
//     description:
//       "Where the Konkan sea whispers to your veranda, palm fronds sway in ocean breezes, and every sunrise paints the waves in gold — your villa by the shore, a quiet poem in sand and sea.",
//     price: 65000,
//     location:
//       "At Post Murud-Harnai, Taluka Dapoli, District Ratnagiri, Maharashtra, India",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.11458, 17.78023], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 66.jpg", url: "/images/vila 66.jpg" },
//       { filename: "vila 67.jpg", url: "/images/vila 67.jpg" },
//       { filename: "vila 68.jpg", url: "/images/vila 68.jpg" },
//       { filename: "vila 69.jpg", url: "/images/vila 69.jpg" },
//       { filename: "vila 70.jpg", url: "/images/vila 70.jpg" },
//     ],
//   },
//   {
//     title: "Serenity Villa",
//     description:
//       "Where sustainable architecture meets panoramic vistas—immerse yourself in the tranquility of Urmodi's backwaters and the surrounding hills.",
//     price: 60000,
//     location:
//       "House No. 100, Machutar Village, Satara-Medha-Mahabaleshwar Road, Satara, Maharashtra 412806",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.5, 17.5], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 71.jpg", url: "/images/vila 71.jpg" },
//       { filename: "vila 72.jpg", url: "/images/vila 72.jpg" },
//       { filename: "vila 73.jpg", url: "/images/vila 73.jpg" },
//       { filename: "vila 74.jpg", url: "/images/vila 74.jpg" },
//       { filename: "vila 75.jpg", url: "/images/vila 75.jpg" },
//     ],
//   },
//   {
//     title: "Sunil’s Villa ",
//     description:
//       "Hidden in the greenery of Kashele,Cozy Nest Villa is your private oasis — swim in your pool framed by mountain vistas, dine out under starlit skies, and wake to mist-kissed hills every morning",
//     price: 20000,
//     location:
//       "unil Villa, Plot No. 11, Tattva Life Project Phase 2, Party Area, Village Pinglas, Karjat, Maharashtra 410201",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.4, 18.85], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 81.jpg", url: "/images/vila 81.jpg" },
//       { filename: "vila 82.jpg", url: "/images/vila 82.jpg" },
//       { filename: "vila 83.jpg", url: "/images/vila 83.jpg" },
//       { filename: "vila 84.jpg", url: "/images/vila 84.jpg" },
//       { filename: "vila 85.jpg", url: "/images/vila 85.jpg" },
//     ],
//   },
//   {
//     title: "Orchard  villa",
//     description:
//       "Nestled by the river amidst lush orchards, this villa offers a tranquil retreat with a private pool, bonfire, and BBQ facilities — perfect for unwinding in nature's embrace",
//     price: 60313,
//     location: "Mugape, River Song Estate, Sangavi, Karjat, Maharashtra 410201",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.336, 18.929], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 86.jpg", url: "/images/vila 86.jpg" },
//       { filename: "vila 87.jpg", url: "/images/vila 87.jpg" },
//       { filename: "vila 88.jpg", url: "/images/vila 88.jpg" },
//       { filename: "vila 89.jpg", url: "/images/vila 89.jpg" },
//       { filename: "vila 90.jpg", url: "/images/vila 90.jpg" },
//     ],
//   },
//   {
//     title: "Whistling Woods Villa",
//     description:
//       "Wake to the hush of rainforest leaves, drift in the mist-kissed mornings, and lose yourself in a villa cradled by Amboli’s wild green heart",
//     price: 62000,
//     location:
//       "040, Whistling Woods, Bazarwadi (Bazarwadi / Bazar Wadi), Amboli, Taluka Sawantwadi, District Sindhudurg, Maharashtra – 416510.",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [74.008, 15.954], // [lng, lat]
//     },
//     images: [
//       { filename: "vila 91.jpg", url: "/images/vila 91.jpg" },
//       { filename: "vila 92.jpg", url: "/images/vila 92.jpg" },
//       { filename: "vila 93.jpg", url: "/images/vila 93.jpg" },
//       { filename: "vila 94.jpg", url: "/images/vila 94.jpg" },
//       { filename: "vila 95.jpg", url: "/images/vila 95.jpg" },
//     ],
//   },
// ];
// module.exports = { data: sampleListings };
