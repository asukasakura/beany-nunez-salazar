export const products = [
  {
    id : 0,
    title : "All In One Snail Repair Cream",
    category : "hidratantes",
    brand : "Mizon",
    price: "99.9",
    pictureUrl: "/assets/images/products/all-in-one-snail-repair-cream.jpeg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in laboriosam iure magnam accusantium repudiandae minima, cumque illum quisquam ipsum earum provident velit est. Quibusdam dolor consectetur non officiis praesentium.",
    stock: 10
  },
  {
    id : 1,
    title : "Hialuronic Acid Toner",
    category : "tonico",
    brand : "Isnt tree",
    price: "99.9",
    pictureUrl: "/assets/images/products/Tonico-IsnTree-Plus.jpeg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in laboriosam iure magnam accusantium repudiandae minima, cumque illum quisquam ipsum earum provident velit est. Quibusdam dolor consectetur non officiis praesentium.",
    stock: 5
  },
  {
    id : 2,
    title : "Neogen Real Vita C Serum",
    category : "serum",
    brand : "Neogen",
    price: "99.9",
    pictureUrl: "/assets/images/products/Neogen-Real-Vita-C-Serum.jpeg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in laboriosam iure magnam accusantium repudiandae minima, cumque illum quisquam ipsum earum provident velit est. Quibusdam dolor consectetur non officiis praesentium.",
    stock: 10
  },
  {
    id : 3,
    title : "Anthelios Shaka Fluide",
    category : "protector-solar",
    brand : "La Roche-Posay",
    price: "99.9",
    pictureUrl: "/assets/images/products/anthelios.jpeg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in laboriosam iure magnam accusantium repudiandae minima, cumque illum quisquam ipsum earum provident velit est. Quibusdam dolor consectetur non officiis praesentium.",
    stock: 10
  },
  {
    id : 4,
    title : "Canola Honey Lip Balm",
    category : "balsamos",
    brand : "Innisfree",
    price: "99.9",
    pictureUrl: "/assets/images/products/Canola-Honey-Lip-Balm.jpeg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in laboriosam iure magnam accusantium repudiandae minima, cumque illum quisquam ipsum earum provident velit est. Quibusdam dolor consectetur non officiis praesentium.",
    stock: 10
  },
  {
    id : 5,
    title : "Advanced Snail Peptide Eye Cream",
    category : "hidratantes",
    brand : "COSRX",
    price: "99.9",
    pictureUrl: "/assets/images/products/Advanced-Snail-Peptide-Eye-Cream.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in laboriosam iure magnam accusantium repudiandae minima, cumque illum quisquam ipsum earum provident velit est. Quibusdam dolor consectetur non officiis praesentium.",
    stock: 10
  }
]


const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}