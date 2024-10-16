const products = {
    groups: [
      {
        name: "Pentagram - bilynné koncentráty",
        description: "Pentagram® bylinných koncentrátov je hlavným prvkom našej ponuky a vychádza z celostného prístupu k človeku, ktorý uznáva vzájomné prepojenie tela a mysle. Inšpiruje sa starovekou teóriou jin-jangu a piatich prvkov, do ktorej sú začlenené najnovšie poznatky modernej vedy. Tieto prípravky pôsobia v tele na dvoch úrovniach. Prostredníctvom fytoterapie ovplyvňujú konkrétne telesné orgány, zatiaľ čo homeopatické zložky pôsobia na podkôrové centrá mozgu a riešia hlavnú príčinu ochorenia. Každý z piatich bylinných koncentrátov je navrhnutý tak, aby ladil s energiou jedného z piatich základných prírodných prvkov a pomáhal obnoviť rovnováhu v tele: Vironal – Kov, Regalen – Drevo, Renol – Voda, Gynex – Zem, Korolen – Oheň.",
        image: "../assets/images/pentagram-produkt.png",
        products: [
          {
            name: "Korolen",
            longDescription: {
              "Detoxikácia a ochrana organizmu": [
                "Detoxikácia: Odstraňuje toxíny, ťažké kovy a plesne z organizmu.",
                "Antioxidanty: Chráni bunky pred poškodením a spomaľuje starnutie.", 
                "Ochrana srdca a ciev: Predchádza kardiovaskulárnym chorobám a zlepšuje prekrvenie."
              ],
              "Hormonálny systém a reprodukcia": [
                "Hormóny: Harmonizuje hormonálny systém a podporuje plodnosť.", 
                "Gynekologické problémy: Pomáha pri endometrióze."
              ],
              "Nervová sústava a psychika": [
                "Mozog: Zlepšuje pamäť, koncentráciu a celkové funkcie mozgu.", 
                "Psychika: Pomáha pri strese, únave, nespavosti a depresii."
              ],
              "Srdcovo-cievny systém": [
                "Zlepšuje činnosť srdca, čistí krv a znižuje cholesterol."
              ],
              "Imunita a krvotvorba": [
                "Imunita: Posilňuje imunitný systém. ",
                "Krvotvorba: Podporuje tvorbu krvných buniek."
              ],
              "Ostatné": [
                "Kĺby a kosti: Zlepšuje stav kĺbov a pomáha pri reumatických ochoreniach.", 
                "Koža: Zlepšuje stav pokožky.",
                "Diabetes: Pomáha pri prevencii komplikácií cukrovky.", 
                "Nádorové ochorenia: Môže byť použitá ako prevencia a doplnok pri liečbe niektorých druhov rakoviny."
              ]
            },
            healthBenefits: [
                 "Detoxikácia organizmu",
                 "Ochrana srdca a ciev",
                 "Vyvážený hormonálny systém",
                 "Zdravý mozog a dobrá pamäť",
                 "Silná imunita",
                 "Zdravé kĺby a kosti",
                 "Zlepšenie stavu pokožky",
                 "Ochrana pred chronickými chorobami"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Renol",
            longDescription: {
              "Močový systém a pohlavné orgány": [
                "Močové cesty: Pomáha pri zápaloch močových ciest, obličkových kameňoch a problémoch s močením.",
                "Prostata: Zmierňuje problémy s prostatou a podporuje mužské zdravie.",
                "Plodnosť: Podporuje plodnosť u žien aj mužov.",
                "Gynekologické problémy: Pomáha pri niektorých gynekologických zápaloch."
              ],
              "Imunita a detoxikácia": [
                "Imunita: Posilňuje imunitný systém.",
                "Detoxikácia: Zbavuje telo ťažkých kovov a podporuje činnosť lymfatického systému.",
                "Alergie: Je vhodný pre alergikov a astmatikov."
              ],
              "Kostrovo-svalový systém a pohybový aparát": [
                "Kĺby a kosti: Pomáha pri bolestiach kĺbov, artróze, artritíde a osteoporóze.",
                "Svaly: Zmierňuje bolesti svalov."
              ],
              "Nervová sústava": [
                "Bolesti hlavy: Zmierňuje migrény a iné bolesti hlavy.",
                "Únava: Pomáha pri chronickej únave a nedostatku energie."
              ],
              "Koža, vlasy a nechty": [
                "Koža: Zlepšuje stav pokožky, pomáha pri ekzémoch a akné.",
                "Vlasy a nechty: Zlepšuje kvalitu vlasov, nechtov a zabraňuje predčasnému šediveniu."
              ],
              "Ostatné": [
                "Nadobličky: Harmonizuje funkciu nadobličiek a pomáha regulovať krvný tlak.",
                "Uši: Pomáha pri poruchách sluchu."
              ]
            },
            healthBenefits: [
              "Zdravé močové cesty a pohlavné orgány",
              "Silná imunita",
              "Detoxikácia organizmu",
              "Zdravé kĺby a kosti",
              "Zmiernenie bolestí",
              "Zdravá pokožka, vlasy a nechty",
              "Viac energie"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Regalen",
            longDescription: {
              "Detoxikácia a čistenie organizmu": [
                "Odstraňuje škodlivé látky, parazity a podporuje regeneráciu pečene."
              ],
              "Trávenie a metabolizmus": [
                "Upravuje zažívacie procesy, zlepšuje vstrebávanie živín a podporuje zdravie pečene a žlčníka."
              ],
              "Koža a alergie": [
                "Pomáha pri kožných problémoch a zmierňuje prejavy alergií."
              ],
              "Srdcovo-cievny systém": [
                "Zlepšuje činnosť srdca, čistí krv a znižuje cholesterol."
              ],
              "Nervová sústava": [
                "Upokojuje, zlepšuje náladu a pomáha pri migrénach."
              ],
              "Ženský reprodukčný systém": [
                "Upravuje menštruačný cyklus a zmierňuje premenštruačný syndróm."
              ],
              "Pohybový aparát": [
                "Podporuje zdravie kĺbov, šliach a väzov."
              ],
              "Imunita": [
                "Posilňuje imunitný systém a pôsobí preventívne proti nádorovým ochoreniam."
              ],
              "Oči": [
                "Pomáha pri únave a ochoreniach očí."
              ]
            },
            healthBenefits: [
              "Detoxikácia a čistenie organizmu",
              "Trávenie a metabolizmus",
              "Koža a alergie",
              "Srdcovo-cievny systém",
              "Nervová sústava",
              "Ženský reprodukčný systém",
              "Pohybový aparát",
              "Oči"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Vironal",
            longDescription: {
              "Detoxikácia a ochrana organizmu": [
                "Detoxikácia: Podporuje prirodzené detoxikačné procesy v tele.",
                "Antioxidanty: Neutralizuje voľné radikály a chráni bunky pred poškodením.",
                "Imunita: Posilňuje imunitný systém a zvyšuje odolnosť voči infekciám.",
                "Proti vírusom a baktériám: Pomáha pri prevencii a liečbe rôznych infekčných ochorení."
              ],
              "Dýchacia sústava": [
                "Pľúca: Stimuluje činnosť pľúc a uľavuje pri dýchacích ťažkostiach.",
                "Horúčka: Znižuje horúčku a podporuje potenie."
              ],
              "Tráviaca sústava": [
                "Črevá: Stimuluje činnosť hrubého čreva, zlepšuje trávenie a pomáha pri rôznych črevných ťažkostiach.",
                "Žalúdok: Uľavuje pri žalúdočných vredoch a iných poruchách trávenia."
              ],
              "Koža": [
                "Hojenie: Podporuje hojenie rán a zlepšuje vzhľad pokožky."
              ],
              "Ostatné": [
                "Lymfatický systém: Posilňuje lymfatický systém.",
                "Kostná dreň: Podporuje činnosť kostnej drene."
              ]
            },
            healthBenefits: [
              "Celková detoxikácia a ochrana organizmu",
              "Podpora imunity",
              "Zlepšenie dýchania",
              "Zdravé trávenie",
              "Zdravá a krásna pokožka",
              "Podpora hojenia"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Relaxin",
            shortDescription: "A brief summary of Product 2",
            longDescription: "A detailed description of Product 2, including its features and benefits.",
            healthBenefits: [
              "Improves skin health",
              "Supports heart health",
              "Reduces inflammation"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Gynex",
            longDescription:  {
              "Hormonálny systém a reprodukcia": [
                "Hormóny: Harmonizuje hormonálny systém, vrátane štítnej žľazy.",
                "Plodnosť: Podporuje plodnosť u žien aj mužov.",
                "Menštruácia: Upravuje menštruačný cyklus a zmierňuje menštruačné ťažkosti.",
                "Gynekologické problémy: Pomáha pri gynekologických zápaloch a iných ženských zdravotných problémoch.",
                "Menopauza: Zmierňuje príznaky menopauzy."
              ],
              "Imunita a celkové zdravie": [
                "Imunita: Posilňuje imunitný systém.",
                "Ochrana pred chorobami: Pôsobí preventívne proti niektorým typom rakoviny a iným chronickým ochoreniam.",
                "Nervová sústava: Zlepšuje psychický stav, zmierňuje stres a depresie.",
                "Koža a sliznice: Zlepšuje stav pokožky, slizníc a pľúc.",
                "Cievny systém: Má ochranný vplyv na cievy."
              ],
              "Ostatné": [
                "Kostná sústava: Pomáha predchádzať osteoporóze.",
                "Vlasy: Zabraňuje vypadávaniu vlasov.",
                "Neurologické problémy: Je perspektívny pri liečbe roztrúsenej sklerózy.",
                "Diabetes: Zlepšuje zdravotný stav diabetikov."
              ]
            },
            healthBenefits: [
              "Vyvážený hormonálny systém",
              "Podpora plodnosti",
              "Zdravé ženské reprodukčné orgány",
              "Silný imunitný systém",
              "Ochrana pred chorobami",
              "Dobrá psychická pohoda",
              "Zdravá pokožka, vlasy a sliznice",
              "Zdravé kosti a cievy",
              "Podpora pri neurologických problémoch",
              "Zlepšenie stavu pri diabete"
            ],
            images: [
             "https://picsum.photos/100/100?grayscale",
             "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Stimaral",
            longDescription: "A detailed description of Product 2, including its features and benefits.",
            healthBenefits: [
              "Improves skin health",
              "Supports heart health",
              "Reduces inflammation"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          }
        ]
      },
      {
        name: "Pentagram® – regeneračné krémy",
        description: "Nadstavbou bylinných koncentrátov Pentagramu® je séria piatich bioinformačných krémov, ktoré zodpovedajú energiám piatich prírodných prvkov: Droserin – Kov, Protektin – Drevo, Artrin – Voda, Cytovital – Zem a Ruticelit – Oheň. Tieto krémy sú výnimočné svojím zložením, obsahujúc až 50% bylinných extraktov spolu s vysokým podielom výživných a ochranných látok. Ich súčasťou je aj vzácna treťohorná termálna voda, humáty s protizápalovým účinkom a extrakty z cenných živíc (myrha, kadidlo, Croton lechleri), ktoré podporujú maximálnu regeneráciu. Krémy Pentagramu® sú špeciálne nielen svojimi účinnými látkami, ale aj svojimi terapeutickými možnosťami. Ľahko prenikajú do hlbších vrstiev pokožky, odkiaľ ovplyvňujú tkanivá. Okrem pokožky pôsobia cez energetické dráhy na hlboko uložené orgány a ich systémy, čím poskytujú komplexný účinok.",
        image: "group2-image.jpg",
        products: [
          {
            name: "Protektin",
            longDescription: "A detailed description of Product 3, including its features and benefits.",
            healthBenefits: [
              "Supports digestive health",
              "Boosts mood",
              "Aids in sleep"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Ruticelit",
            longDescription: "A detailed description of Product 4, including its features and benefits.",
            healthBenefits: [
              "Supports immune system",
              "Aids in weight loss",
              "Improves skin health"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
          {
            name: "Cytovital",
            longDescription: "A detailed description of Product 4, including its features and benefits.",
            healthBenefits: [
              "Supports immune system",
              "Aids in weight loss",
              "Improves skin health"
            ],
            images: [
              "https://picsum.photos/100/100?grayscale",
              "https://picsum.photos/100/100?grayscale"
            ]
          },
        ]
      }
      // Add more groups and products as needed
    ]
  };

export default products;