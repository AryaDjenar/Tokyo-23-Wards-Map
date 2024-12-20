const wards = document.querySelectorAll("g");
const infoBox = document.getElementById("info-box");
const wardName = document.getElementById("ward-name");
const wardDescription = document.getElementById("ward-description");
const closeBtn = document.getElementById("close-btn");

const wardData = {
    Edogawa: {
        flag: "Wards emblem/Edogawa-emblem.svg", 
        name: "Edogawa",
        kanji: "江戸川区",
        meaning: "Edo (江戸) means 'Edo City,' and kawa (川) means 'river.'",
        mainCity: "Kasai and Nishikasai",
        mainTrainStation: "Kasai Station (Tokyo Metro Tozai Line)",
        population: "Approximately 697,932 as of October 1, 2020",
        briefHistory: "Established in 1937 through the merger of seven towns and villages. Urbanized after World War II.",
        famousFood: "Monjayaki and traditional Japanese sweets.",
        landmarks: [
            { name: "Kasai Rinkai Park", link: "https://www.google.com/maps/place/Kasai+Rinkai+Park/@35.641989,139.857751,17z/data=!3m1!4b1!4m6!3m5!1s0x60187d518db27a07:0x16a09c88d4b35113!8m2!3d35.6419847!4d139.8603206!16zL20vMDh0NXQ1?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Edogawa Natural Zoo", link: "https://www.google.com/maps/place/Edogawa+City+Nature+Zoo/@35.6710531,139.8558325,17z/data=!3m1!4b1!4m6!3m5!1s0x601887dec4f261c9:0x8ee1ac2d27261b!8m2!3d35.6710488!4d139.8584021!16s%2Fg%2F1227d3zx?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Crystal View Observatory", link: "https://www.google.com/maps/place/Crystal+View+Rest+House/@35.6406241,139.8569709,17z/data=!3m1!4b1!4m6!3m5!1s0x601862aa70dba733:0x98f7bcddaa120d53!8m2!3d35.6406198!4d139.8595458!16s%2Fg%2F11clvrtz7q?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Ichinoe Nanushi Yashiki", link: "https://www.google.com/maps/place/Ichinoe+Nanushi+Yashiki/@35.6981705,139.8894779,17z/data=!3m1!4b1!4m6!3m5!1s0x601887acb6fbffff:0x9f869e11227009f6!8m2!3d35.6981705!4d139.8894779!16s%2Fg%2F11bwf544z5?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shinkawa Park (Sumidagawa Terrace)", link: "https://www.google.com/maps/place/Shinkawa+Park+(Sumidagawa+Terrace)/@35.6745539,139.7857472,17z/data=!4m6!3m5!1s0x6018893f32f2c6af:0x6901ae92de870189!8m2!3d35.6745539!4d139.7857472!16s%2Fg%2F1237vz1y?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Edogawa,_Tokyo"
    },
    Adachi: {
        flag: "Wards emblem/Adachi-emblem.svg", 
        name: "Adachi",
        kanji: "足立区",
        meaning: "足 (Ashi) means 'foot' or 'leg,' and 立 (Tachi) means 'stand.' Together, it suggests 'standing on one's own feet.'",
        mainCity: "Kita-Senju, Ayase, Toneri",
        mainTrainStation: "Kita-Senju Station (JR East, Tokyo Metro, Tobu Lines)",
        population: "Approximately 692,707 as of October 1, 2020",
        briefHistory: "Established in 1947, Adachi has a history as a transportation hub. Kita-Senju was a key post town during the Edo period.",
        famousFood: "Senju Kuroame (traditional black candy), Soba, and Edomae Sushi.",
        landmarks: [
            { name: "Toneri Park", link: "https://www.google.com/maps/place/Toneri+Park/@35.7971518,139.7682445,17z/data=!3m1!4b1!4m6!3m5!1s0x6018922b7b2af3cf:0xde27454208072e69!8m2!3d35.7971475!4d139.7708141!16s%2Fg%2F12264gjp?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Nishiarai Daishi Temple", link: "https://www.google.com/maps/place/Nishiarai+Daishi/@35.7800548,139.7774756,17z/data=!3m1!4b1!4m6!3m5!1s0x601891f233682141:0x96b4a8a1cded0737!8m2!3d35.7800505!4d139.7800452!16s%2Fg%2F121_5_hq?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Motofuchie Park", link: "https://www.google.com/maps/place/Motofuchie+Park/@35.7926802,139.803889,17z/data=!3m1!4b1!4m6!3m5!1s0x601891c9b6bc1d2d:0x29c75af17066da18!8m2!3d35.7926759!4d139.8064586!16s%2Fg%2F11b62_b99f?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Galaxcity", link: "https://www.google.com/maps/place/Galaxcity/@35.7797733,139.7879294,17z/data=!3m2!4b1!5s0x601891e889f79fbf:0x5f6d35671fff52f0!4m6!3m5!1s0x601891e8f43d821b:0x6ff2af520de04088!8m2!3d35.779769!4d139.790499!16s%2Fg%2F120lwv6d?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shobu Numa Park", link: "https://www.google.com/maps/search/shobu+numa+park/@35.7772853,139.7123685,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Adachi,_Tokyo"
    },
    Katsushika: {
        flag: "Wards emblem/Katsushika-emblem.svg", 
        name: "Katsushika",
        kanji: "葛飾区",
        meaning: "葛 (Kuzu) means 'kudzu vine,' and 飾 (Shika) means 'decorate' or 'ornament.'",
        mainCity: "Shibamata, Aoto, Kanamachi",
        mainTrainStation: "Kameari Station (JR Joban Line)",
        population: "Approximately 460,567 as of October 1, 2020",
        briefHistory: "Katsushika is a historically rich ward, famous for its depictions in traditional ukiyo-e art and for being home to the nostalgic 'Shibamata Taishakuten Temple.'",
        famousFood: "Yokan (traditional sweet bean jelly) and Shibamata dango (sweet rice dumplings).",
        landmarks: [
            { name: "Shibamata Taishakuten Temple", link: "https://www.google.com/maps/place/Shibamata+Taishakuten/@35.7584104,139.8738244,16z/data=!3m1!4b1!4m6!3m5!1s0x601885a32dacd473:0x550a90c0da0aaf97!8m2!3d35.7584061!4d139.8784378!16s%2Fm%2F0gmbz5c?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Yagiri no Watashi", link: "https://www.google.com/maps/place/Yagiri+no+Watashi/@35.7594582,139.8657454,15z/data=!4m10!1m2!2m1!1syagiri+no+watashi!3m6!1s0x601885bae9dec051:0x8bb6ba96b2a322d9!8m2!3d35.7594582!4d139.8837698!15sChF5YWdpcmkgbm8gd2F0YXNoaVoTIhF5YWdpcmkgbm8gd2F0YXNoaZIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSd01EUlBZemRCUlJBQuABAPoBBAgAECk!16s%2Fg%2F1q5bm034n?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Mizumoto Park", link: "https://www.google.com/maps/place/Mizumoto+Park/@35.7864756,139.866708,17z/data=!3m1!4b1!4m6!3m5!1s0x60188543f1d73dd3:0xcb856228a574508!8m2!3d35.7864713!4d139.8692829!16s%2Fm%2F0g5669z?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Katsushika City Museum", link: "https://www.google.com/maps/place/Katsushika+City+Museum/@35.7529384,139.8386048,17z/data=!3m1!4b1!4m6!3m5!1s0x60188f77e9aa199b:0xc02f0322c3f6b9d9!8m2!3d35.7529341!4d139.8432182!16s%2Fg%2F1212xjwr?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Yamamoto Tei", link: "https://www.google.com/maps/place/Yamamoto-tei/@35.7580225,139.8776007,17z/data=!3m2!4b1!5s0x601885bc9f93c57b:0xa230d50ac7f05fe0!4m6!3m5!1s0x601885bc9f617471:0xec6091ba1a62b33f!8m2!3d35.7580182!4d139.8801756!16s%2Fg%2F121djs34?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Katsushika"
    },
    Kita: {
        flag: "Wards emblem/Kita-emblem.svg", 
        name: "Kita",
        kanji: "北区",
        meaning: "北 (Kita) means 'north,' reflecting its geographical location in Tokyo.",
        mainCity: "Akabane, Oji, Takinogawa",
        mainTrainStation: "Akabane Station (JR East, Tokyo Metro)",
        population: "Approximately 345,056 as of October 1, 2020",
        briefHistory: "Kita City has a rich history as a transportation hub and a center for commerce and culture since the Edo period.",
        famousFood: "Oji Inari sushi and traditional senbei rice crackers.",
        landmarks: [
            { name: "Asukayama Park", link: "https://www.google.com/maps/place/Asukayama+Park/@35.7504761,139.7362532,17z/data=!3m1!4b1!4m6!3m5!1s0x601892788a3cd869:0x138fc1d9c26dccca!8m2!3d35.7504718!4d139.7388228!16s%2Fm%2F0j42948?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Oji Shrine", link: "https://www.google.com/maps/place/Oji+Shrine/@35.7533945,139.7357547,17z/data=!3m1!4b1!4m6!3m5!1s0x6018927c6a24915d:0xe90028632b6e1312!8m2!3d35.7533945!4d139.7357547!16s%2Fg%2F121vrgyb?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shibusawa Memorial Museum", link: "https://www.google.com/maps/place/Shibusawa+Memorial+Museum/@35.7491271,139.7366224,16z/data=!3m1!4b1!4m6!3m5!1s0x601892788596be71:0x1b536380ad7f7b96!8m2!3d35.7491228!4d139.739192!16s%2Fg%2F1223qz1g?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Nanushinotaki Park", link: "https://www.google.com/maps/place/Nanushinotaki+Park/@35.7573224,139.7298348,17z/data=!3m1!4b1!4m6!3m5!1s0x601892627e56935d:0x62f76e6441ab7a73!8m2!3d35.7573181!4d139.7324044!16s%2Fg%2F121tncnh?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Paper Museum", link: "https://www.google.com/maps/place/Paper+Museum/@35.749872,139.738658,16z/data=!3m2!4b1!5s0x60189278ede37ef1:0x22483f328f065abb!4m6!3m5!1s0x60189278e9455555:0x2866f252e3a5eec3!8m2!3d35.749872!4d139.738658!16s%2Fg%2F12125bv0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Kita,_Tokyo"
    },
    Itabashi: {
        flag: "Wards emblem/Itabashi-emblem.svg", 
        name: "Itabashi",
        kanji: "板橋区",
        meaning: "Itabashi (板橋) means 'plank bridge,' referencing a historic wooden bridge in the area.",
        mainCity: "Narimasu, Takashimadaira",
        mainTrainStation: "Itabashi Station (JR Saikyo Line) and Narimasu Station (Tokyo Metro Yurakucho Line)",
        population: "Approximately 578,932 as of October 1, 2020",
        briefHistory: "Formed in 1932 when Tokyo City expanded and Itabashi transitioned from a rural district to an urban ward. It has historical ties to Edo-period travelers.",
        famousFood: "Tokyo ramen and yaki-manju (grilled sweet buns).",
        landmarks: [
            { name: "Akatsuka Park", link: "https://www.google.com/maps/place/Akatsuka+Park/@35.7849164,139.654497,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ec83bc015555:0x1bddb73eef4e38c7!8m2!3d35.7849121!4d139.6570666!16s%2Fg%2F1213nz1b?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Itabashi Art Museum", link: "https://www.google.com/maps/place/Itabashi+Art+Museum/@35.7842155,139.644492,16z/data=!3m1!4b1!4m6!3m5!1s0x6018eb875a466f53:0x2c8e299fedb602bf!8m2!3d35.7842155!4d139.644492!16s%2Fg%2F120kyygs?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Jorenji Temple (Tokyo Daibutsu)", link: "https://www.google.com/maps/place/Jōrenji+Temple/@35.78185,139.6415482,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ec78dc51bdbb:0xe5f0025463d0a318!8m2!3d35.7818457!4d139.6441178!16s%2Fg%2F122dm1hm?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Akatsuka Botanical Garden", link: "https://www.google.com/maps/place/Akatsuka+Botanical+Garden/@35.7805821,139.6416423,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ec793ae9057d:0x8faee548dbc34bc5!8m2!3d35.7805778!4d139.6442119!16s%2Fm%2F03c2gm3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Itabashi Fireworks Festival", link: "https://www.adachikanko.net/en/adachi_no_hanabi46" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Itabashi"
    },
    Nerima: {
        flag: "Wards emblem/Nerima-emblem.svg", 
        name: "Nerima",
        kanji: "練馬区",
        meaning: "Nerima (練馬) likely derives from the word 'Neri,' which means 'to knead,' referencing fertile agricultural land.",
        mainCity: "Oizumi, Shakujiidai",
        mainTrainStation: "Nerima Station (Toei Oedo Line, Seibu Ikebukuro Line)",
        population: "Approximately 742,626 as of October 1, 2020",
        briefHistory: "Established in 1947 after being separated from Itabashi. Known for its agriculture, especially daikon radish and its role in Tokyo's film industry.",
        famousFood: "Nerima Daikon radish dishes and traditional sweets.",
        landmarks: [
            { name: "Toshimaen Niwa no Yu (Onsen)", link: "https://www.google.com/maps/place/Toshimaen+Niwa-no-yu/@35.7438303,139.6481385,17z/data=!3m1!4b1!4m6!3m5!1s0x6018eda977f66829:0xda082c36be89b3bf!8m2!3d35.7438303!4d139.6481385!16s%2Fg%2F11b7f1vybf?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shakujii Park", link: "https://www.google.com/maps/place/Shakujii+Park/@35.737963,139.5964242,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ee904456ebad:0x732f01bc8b59dc53!8m2!3d35.7379587!4d139.5989938!16s%2Fm%2F0285d82?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Oizumi Anime Gate", link: "https://www.google.com/maps/place/Ōizumi+Anime+Gate/@35.7496513,139.5842694,17z/data=!3m1!4b1!4m6!3m5!1s0x6018eec7adc26b4d:0x77d24b931d513c3b!8m2!3d35.749647!4d139.586839!16s%2Fg%2F11clgcnscb?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Makino Memorial Garden", link: "https://www.google.com/maps/place/Makino+Memorial+Garden+%26+Museum/@35.7465908,139.5806874,17z/data=!4m10!1m2!2m1!1smakino+memorial+garden!3m6!1s0x6018eec1335e8b97:0xe9bfe37b272aeaa!8m2!3d35.7465908!4d139.5851935!15sChZtYWtpbm8gbWVtb3JpYWwgZ2FyZGVuWhgiFm1ha2lubyBtZW1vcmlhbCBnYXJkZW6SAQZtdXNldW3gAQA!16s%2Fm%2F0jwsqt3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Heisei Tsutsuji Park", link: "https://www.google.com/maps/place/Heisei+Tsutsuji+Park/@35.7390162,139.6504431,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ed08fe900d7f:0x43246a368d21279e!8m2!3d35.7390119!4d139.6530127!16s%2Fg%2F1v3hz_ty?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Nerima"
    },
    Suginami: {
        flag: "Wards emblem/Suginami-emblem.svg", 
        name: "Suginami",
        kanji: "杉並区",
        meaning: "Sugi (杉) means 'cedar,' and nami (並) means 'row,' referring to rows of cedar trees historically found in the area.",
        mainCity: "Koenji, Ogikubo, Asagaya",
        mainTrainStation: "Ogikubo Station (JR Chuo Line, Tokyo Metro Marunouchi Line)",
        population: "Approximately 593,587 as of October 1, 2020",
        briefHistory: "Established in 1947 by merging four towns. Known for its role in Tokyo’s cultural and musical development, especially in Koenji.",
        famousFood: "Ramen (especially Ogikubo ramen) and Koenji izakaya dishes.",
        landmarks: [
            { name: "Zenpukuji River Green Space", link: "https://www.google.com/maps/place/Zenpuku-ji+River+Green+Space/@35.6906632,139.6324179,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f26b0ab36ce3:0xf67c4aef7b15b0f!8m2!3d35.6906632!4d139.6324179!16s%2Fg%2F1215vjc3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Asagaya Pearl Center Shopping Street", link: "https://www.google.com/maps/place/Asagaya+Pearl+Center+Shopping+Street/@35.704656,139.6367897,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f27136a6f5f3:0xb7322a1fe2a56563!8m2!3d35.704656!4d139.6367897!16s%2Fg%2F121zcrpp?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Otaguro Park", link: "https://www.google.com/maps/place/Otaguro+Park/@35.7005862,139.6248133,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f20986bb00f3:0x302bdecedaa82ef0!8m2!3d35.7005862!4d139.6248133!16s%2Fg%2F120phryp?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Koenji Junjo Shotengai(Pure Heart Shopping Street)", link: "https://www.google.com/maps/place/Junjō+Shōtengai+-Pure+Heart+Shopping+Street-/@35.7066393,139.6497833,17z/data=!3m2!4b1!5s0x6018f27d8f27e9df:0xe2f5822ff1001c52!4m6!3m5!1s0x6018f27d8e4b83d7:0x938ae61b4dd025f2!8m2!3d35.7066393!4d139.6497833!16s%2Fg%2F11bx9p99qm?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Mabashi Inari Shrine", link: "https://www.google.com/maps/place/Mabashi+Inari+Shrine/@35.7032524,139.6427114,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f27bac8c0325:0x975c757645c7f686!8m2!3d35.7032524!4d139.6427114!16s%2Fg%2F120wl54g?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Suginami"
    },
    Setagaya: {
        flag: "Wards emblem/Setagaya-emblem.svg", 
        name: "Setagaya",
        kanji: "世田谷区",
        meaning: "Seta (世田) means 'rice field generations,' and gaya (谷) means 'valley.' The name reflects the area’s historic agricultural roots.",
        mainCity: "Shimokitazawa, Futako-Tamagawa, Sangenjaya",
        mainTrainStation: "Futako-Tamagawa Station (Tokyu Den-en-toshi Line, Tokyu Oimachi Line)",
        population: "Approximately 939,099 as of October 1, 2020",
        briefHistory: "Established in 1932 by merging five towns and villages. Known for its residential appeal, green spaces, and cultural vibrancy.",
        famousFood: "Cafés and bakeries in Shimokitazawa, plus traditional soba and sushi.",
        landmarks: [
            { name: "Setagaya Park", link: "https://www.google.com/maps/place/Setagaya+Park/@35.6437357,139.6815533,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f362681cd361:0x65b4368423c4c4a8!8m2!3d35.6437357!4d139.6815533!16s%2Fg%2F1228ll8h?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Gotokuji Temple (Home of the Lucky Cat)", link: "https://www.google.com/maps/place/Gōtokuji+Temple/@35.6488167,139.6428676,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f39f99015555:0x6b0e9ad51be4cac!8m2!3d35.6488124!4d139.647481!16s%2Fg%2F122r_g9j?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Todoroki Valley", link: "https://www.google.com/maps/place/Todoroki+Ravine+Park/@35.6039019,139.6436623,16z/data=!3m1!4b1!4m6!3m5!1s0x6018f45405495069:0x71ab45cd45edb2b9!8m2!3d35.6038976!4d139.6462372!16s%2Fg%2F119vcct78?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Carrot Tower", link: "https://www.google.com/maps/place/Carrot+Tower/@35.6435002,139.6694931,17z/data=!4m6!3m5!1s0x6018f59e9c9c3f83:0x670643fdfc5ec473!8m2!3d35.6436933!4d139.669292!16s%2Fg%2F11fkt4r6k8?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shimokitazawa Theater District", link: "https://www.google.com/maps/place/Shimokitazawa/@35.6610045,139.6663756,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f5d2c58a022f:0x378a32781c5cb8df!8m2!3d35.6610045!4d139.6689449" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Setagaya"
    },
    Ota: {
        flag: "Wards emblem/Ota-emblem.svg", 
        name: "Ōta",
        kanji: "大田区",
        meaning: "Ō (大) means 'large' or 'great,' and ta (田) means 'rice field,' reflecting the area's agricultural heritage.",
        mainCity: "Kamata, Haneda, Omori",
        mainTrainStation: "Kamata Station (JR Keihin-Tohoku Line, Tokyu Ikegami Line, Tokyu Tamagawa Line)",
        population: "Approximately 724,100 as of October 1, 2020",
        briefHistory: "Formed in 1947 by merging Omori and Kamata wards. Home to Haneda Airport and a hub of industrial and cultural development.",
        famousFood: "Haneda Monaka (traditional Japanese sweets) and Kamata Gyoza (dumplings).",
        landmarks: [
            { name: "Haneda Airport", link: "https://www.google.com/maps/place/Tokyo+International+Airport+(Haneda+Airport)/@35.5477171,139.7581887,14z/data=!3m1!4b1!4m6!3m5!1s0x6018640ba43192e3:0xd32c3a9d146f8df!8m2!3d35.5482964!4d139.7779951!16zL20vMDFubG1t?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Ikegami Honmonji Temple", link: "https://www.google.com/maps/place/Ikegami+Hommon-ji/@35.5787893,139.7026101,16z/data=!3m1!4b1!4m6!3m5!1s0x6018601a4881981f:0x764d33ce158f662d!8m2!3d35.578785!4d139.705185!16s%2Fg%2F11bwlcvqyt?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Omori Furusato-no-Hamabe Park", link: "https://www.google.com/maps/place/Ōmori+Furusato-no-Hamabe+Riverside+Park/@35.5735114,139.7391153,16z/data=!3m1!4b1!4m6!3m5!1s0x601861af8e68e2f7:0xeeaa5fe41f71cfd1!8m2!3d35.5735071!4d139.7416902!16s%2Fg%2F122wttyx?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Anamori Inari Shrine", link: "https://www.google.com/maps/place/Anamori+Inari+Shrine/@35.5505208,139.7471128,16z/data=!3m1!4b1!4m6!3m5!1s0x6018613fd4a973b7:0xfbe896657f2f3ee2!8m2!3d35.5505165!4d139.7496877!16s%2Fg%2F1219mpls?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Senzokuike Park", link: "https://www.google.com/maps/place/Senzokuike+Park/@35.6029086,139.6878081,16z/data=!3m1!4b1!4m6!3m5!1s0x60188acac9d151c1:0x3a6a17980c083601!8m2!3d35.6029043!4d139.690383!16s%2Fg%2F1wk6zrn0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Ōta,_Tokyo"
    },
    Shinagawa: {
        flag: "Wards emblem/Shinagawa-emblem.svg", 
        name: "Shinagawa",
        kanji: "品川区",
        meaning: "Shina (品) means 'goods,' and gawa (川) means 'river,' hinting at its historical role as a port and trade area.",
        mainCity: "Shinagawa, Oimachi, Gotanda",
        mainTrainStation: "Shinagawa Station (JR Yamanote Line, Shinkansen, Keikyu Line)",
        population: "Approximately 419,700 as of October 1, 2020",
        briefHistory: "One of the oldest areas in Tokyo, historically a post town on the Tokaido road and a key port area during the Edo period.",
        famousFood: "Shinagawa Sushi and Eel Dishes (Unagi).",
        landmarks: [
            { name: "Sengakuji Temple", link: "https://www.google.com/maps/place/Sengaku-ji/@35.637744,139.7338257,17z/data=!3m2!4b1!5s0x60188bab517883d3:0x3547b1e7e0dc53f9!4m6!3m5!1s0x60188bab4f0aae87:0x9e2f9a03c61c1e2b!8m2!3d35.6377397!4d139.7364006!16zL20vMDMxdjQz?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Tennozu Isle", link: "https://www.google.com/maps/place/Tennōzu+Isle+Waterfront+Plaza/@35.6377654,139.7261009,15z/data=!4m10!1m2!2m1!1stenozu+isle!3m6!1s0x60188a6aa53e509b:0x226fb4d0fc73b16b!8m2!3d35.6245994!4d139.7516996!15sCgx0ZW5ub3p1IGlzbGWSAQRwYXJr4AEA!16s%2Fg%2F121h3gc7?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Hara Museum ARC", link: "https://www.google.com/maps/place/Hara+Museum+ARC/@36.5028319,138.9427326,17z/data=!3m1!4b1!4m6!3m5!1s0x601e63ec1e11c225:0x47f55b2ed0231732!8m2!3d36.5028276!4d138.9453075!16s%2Fg%2F1tf244x2?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Shinagawa Shrine", link: "https://www.google.com/maps/place/Shinagawa+Shrine/@35.6184708,139.7371299,17z/data=!3m1!4b1!4m6!3m5!1s0x60188a6707ed45a9:0xeb3ccef0c68029e4!8m2!3d35.6184665!4d139.7397048!16s%2Fg%2F1vl9rgrv?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Gotenyama Garden", link: "https://www.google.com/maps/place/Gotenyama+Garden/@35.6208357,139.7345764,17z/data=!3m1!4b1!4m6!3m5!1s0x60188a5e9816c3d9:0xfbb30ba7fedd29df!8m2!3d35.6208314!4d139.7371513!16s%2Fg%2F1211r97_?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Shinagawa,_Tokyo"
    },
    Meguro: {
        flag: "Wards emblem/Meguro-emblem.svg", 
        name: "Meguro",
        kanji: "目黒区",
        meaning: "Me (目) means 'eye,' and kuro (黒) means 'black.' The name originates from a legendary black-eyed statue of a guardian deity at Meguro Fudo Temple.",
        mainCity: "Meguro, Nakameguro, Jiyugaoka",
        mainTrainStation: "Meguro Station (JR Yamanote Line, Tokyo Metro Namboku Line, Toei Mita Line)",
        population: "Approximately 281,700 as of October 1, 2020",
        briefHistory: "Meguro has long been a residential and cultural district, becoming an upscale area known for its art, dining, and cherry blossoms.",
        famousFood: "Japanese sweets and trendy cafés in Nakameguro.",
        landmarks: [
            { name: "Meguro River", link: "https://www.google.com/maps/place/Meguro+River/@35.632026,139.6754801,13z/data=!3m1!4b1!4m6!3m5!1s0x60188b22d7336a5b:0x50f2e54b55d6b096!8m2!3d35.6299045!4d139.7141956!16s%2Fm%2F0100r931?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Tokyo Metropolitan Teien Art Museum", link: "https://www.google.com/maps/place/Tokyo+Metropolitan+Teien+Art+Museum/@35.6369508,139.7144274,16z/data=!3m2!4b1!5s0x60188b1afa5132dd:0x55cb2270ea5d124!4m6!3m5!1s0x60188b1b07ef2e41:0xdc7a7c82eae46af8!8m2!3d35.6369465!4d139.7190408!16s%2Fm%2F02q2fkp?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Rinshinomori Park", link: "https://www.google.com/maps/place/Rinshi-no-mori+Park/@35.6250359,139.700692,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b287f422e6f:0xd1216ebe896df079!8m2!3d35.6250316!4d139.7032669!16s%2Fg%2F120t4nfl?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Meguro Fudo Temple", link: "https://www.google.com/maps/place/Ryusen-ji+Temple+(Meguro+Fudoson)/@35.6286428,139.7054982,16z/data=!3m1!4b1!4m6!3m5!1s0x60188b211bf9465b:0xaab404001c37f6bf!8m2!3d35.6286385!4d139.7080731!16s%2Fm%2F0wbmrdv?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Komeisen", link: "https://www.google.com/maps/place/Komeisen/@35.6444201,139.6990816,17z/data=!4m6!3m5!1s0x60188b48b4340837:0xc5dc6e3eb5e99118!8m2!3d35.6456389!4d139.7003252!16s%2Fg%2F1xb2dkkt?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Meguro,_Tokyo"
    },
    Minato: {
        flag: "Wards emblem/Minato-emblem.svg", 
        name: "Minato",
        kanji: "港区",
        meaning: "Minato (港) means 'harbor,' reflecting its historic role as a port area.",
        mainCity: "Roppongi, Akasaka, Shimbashi",
        mainTrainStation: "Shimbashi Station (JR Lines, Tokyo Metro Ginza Line, Toei Asakusa Line)",
        population: "Approximately 258,439 as of October 1, 2020",
        briefHistory: "Minato became a central area of Tokyo in the Edo period and is now known for its embassies, corporate headquarters, and luxury living.",
        famousFood: "High-end sushi and international cuisine in Roppongi.",
        landmarks: [
            { name: "Tokyo Tower", link: "https://www.google.com/maps/place/Tokyo+Tower/@35.6585848,139.742858,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bbd9009ec09:0x481a93f0d2a409dd!8m2!3d35.6585805!4d139.7454329!16zL20vMDEzMl94?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Roppongi Hills", link: "https://www.google.com/maps/place/Roppongi+Hills/@35.6602427,139.7275018,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b771049dc33:0x5bfe0248594cc802!8m2!3d35.6602384!4d139.7300767!16zL20vMDFyMl9r?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Odaiba Rainbow Park", link: "https://www.google.com/maps/place/Odaiba+Rainbow+Park/@35.6330879,139.7754245,16z/data=!3m1!4b1!4m6!3m5!1s0x601889f3875498c7:0xc9fcfd7b8268a14f!8m2!3d35.6330836!4d139.7779994!16s%2Fg%2F1229d68f?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Hamarikyu Gardens", link: "https://www.google.com/maps/place/Hamarikyū+Gardens/@35.6596602,139.7608342,16z/data=!3m1!4b1!4m6!3m5!1s0x60188bdcbaa0f7c1:0x9b4a9ebdf898381a!8m2!3d35.6596559!4d139.7634091!16s%2Fg%2F1ts1mmld?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shiba Toshogu", link: "https://www.google.com/maps/place/Shiba+Toshogu/@35.6551033,139.7460364,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bb940b0e661:0x6d31278b4c6017d8!8m2!3d35.655099!4d139.7486113!16s%2Fg%2F12116v35?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Minato,_Tokyo"
    },
    Shibuya: {
        flag: "Wards emblem/Shibuya-emblem.svg", 
        name: "Shibuya",
        kanji: "渋谷区",
        meaning: "Shibuya (渋谷) translates to 'bitter valley,' though today it's anything but bitter.",
        mainCity: "Shibuya, Harajuku, Ebisu, Daikanyama",
        mainTrainStation: "Shibuya Station (Multiple JR Lines, Tokyo Metro, Tokyu Lines)",
        population: "Approximately 231,043 as of October 1, 2020",
        briefHistory: "Shibuya developed as a commercial hub in the 20th century, becoming synonymous with fashion, youth culture, and technology.",
        famousFood: "Trendy cafes, fusion cuisine, and gourmet desserts.",
        landmarks: [
            { name: "Shibuya Crossing", link: "https://www.google.com/maps/place/Shibuya+Scramble+Crossing/@35.6594863,139.6979847,17z/data=!3m2!4b1!5s0x60188b57f546295f:0x486cece41a7b21b0!4m6!3m5!1s0x60188bcaeb0cd12b:0x20e563a2e0aec969!8m2!3d35.659482!4d139.7005596!16s%2Fg%2F11shy4scrj?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Meiji Shrine", link: "https://www.google.com/maps/place/Meiji+Jingu/@35.6764019,139.696751,16z/data=!3m1!4b1!4m6!3m5!1s0x60188cb79a4c26e5:0x8fca893849103f73!8m2!3d35.6763976!4d139.6993259!16zL20vMDFxX2s5?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Yoyogi Park", link: "https://www.google.com/maps/place/Yoyogi+Park/@35.6700692,139.6923907,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cb479620a33:0x34bcc78ce7f8bf3e!8m2!3d35.6700649!4d139.6949656!16zL20vMDNjcWtq?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Toguri Museum of Art", link: "https://www.google.com/maps/place/Toguri+Museum/@35.6614315,139.6902176,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cac9cf03c97:0x1b57052ed8be7c78!8m2!3d35.6614272!4d139.6927925!16s%2Fg%2F122z7ndz?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Kyu Asakura House", link: "https://www.google.com/maps/place/Kyu+Asakura+House/@35.647199,139.6989591,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b4f65cb423d:0xa4caa0d8de04ffb2!8m2!3d35.6471947!4d139.701534!16s%2Fm%2F0zc1b_2?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Shibuya",
    },
    Nakano: {
        flag: "Wards emblem/Nakano-emblem.svg", 
        name: "Nakano",
        kanji: "中野区",
        meaning: "Nakano (中野) means 'central field,' reflecting its historical agricultural roots.",
        mainCity: "Nakano",
        mainTrainStation: "Nakano Station (JR Chuo Line, Tokyo Metro Tozai Line)",
        population: "Approximately 338,413 as of October 1, 2020",
        briefHistory: "Nakano began as a farming area but evolved into a cultural and residential hub, renowned for its otaku and pop culture scene.",
        famousFood: "Yakitori and ramen shops concentrated around Nakano Station.",
        landmarks: [
            { name: "Nakano Broadway", link: "https://www.google.com/maps/place/Nakano+Broadway/@35.7092518,139.6630775,16z/data=!3m2!4b1!5s0x6018f2974cf916e3:0x565f08916ebefb15!4m6!3m5!1s0x6018f290b2ddee83:0xe1b67e4ee0eff0be!8m2!3d35.7092475!4d139.6656524!16s%2Fm%2F0nbg7q5?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Araiyakushi Baishoin Temple", link: "https://www.google.com/maps/place/Araiyakushi+Baishouin/@35.7140339,139.6649683,16z/data=!3m1!4b1!4m6!3m5!1s0x6018f2992291da51:0x2ed88e3ac9a8312d!8m2!3d35.7140296!4d139.6675432!16s%2Fg%2F122pl74h?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Nakano Sun Plaza", link: "https://www.google.com/maps/place/Nakano+Sun+Mall/@35.70648,139.6632299,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f296b578d27f:0xc80a0aa3c690cb85!8m2!3d35.7064757!4d139.6658048!16s%2Fg%2F122brw22?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Tetsugakudo Park", link: "https://www.google.com/maps/place/Tetsugakudo+Park/@35.7220616,139.6717225,16z/data=!3m1!4b1!4m6!3m5!1s0x6018f2a09ce51a59:0x70642094a759a1a5!8m2!3d35.7220573!4d139.6742974!16s%2Fg%2F121f8wdp?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Sanshi-no-mori Park", link: "https://www.google.com/maps/place/Sanshi-no-mori+Park/@35.6971694,139.6538729,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f28ca513db63:0x41a8e14fa4730c4a!8m2!3d35.6971651!4d139.6564478!16s%2Fg%2F1227vh24?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Nakano,_Tokyo",
    },
    Toshima: {
        flag: "Wards emblem/Toshima-emblem.svg", 
        name: "Toshima",
        kanji: "豊島区",
        meaning: "Toshima (豊島) translates to 'abundant island,' reflecting its fertile land.",
        mainCity: "Ikebukuro",
        mainTrainStation: "Ikebukuro Station (JR Yamanote Line, Tokyo Metro Lines, Tobu Tojo Line, Seibu Ikebukuro Line)",
        population: "Approximately 298,250 as of October 1, 2020",
        briefHistory: "Once a quiet farming area, Toshima developed into a vibrant cultural and commercial hub centered around Ikebukuro. It was officially established as a ward in 1932.",
        famousFood: "Ikebukuro ramen, particularly in the west-side ramen alley.",
        landmarks: [
            { name: "Sunshine City", link: "https://www.google.com/maps/place/Sunshine+City/@35.7289752,139.7169666,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d6f134fd653:0x51eb1d42c77222c2!8m2!3d35.7289709!4d139.7195415!16zL20vMGRzM3lj?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Pokémon Center Mega Tokyo & Pikachu Sweets", link: "https://www.google.com/maps/place/Pokémon+Center+Mega+Tokyo+%26+Pikachu+Sweets/@35.7289099,139.7167496,17z/data=!3m2!4b1!5s0x60188d6f00e83cbb:0xa094042101c97f88!4m6!3m5!1s0x60188d6f044d6725:0x5c5c669ed9f5c455!8m2!3d35.7289056!4d139.7193245!16s%2Fg%2F11b7l7y6j2?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Mejiro Garden", link: "https://www.google.com/maps/place/Mejiro+Garden/@35.7244774,139.702958,16z/data=!3m1!4b1!4m6!3m5!1s0x60188d4493d765f5:0xe80e0768c45253e!8m2!3d35.7244731!4d139.7055329!16s%2Fg%2F1tfd2d5h?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Tokiwaso Manga Museum", link: "https://www.google.com/maps/place/Toshima+City+Tokiwaso+Manga+Museum/@35.7242942,139.6834235,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f35913eafb9f:0x932250aec9d5b534!8m2!3d35.7242899!4d139.6859984!16s%2Fg%2F11fsnxghdw?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Hobby Center Kato", link: "https://www.google.com/maps/place/Hobby+Center+Kato/@35.7214243,139.6774451,16z/data=!3m1!4b1!4m6!3m5!1s0x6018f2a63de268fb:0xd4dc75a91eebb5be!8m2!3d35.72142!4d139.68002!16s%2Fg%2F1thx_vc_?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Toshima,_Tokyo",
    },
    Shinjuku: {
        flag: "Wards emblem/Shinjuku-emblem.svg", 
        name: "Shinjuku",
        kanji: "新宿区",
        meaning: "Shinjuku (新宿) means 'new inn' or 'new lodge,' reflecting its origins as a rest area during the Edo period.",
        mainCity: "Shinjuku",
        mainTrainStation: "Shinjuku Station (JR Lines, Tokyo Metro Lines, Odakyu Line, Keio Line)",
        population: "Approximately 346,235 as of October 1, 2020",
        briefHistory: "Once a post town during the Edo period, Shinjuku grew into a bustling urban center. It officially became a ward in 1947 and now serves as Tokyo's government and entertainment hub.",
        famousFood: "Yakitori in Omoide Yokocho and high-quality sushi from luxury establishments.",
        landmarks: [
            { name: "Tokyo Metropolitan Government Building", link: "https://www.google.com/maps/place/Tokyo+Metropolitan+Government+Building+South+Observatory/@35.6893292,139.689238,17z/data=!3m2!4b1!5s0x60188cd498eb5371:0x46cb7b987c5bc5b7!4m6!3m5!1s0x60188df0b64849fd:0x88b1056bc74c533f!8m2!3d35.6893249!4d139.6918129!16s%2Fg%2F11j7dm8hrw?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Shinjuku Gyoen National Garden", link: "https://www.google.com/maps/place/Shinjuku+Gyoen+National+Garden/@35.6851806,139.7074768,16z/data=!3m1!4b1!4m6!3m5!1s0x60188cc21b93233f:0x6a1eb1b5a117f287!8m2!3d35.6851763!4d139.7100517!16zL20vMDdkM24x?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Kabukicho District", link: "https://www.google.com/maps/place/Kabukicho/@35.6961027,139.6977476,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cd5fa68afdf:0x2538821db5da2f9c!8m2!3d35.6961027!4d139.7003163" },
        ],
        hiddenGems: [
            { name: "Shinjuku Ophthalmologist Gallery", link: "https://www.google.com/maps/place/Shinjuku+Ganka+Art+Gallery+(Shinjuki+Ganka+Garō)/@35.6947193,139.7037066,17z/data=!3m2!4b1!5s0x60188cd952f2b1a9:0x595b18ad95c799ca!4m6!3m5!1s0x60188cd94d99cab9:0xe58d9699e567a6f9!8m2!3d35.694715!4d139.7062815!16s%2Fg%2F12269bkl?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Kabukicho Theater", link: "https://www.google.com/maps/place/Kabukicho+Theater/@35.6938611,139.7030639,17z/data=!4m15!1m8!3m7!1s0x60188d39930f3643:0x73339a575f721f42!2sKabukicho+Theater!8m2!3d35.6938842!4d139.702995!10e5!16s%2Fg%2F11v48kj7g6!3m5!1s0x60188d39930f3643:0x73339a575f721f42!8m2!3d35.6938842!4d139.702995!16s%2Fg%2F11v48kj7g6?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Shinjuku",
    },
    Chiyoda: {
        flag: "Wards emblem/Chiyoda-emblem.svg", 
        name: "Chiyoda",
        kanji: "千代田区",
        meaning: "Chiyoda (千代田) means 'field of a thousand generations,' symbolizing longevity and stability.",
        mainCity: "Otemachi and Marunouchi",
        mainTrainStation: "Tokyo Station (JR Lines, Tokyo Metro Marunouchi Line)",
        population: "Approximately 66,575 as of October 1, 2020",
        briefHistory: "Historically the heart of political power, Chiyoda is home to the Imperial Palace and was the seat of the Tokugawa shogunate during the Edo period.",
        famousFood: "High-end kaiseki cuisine and wagashi (traditional Japanese sweets).",
        landmarks: [
            { name: "Imperial Palace", link: "https://www.google.com/maps/place/Imperial+Palace/@35.6851793,139.7502246,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c0d02d8064d:0xd11a5f0b379e6db7!8m2!3d35.685175!4d139.7527995!16zL20vMDFuZjI5?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Tokyo Station (Marunouchi Side)", link: "https://www.google.com/maps/place/Tokyo+Station/@35.6812405,139.7645499,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bfbd89f700b:0x277c49ba34ed38!8m2!3d35.6812362!4d139.7671248!16zL20vMDFfdnY3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "National Museum of Modern Art, Tokyo (MOMAT)", link: "https://www.google.com/maps/place/The+National+Museum+of+Modern+Art+Tokyo/@35.6905475,139.7521183,16z/data=!3m2!4b1!5s0x60188c0d7df3dcd7:0x22996b3c798e7ada!4m6!3m5!1s0x60188c0d7e12492f:0x6667d99d5f4afe2a!8m2!3d35.6905432!4d139.7546932!16s%2Fm%2F02qpdvy?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Chidorigafuchi Green Way", link: "https://www.google.com/maps/place/Chidorigafuchi+Green+Way/@35.6917336,139.7471623,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d8b49068da7:0xc0530c52a8265bbe!8m2!3d35.6917336!4d139.7471623!16s%2Fg%2F121dckss?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Jimbocho Book Town", link: "https://www.google.com/maps/place/Jimbocho+Book+Town/@35.6958017,139.7548226,17z/data=!3m1!5s0x60188c13de2ca507:0xf112e179fc61592b!4m10!1m2!2m1!1sjimbocho+book+town!3m6!1s0x60188dce2211f995:0xe22eeafa479cd390!8m2!3d35.6958463!4d139.7572397!15sChJqaW1ib2NobyBib29rIHRvd25aFCISamltYm9jaG8gYm9vayB0b3dukgEKYm9va19zdG9yZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNNU1tUnhTaTFSUlJBQuABAA!16s%2Fg%2F121nrv2t?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Chiyoda,_Tokyo",
    },
    Bunkyo: {
        flag: "Wards emblem/Bunkyo-emblem.svg", 
        name: "Bunkyo",
        kanji: "文京区",
        meaning: "Bunkyo (文京) means 'capital of literature and culture,' reflecting its rich academic and literary heritage.",
        mainCity: "Hongo and Nezu",
        mainTrainStation: "Korakuen Station (Tokyo Metro Marunouchi and Namboku Lines)",
        population: "Approximately 235,620 as of October 1, 2020",
        briefHistory: "Known for its educational institutions, including the University of Tokyo. Bunkyo has been a center for academia and culture since the Edo period.",
        famousFood: "Wagashi (traditional Japanese sweets) and soba noodles.",
        landmarks: [
            { name: "Tokyo Dome City", link: "https://www.google.com/maps/place/Tokyo+Dome+City/@35.7049669,139.7504748,17z/data=!3m1!5s0x60188c4782bdfe39:0xee0b72afe62b9fb0!4m10!1m2!2m1!1stokyo+dome+city!3m6!1s0x60188de0411519bb:0xa81b0f31781b587c!8m2!3d35.705388!4d139.7520905!15sCg90b2t5byBkb21lIGNpdHlaESIPdG9reW8gZG9tZSBjaXR5kgEQYW11c2VtZW50X2NlbnRlcuABAA!16zL20vMDhieG5s?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Koishikawa Korakuen Garden", link: "https://www.google.com/maps/place/Koishikawa+Korakuen+Garden/@35.7056956,139.7466969,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c4646de5005:0x1b220216ae23c25e!8m2!3d35.7056913!4d139.7492718!16zL20vMGRuM3di?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Yayoi Museum & Takehisa Yumeji Museum (close proximity)", link: "https://www.google.com/maps/place/Takehisa+Yumeji+Museum/@35.7148738,139.7609306,17z/data=!4m10!1m2!2m1!1sYayoi+Museum+and+Takehisa+Yumeji+Museum!3m6!1s0x60188c2e333e5d69:0xa8f1ae1e32cf57e5!8m2!3d35.7148529!4d139.7635414!15sCidZYXlvaSBNdXNldW0gYW5kIFRha2VoaXNhIFl1bWVqaSBNdXNldW1aKSIneWF5b2kgbXVzZXVtIGFuZCB0YWtlaGlzYSB5dW1lamkgbXVzZXVtkgESdG91cmlzdF9hdHRyYWN0aW9u4AEA!16s%2Fg%2F1hb_g8rth?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Kōdōkan Judo Institute", link: "https://www.google.com/maps/place/Kōdōkan/@35.7076229,139.7508275,17z/data=!3m2!4b1!5s0x60188c3816999f21:0xde8cd8b5448d1fb6!4m6!3m5!1s0x60188c38198ceb6d:0xab3ecf59a128dbda!8m2!3d35.7076186!4d139.7534024!16zL20vMDUyOXM4?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Koishikawa Botanical Garden", link: "https://www.google.com/maps/place/Koishikawa+Korakuen+Garden/@35.7056913,139.7492718,16z/data=!3m1!4b1!4m6!3m5!1s0x60188c4646de5005:0x1b220216ae23c25e!8m2!3d35.7056913!4d139.7492718!16zL20vMGRuM3di?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Bunkyo",
    },
    Arakawa: {
        flag: "Wards emblem/Arakawa-emblem.svg", 
        name: "Arakawa",
        kanji: "荒川区",
        meaning: "Arakawa (荒川) means 'wild river,' named after the nearby Arakawa River.",
        mainCity: "Nippori and Minamisenju",
        mainTrainStation: "Nippori Station (JR Yamanote Line and Keisei Line)",
        population: "Approximately 217,727 as of October 1, 2020",
        briefHistory: "Established in 1932. Known for its strong working-class heritage and traditional neighborhoods that reflect the history of Tokyo.",
        famousFood: "Senbei (rice crackers) and soba noodles.",
        landmarks: [
            { name: "Yanaka Ginza Shopping Street", link: "https://www.google.com/maps/place/Yanaka+Ginza/@35.7276977,139.7631483,16z/data=!3m1!4b1!4m6!3m5!1s0x60188dd19c058c3d:0xef3d1026c2974760!8m2!3d35.7276934!4d139.7657232!16s%2Fg%2F11btv67788?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Arakawa Yuen Amusement Park", link: "https://www.google.com/maps/place/Arakawa+Amusement+Park/@35.7537662,139.7558892,17z/data=!3m1!4b1!4m6!3m5!1s0x60188df159234131:0x39b076d8fdf0d389!8m2!3d35.7537619!4d139.7584641!16s%2Fg%2F120wr0sp?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Suwa Shrine", link: "https://www.google.com/maps/place/Suwa+Shrine/@35.6953871,139.4034773,17z/data=!3m2!4b1!5s0x6018e17875028abd:0x4c7a3bdff5fe78b6!4m6!3m5!1s0x60193fc3159e1b9f:0xfa1da60c05e8ad68!8m2!3d35.6953828!4d139.4060522!16s%2Fg%2F11h1hqp4hd?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Yanaka Cemetery", link: "https://www.google.com/maps/place/Yanaka+Cemetery/@35.7240087,139.7677242,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c2acac1c13b:0x23941711c439d23f!8m2!3d35.7240044!4d139.7702991!16s%2Fm%2F03mdb8g?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Arakawa Nature Park", link: "https://www.google.com/maps/place/Arakawa+Nature+Park/@35.7416769,139.786822,16z/data=!3m1!4b1!4m6!3m5!1s0x60188e6f9e343b21:0x1ad3cc136d9cfb3!8m2!3d35.7416769!4d139.786822!16s%2Fg%2F11b7g6qtlm?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Arakawa,_Tokyo",
    },
    Taito: {
        flag: "Wards emblem/Taito-emblem.svg", 
        name: "Taito",
        kanji: "台東区",
        meaning: "Taito (台東) combines 'platform' (台) and 'east' (東), reflecting its position in eastern Tokyo.",
        mainCity: "Ueno and Asakusa",
        mainTrainStation: "Ueno Station (JR Yamanote Line, Keisei Line, and Tokyo Metro Ginza Line)",
        population: "Approximately 208,833 as of October 1, 2020",
        briefHistory: "Established in 1947 by merging Asakusa and Shitaya Wards. It’s a hub of Edo culture and a gateway for travelers.",
        famousFood: "Kaminari-okoshi (traditional rice crackers) and Edo-style sushi.",
        landmarks: [
            { name: "Senso-ji Temple", link: "https://www.google.com/maps/place/Sensō-ji/@35.7147694,139.7940804,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553!16zL20vMDNrOTg3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Ueno Park", link: "https://www.google.com/maps/place/Ueno+Park/@35.7153392,139.763357,15z/data=!4m10!1m2!2m1!1sueno+park!3m6!1s0x60188e9b45906ac3:0xb1cb3623124e645a!8m2!3d35.7147557!4d139.7734312!15sCgl1ZW5vIHBhcmtaCyIJdWVubyBwYXJrkgEEcGFya-ABAA!16zL20vMDJ5NWdk?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Tokyo National Museum", link: "https://www.google.com/maps/place/Tokyo+National+Museum/@35.7188394,139.7739466,17z/data=!3m2!4b1!5s0x60188e83526c6cb9:0x4efc1e737b7cad1a!4m6!3m5!1s0x60188e8314d77d11:0x232fd618bd4977dd!8m2!3d35.7188351!4d139.7765215!16zL20vMDVzazVn?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Kuramae Artisan District", link: "https://www.google.com/maps/place/Kuramae,+Taito+City,+Tokyo+111-0051/@35.7025009,139.7863997,16z/data=!3m1!4b1!4m6!3m5!1s0x60188eb6457b566b:0xae69530149ee31a0!8m2!3d35.7021284!4d139.7920494!16s%2Fg%2F120hhtsb?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Shitamachi Tanabata Festival Streets", link: "https://www.google.com/maps/place/Taitō+City+Calligraphy+Museum/@35.7102562,139.762438,15z/data=!4m10!1m2!2m1!1sshitamachi+tanabata+museum!3m6!1s0x60188e80e174d557:0x67b6bc3fb057f2d6!8m2!3d35.7247598!4d139.7762293!15sChpzaGl0YW1hY2hpIHRhbmFiYXRhIG11c2V1bVocIhpzaGl0YW1hY2hpIHRhbmFiYXRhIG11c2V1bZIBBm11c2V1bZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOYWFHWTJOR0YzRUFF4AEA!16s%2Fg%2F120zjg0p?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Tait%C5%8D",
    },
    Koto: {
        flag: "Wards emblem/Koto-emblem.svg", 
        name: "Koto",
        kanji: "江東区",
        meaning: "Koto (江東) combines 'river' or 'bay' (江) and 'east' (東), reflecting its location east of the Sumida River.",
        mainCity: "Kiba and Odaiba",
        mainTrainStation: "Toyosu Station (Tokyo Metro Yurakucho Line and Yurikamome Line)",
        population: "Approximately 521,138 as of October 1, 2020",
        briefHistory: "Formed in 1947 by merging Fukagawa and Joto Wards. Historically an area of waterways and shipping, it’s now a mix of residential and entertainment hubs.",
        famousFood: "Fukagawa-meshi (clam rice) and fresh seafood from Toyosu Market.",
        landmarks: [
            { name: "Toyosu Market", link: "https://www.google.com/maps/place/Toyosu+New+Fish+Market/@35.7103359,139.7315384,13z/data=!3m1!5s0x60188991c45b0821:0x9b94fdfd230dda53!4m10!1m2!2m1!1stoyosu+market!3m6!1s0x601889f8cfbb8f5b:0xd6bfad0e525033dc!8m2!3d35.6440911!4d139.784281!15sCg10b3lvc3UgbWFya2V0Wg8iDXRveW9zdSBtYXJrZXSSAQ5zZWFmb29kX21hcmtldOABAA!16s%2Fg%2F121slj0m?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "DiverCity Tokyo Plaza", link: "https://www.google.com/maps/place/DiverCity+Tokyo+Plaza/@35.6251856,139.7756314,17z/data=!3m2!4b1!5s0x601889f9d3afd357:0x4ceb5b057f39f5fb!4m6!3m5!1s0x601889f9d36ebaa5:0x67f4219bfa09db77!8m2!3d35.6251856!4d139.7756314!16s%2Fg%2F1hbpwy50x?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Kiyosumi Teien Garden", link: "https://www.google.com/maps/place/Kiyosumi+Gardens/@35.6809064,139.79469,17z/data=!3m1!4b1!4m6!3m5!1s0x6018893fc8ee2bfd:0x8730f08924610651!8m2!3d35.6809021!4d139.7972649!16s%2Fm%2F0gh8043?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Museum of Contemporary Art Tokyo (MOT)", link: "https://www.google.com/maps/place/Museum+of+Contemporary+Art+Tokyo/@35.679751,139.8056172,17z/data=!3m2!4b1!5s0x6018891bfd486f53:0x2c7f168464ff7d08!4m6!3m5!1s0x6018891bfceaaaab:0xabf9d782a2805a87!8m2!3d35.6797467!4d139.8081921!16zL20vMGN3N2g0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Fukagawa Edo Museum", link: "https://www.google.com/maps/place/Fukagawa+Edo+Museum/@35.6811902,139.7980172,17z/data=!3m2!4b1!5s0x601889162ec9771f:0xccfc3fb79dd30be3!4m6!3m5!1s0x60188916293799d3:0x4cc6306f51f55448!8m2!3d35.6811859!4d139.8005921!16s%2Fg%2F1214s159?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/K%C5%8Dto,_Tokyo",
    },
    Chuo: {
        flag: "Wards emblem/Chuo-emblem.svg", 
        name: "Chuo",
        kanji: "中央区",
        meaning: "Chuo (中央) means 'central,' reflecting its status as a core part of Tokyo.",
        mainCity: "Ginza and Nihombashi",
        mainTrainStation: "Tokyo Station (JR and multiple metro lines)",
        population: "Approximately 169,179 as of October 1, 2020",
        briefHistory: "Historically a commercial hub during the Edo period, with Nihombashi serving as the zero milestone for Japan’s highways.",
        famousFood: "Sushi from Tsukiji and luxury dining in Ginza.",
        landmarks: [
            { name: "Ginza District", link: "https://www.google.com/maps/place/Ginza,+Chuo+City,+Tokyo+104-0061/@35.6696431,139.7552394,15z/data=!3m1!4b1!4m6!3m5!1s0x60188be701836fbb:0x604685b30ba99851!8m2!3d35.6712228!4d139.7664859!16zL20vMDFrNHQy?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Nihombashi Bridge", link: "https://www.google.com/maps/place/Nihonbashi+Bridge/@35.6841058,139.7731733,17z/data=!4m10!1m2!2m1!1snihombashi+bridge!3m6!1s0x6018892a5baa498b:0x71f66a725c049e65!8m2!3d35.6840587!4d139.7745322!15sChFuaWhvbWJhc2hpIGJyaWRnZZIBBmJyaWRnZeABAA!16s%2Fg%2F11lg8zgq2p?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Hamarikyu Gardens", link: "https://www.google.com/maps/place/Hamarikyū+Gardens/@35.6596559,139.7634091,16z/data=!3m1!4b1!4m6!3m5!1s0x60188bdcbaa0f7c1:0x9b4a9ebdf898381a!8m2!3d35.6596559!4d139.7634091!16s%2Fg%2F1ts1mmld?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Sakuaragawa Park", link: "https://www.google.com/maps/place/Komeisen/@35.6444201,139.6990816,17z/data=!4m6!3m5!1s0x60188b48b4340837:0xc5dc6e3eb5e99118!8m2!3d35.6456389!4d139.7003252!16s%2Fg%2F1xb2dkkt?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Tsukuda Park", link: "https://www.google.com/maps/place/Tsukuda+Park/@35.6766743,139.7505339,14z/data=!4m10!1m2!2m1!1stsukudajima+island+walk!3m6!1s0x60188965f3ecc001:0x681f234aff8b7945!8m2!3d35.6697609!4d139.7830242!15sChd0c3VrdWRhamltYSBpc2xhbmQgd2Fsa1oZIhd0c3VrdWRhamltYSBpc2xhbmQgd2Fsa5IBBHBhcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkVlWFIyZEdwQlJSQULgAQA!16s%2Fg%2F11g6nvd0pk?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Ch%C5%AB%C5%8D,_Tokyo",
    },
    Sumida: {
        flag: "Wards emblem/Sumida-emblem.svg", 
        name: "Sumida",
        kanji: "墨田区",
        meaning: "Sumida (墨田) combines 'ink' (墨) and 'field' (田), named after the Sumida River.",
        mainCity: "Kinshicho and Ryogoku",
        mainTrainStation: "Kinshicho Station (JR Sobu Line and Tokyo Metro Hanzomon Line)",
        population: "Approximately 275,741 as of October 1, 2020",
        briefHistory: "Established in 1947 by merging Honjo and Mukojima wards. Known for its traditional crafts and as the birthplace of sumo wrestling.",
        famousFood: "Chanko-nabe (sumo wrestler's hot pot) and yakitori.",
        landmarks: [
            { name: "Tokyo Skytree", link: "https://www.google.com/maps/place/Tokyo+Skytree/@35.710067,139.8081255,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.8107004!16zL20vMDd0aGty?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Edo-Tokyo Museum", link: "https://www.google.com/maps/place/Edo-Tokyo+Museum/@35.6966015,139.7931587,16z/data=!3m1!4b1!4m6!3m5!1s0x60188934e1ee6539:0xc641f2f12c4bbd3!8m2!3d35.6965972!4d139.7957336!16s%2Fm%2F027sjq2?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Sumida Aquarium", link: "https://www.google.com/maps/place/Sumida+Aquarium/@35.7099344,139.8070106,16z/data=!3m1!4b1!4m6!3m5!1s0x60188ed6ddcaa63b:0x52f9e68583464160!8m2!3d35.7099301!4d139.8095855!16s%2Fg%2F1hc0hhtgk?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        hiddenGems: [
            { name: "Sumida Modern Artisan Workshop", link: "https://www.google.com/maps/place/Atoriesogeikan/@35.703736,139.8104727,17z/data=!3m1!4b1!4m6!3m5!1s0x6018892abce46f41:0xb4aa0f1a689c88c6!8m2!3d35.7037317!4d139.8130476!16s%2Fg%2F1td5lp83?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
            { name: "Mukojima Hyakkaen Garden", link: "https://www.google.com/maps/place/Mukojima-Hyakkaen+Gardens/@35.7242188,139.8109872,17z/data=!3m1!4b1!4m6!3m5!1s0x60188f1ff4a0a553:0xf42f2d949b82d148!8m2!3d35.7242145!4d139.8156006!16s%2Fm%2F0gysv4s?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" },
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Sumida,_Tokyo",
    },
};


      let selectedWard = null;

      // Reset the selected ward
      function resetSelection() {
          if (selectedWard) {
              const path = selectedWard.querySelector("path");
              path.classList.remove("selected");
              selectedWard = null;
          }
      }
      
      // Add event listeners for wards
      wards.forEach(ward => {
          const path = ward.querySelector("path");
      
          ward.addEventListener("click", (e) => {
              e.stopPropagation(); // Prevent click-away logic
      
              // Reset previous selection
              resetSelection();
      
              // Mark current ward as selected
              path.classList.add("selected");
              selectedWard = ward;
      
              // Show the info box
              const wardId = ward.id;
              const data = wardData[wardId];
              if (data) {
                  // Update the header dynamically
                  document.querySelector("#info-box .header").innerHTML = `
                      <img src="${data.flag}" alt="${data.name} Flag" class="ward-flag">
                      <h3 id="ward-name">${data.name} (${data.kanji})</h3>
                  `;
      
                  // Populate the info box content
                  wardDescription.innerHTML = `
                      <div class="content">
                          <div class="label">Kanji Meaning:</div>
                          <div class="value">${data.meaning}</div>
                          <div class="label">Key Areas:</div>
                          <div class="value">${data.mainCity}</div>
                          <div class="label">Main Station:</div>
                          <div class="value">${data.mainTrainStation}</div>
                          <div class="label">Population:</div>
                          <div class="value">${data.population}</div>
                          <div class="label">History:</div>
                          <div class="value">${data.briefHistory}</div>
                          <div class="label">Famous Culinary:</div>
                          <div class="value">${data.famousFood}</div>
                          <div class="label">Attractions:</div>
                          <div class="value">
                              ${data.landmarks
                                  .map(
                                      (landmark) =>
                                          `<a href="${landmark.link}" target="_blank">${landmark.name}</a>`
                                  )
                                  .join(", ")}
                          </div>
                          <div class="label">Hidden Spots:</div>
                          <div class="value">
                              ${data.hiddenGems
                                  .map(
                                      (gem) =>
                                          `<a href="${gem.link}" target="_blank">${gem.name}</a>`
                                  )
                                  .join(", ")}
                          </div>
                          <div class="label">More Info:</div>
                          <div class="value"><a href="${data.wikipedia}" target="_blank">Wikipedia</a></div>
                      </div>
                  `;
      
                  // Show the info box
                  infoBox.classList.add("visible");
              }
          });
      });
      
      // Click-away logic
      document.addEventListener("click", (e) => {
          const isClickInsideInfoBox = infoBox.contains(e.target);
          const isClickInsideMap = Array.from(wards).some(ward => ward.contains(e.target));
      
          if (!isClickInsideInfoBox && !isClickInsideMap) {
              infoBox.classList.remove("visible");
              resetSelection();
          }
      });
      
      // Add Escape key functionality to hide the info box
      document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
              infoBox.classList.remove("visible");
              resetSelection();
          }
      });
      
      // Add close button functionality
      if (closeBtn) {
          closeBtn.addEventListener("click", () => {
              infoBox.classList.remove("visible");
              resetSelection();
          });
      }

      // Load the sounds
const clickSound = new Audio("Sound fx/Clicked.mp3");

clickSound.volume = 0.6; // Adjust volume for click sound

// Play hover sound on mouseover
wards.forEach(ward => {
    const path = ward.querySelector("path");

    // Play click sound on click
    ward.addEventListener("click", () => {
        clickSound.currentTime = 0; // Reset to start for rapid replays
        clickSound.play();
    });
});


const audio = document.getElementById('Bgm-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const volumeUpBtn = document.getElementById('volume-up-btn');
const volumeDownBtn = document.getElementById('volume-down-btn');

// Toggle Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Increase Volume
volumeUpBtn.addEventListener('click', () => {
    if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + 0.1);
    }
});

// Decrease Volume
volumeDownBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - 0.1);
    }
});

function showInfoBox(content) {
    const infoBox = document.getElementById('info-box');
    infoBox.innerHTML = content; // Update content dynamically
    infoBox.classList.add('visible'); // Show the box
  }
  
  function hideInfoBox() {
    const infoBox = document.getElementById('info-box');
    infoBox.classList.remove('visible'); // Hide the box
  }

