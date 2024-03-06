const data = [
    {
      id: 1,
      nome: "Gelato del Drago di Ghiaccio",
      img:
        "https://img.mobiuspace.com/image/aigc/89b0c8d454baeed966ca19ad1eb816e8_1024_1024.webp",
      descrizione:
      "Questo gelato artigianale è fatto con latte di yeti e zucchero di neve magica. Ha un sapore fresco e dolce, con un tocco di menta per rinfrescare il palato. Le scaglie di ghiaccio incastonate al suo interno conferiscono un freddo intenso che sembra provenire direttamente dalle lande innevate abitate dai draghi di ghiaccio.",
      prezzo: 290,
      categoria: "cono",
    },
    {
      id: 2,
      nome: "Testicolo di Orco",
      img:
        "https://u-static.fotor.com/images/text-to-image/result/PRO-3963eac4159841cc9e7778b2925e9824.jpg",
      descrizione: "Una creazione temeraria che sfida il palato con il suo audace e selvaggio sapore. Preparato con ingredienti provenienti dalle terre più remote e selvagge, questo gelato è un'esperienza unica e indimenticabile per coloro che osano assaggiarlo. La sua consistenza robusta e cremosa è ottenuta mescolando il latte delle mandrie di minotauri selvaggi con la panna delle montagne più alte, mentre il suo gusto intenso è accentuato dalle spezie rare provenienti dalle carovane dei mercanti del deserto.",
      prezzo: 350,
      categoria: "coppetta",
    },
    {
      id: 3,
      nome: "Sorbetto dell'Alba Incantata",
      img:"https://tse4.mm.bing.net/th/id/OIG3.eHxpRO33lApFPOaAWQHA?pid=ImgGn",
      descrizione:
        "Preparato con succo di frutti delle streghe appena raccolti sotto la luce dell'alba incantata, questo sorbetto ha un colore cangiante e un sapore dolce e misterioso. Ogni cucchiaiata sembra avvolgere il consumatore in un'atmosfera magica, con fragranze floreali e un tocco di incantesimo",
      prezzo: 130,
      categoria: "coppetta",
    },
    {id: 4,
    nome:"Gelato dell'alchimista errante",
    img:"https://tse3.mm.bing.net/th/id/OIG1.rLO324ecAh3t9602uXlr?pid=ImgGn",
    descrizione:"Creato da un antico alchimista alla ricerca dell'elisir dell'immortalità, questo gelato ha un gusto unico e imprevedibile. Gli ingredienti includono erbe rare, polvere di stelle cadenti e cristalli di luna polverizzati. Il suo sapore cambia a ogni assaggio, portando il consumatore in un viaggio attraverso terre sconosciute e dimensioni parallele.",
    prezzo:130,
    categoria:'stick',
    },
    {id:5,
    nome:"Gelato del Bosco Fatato",
    img:"https://tse3.mm.bing.net/th/id/OIG2.F5rd7vzdrv5Rw0PiFsbm?pid=ImgGn",
    descrizione:"Realizzato con frutti di bosco incantati e latte di unicorno, questo gelato ha un sapore delicato e avvolgente. Le fragranze dei fiori selvatici e il dolce profumo della magia delle fate lo rendono un'esperienza degna di essere vissuta per chiunque osi avventurarsi nel fitto delle foreste incantate.",
    prezzo: 350,
    categoria:"coppetta"
  },
  {
    id:6,
    nome:"Coppetta della Luna Argentea",
    img:"https://tse3.mm.bing.net/th/id/OIG2.ApoR7RgFA5MTUmCUJApo?pid=ImgGn",
    descrizione:"Preparato con succo di frutti esotici che crescono solo sotto la luce della luna piena, questo sorbetto ha un sapore rinfrescante e avvolgente. I suoi cristalli di ghiaccio brillano come stelle nel cielo notturno, mentre il suo gusto ricorda la freschezza del vento che soffia tra le montagne",
    prezzo: 350,
    categoria: 'coppetta'
  },
  {
    id:7,
    nome: "Gelato del Regno Sottomarino",
    img:"https://tse3.mm.bing.net/th/id/OIG3.Mlg6IEynjMhsZp.5saG7?pid=ImgGn",
    descrizione:"Realizzato con alghe marine rare e perle di sirena macinate, questo gelato ha un sapore salato e delicato. Le sue sfumature di blu e verde ricordano le profondità dell'oceano, mentre il suo gusto trasporta il consumatore in un viaggio attraverso i mondi sommersi, alla scoperta di meraviglie sconosciute.",
    prezzo:290,
    categoria:"cono"
  },
  {
    id:8,
    nome: "Gelato del Vulcanico Ardore",
    img:"https://tse1.mm.bing.net/th/id/OIG2.WmxWmu_IZok1THsLrfLp?pid=ImgGn",
    descrizione:"Creato con peperoncini infernali e lava di drago raffreddata, questo gelato è un'esplosione di calore e spezie. Il suo sapore ardente è mitigato da una dolcezza misteriosa, mentre il suo colore rosso fuoco ricorda le fiamme delle forges dei nani delle montagne.",
    prezzo:290,
    categoria:"cono"
  },
  {
    id:9,
    nome:"Sorbetto della Tempesta Magica",
    img:"https://tse1.mm.bing.net/th/id/OIG1.LC7IwmTZ_RrhPODIGdzQ?pid=ImgGn",
    descrizione:"Preparato con fulmini catturati in una tempesta magica e cristalli di ghiaccio del Polo Nord, questo sorbetto ha un sapore elettrizzante e rinfrescante. Ogni boccone è un viaggio attraverso cieli turbolenti e paesaggi innevati, mentre il suono del tuono rimbomba nel palato del consumatore.",
    prezzo:350,
    categoria:"coppetta"
  },
  {
    id:10,
    nome: "Gelato dell'Orchidea Lunare",
    img:"https://tse3.mm.bing.net/th/id/OIG1.AVzhR8CzXJed335a3geH?pid=ImgGn",
    descrizione:"Realizzato con petali di orchidea lunare, nettare di elfi e rugiada magica raccolta sotto il chiaro di luna, questo gelato ha un sapore delicato e avvolgente. Il suo colore viola pallido ricorda i tramonti su mondi lontani, mentre il suo gusto floreale trasporta il consumatore in un mondo di pura bellezza.",
    prezzo: 130,
    categoria:"stick"
  },
  {
    id:11,
    nome: "Gelato dell'Ombra Eterna",
    img:"https://tse1.mm.bing.net/th/id/OIG3.84nzZLIANiaWViwN.F7d?pid=ImgGn",
    descrizione:"Creato con essenze oscure e segrete provenienti dalle terre dimenticate, questo gelato ha un sapore intenso e avvolgente. Il suo colore nero come la notte e il suo gusto misterioso evocano le profondità delle tenebre, mentre il suo consumo porta il consumatore a confrontarsi con le proprie paure più profonde e oscure.",
    prezzo:130,
    categoria:"stick"
  }
];
  
  export default data;
  