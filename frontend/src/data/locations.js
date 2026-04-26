// Village Pizza & Seafood — branch directory
// Edit/swap fields freely; pages read from this single source.

export const locations = [
  {
    id: "dickinson",
    name: "Dickinson",
    address: "4335 FM 517 Rd. East, Dickinson, TX",
    phone: "281-534-4222",
    orderUrl: "https://villagepizzadickinson.com/",
    hours: "Mon–Sun: 10:30am – 10:00pm",
  },
  {
    id: "la-porte",
    name: "La Porte",
    address: "1128 S. Broadway St, La Porte, TX 77571",
    phone: "281-470-7007",
    orderUrl: "https://villagepizzalaporte.com/",
    hours: "Mon–Sun: 10:30am – 10:00pm",
  },
  {
    id: "league-city",
    name: "League City",
    address: "2314 West Main St, League City, TX 77573",
    phone: "281-332-3606",
    orderUrl:
      "http://villagepizzaseafood.ordering.ordercounter.com/",
    hours: "Mon–Sun: 10:30am – 10:00pm",
  },
  {
    id: "pasadena",
    name: "Pasadena",
    address: "3910 Fairmont Pkwy, Pasadena, TX 77504",
    phone: "281-998-9200",
    orderUrl:
      "https://www.clover.com/online-ordering/villagepizzaseafood",
    hours: "Mon–Sun: 10:30am – 10:00pm",
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    address: "12407 Texas Hwy 6, Santa Fe, TX 77510",
    phone: "409-927-2345",
    orderUrl: "https://online.skytab.com/7621cab6e4ac2cd582dc8f49f82586fa",
    hours: "Call for hours",
  },
  {
    id: "seabrook",
    name: "Seabrook",
    address: "3568 Nasa Parkway, Seabrook, TX 77586",
    phone: "281-326-3200",
    orderUrl: "https://online.skytab.com/245afc733d29b9a3eb4ab9980e81bbbb",
    hours: "Call for hours",
  },
  {
    id: "ce-king",
    name: "CE King",
    address: "9627 CE King Pkwy, Houston, TX",
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
