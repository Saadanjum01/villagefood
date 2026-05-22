// Auto-generated from extracted village_data.json
export const locations = [
  {
    id: "dickinson",
    name: "Dickinson",
    address: "4335 fm 517 rd. east, dickinson, tx",
    phone: "281-534-4222",
    orderUrl: "https://villagepizzadickinson.com/",
    hours: "Call for hours",
  },
  {
    id: "la-porte",
    name: "La Porte",
    address: "1128 s. broadway st. la porte, tx 77571",
    phone: "281-470-7007",
    orderUrl: "https://villagepizzalaporte.com/",
    hours: "Call for hours",
  },
  {
    id: "pasadena",
    name: "Pasadena",
    address: "3910 fairmont parkway, pasadena, texas 77504",
    phone: "281-998-9200",
    orderUrl: "https://www.clover.com/online-ordering/villagepizzaseafood",
    hours: "mon 10:30 am – 10:00 pm | tue 10:30 am – 10:00 pm | wed 10:30 am – 10:00 pm | thu 10:30 am – 10:00 pm | fri 10:30 am – 10:00 pm | sat 10:30 am – 10:00 pm | sun 10:30 am – 10:00 pm",
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    address: "12407 texas highway 6, santa fe, texas 77510",
    phone: "409-927-2345",
    orderUrl: "https://online.skytab.com/7621cab6e4ac2cd582dc8f49f82586fa",
    hours: "Call for hours",
  },
  {
    id: "seabrook",
    name: "Seabrook",
    address: "3568 nasa parkway, seabrook, texas 77586",
    phone: "281-326-3200",
    orderUrl: "https://online.skytab.com/245afc733d29b9a3eb4ab9980e81bbbb",
    hours: "Call for hours",
  },
  {
    id: "ce-king",
    name: "CE King",
    address: "9627 c e king parkway, houston, tx, usa",
    phone: "281-456-4111",
    orderUrl: "https://mr-cs-houston.cloveronline.com/",
    hours: "Call for hours",
  },
];

export const getLocationById = (id) =>
  locations.find((l) => l.id === id);

export const mapsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export const mapEmbedUrl = (address) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
