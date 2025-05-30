const resList = [
  {
    data: {
      id: "1",
      name: "Spice Hub",
      rating: 1.2,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg",
      cuisine: ["North Indian", "Chinese"],
      deliveryTime: "30 mins",
      averageCost: "₹300 for two",
    },
  },
  {
    data: {
      id: "2",
      name: "Tandoori Flames",
      rating: 4.5,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/aromatic-chicken-biryani-in-a-copper-pot.webp",
      cuisine: ["Mughlai", "Biryani"],
      deliveryTime: "25 mins",
      averageCost: "₹350 for two",
    },
  },
  {
    data: {
      id: "3",
      name: "Urban Bites",
      rating: 3.9,
      image:
        "https://media.istockphoto.com/id/1389884667/photo/the-juicy-lucy-stuffed-cheeseburger-with-fried-onions.jpg?b=1&s=612x612&w=0&k=20&c=Vh1mszzjDDDNtTTwaMPlIcmUc7MIuXXR69ijREEZbE8=",
      cuisine: ["Fast Food", "Burgers"],
      deliveryTime: "20 mins",
      averageCost: "₹250 for two",
    },
  },
  {
    data: {
      id: "4",
      name: "Green Bowl",
      rating: 4.1,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/fresh-salmon-salad-with-herbs-and-citrus.png",
      cuisine: ["Healthy", "Salads"],
      deliveryTime: "35 mins",
      averageCost: "₹400 for two",
    },
  },
  {
    data: {
      id: "5",
      name: "Curry Kingdom",
      rating: 4.3,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/08/grilled-crispy-pork-with-rice.jpg",
      cuisine: ["South Indian", "Andhra"],
      deliveryTime: "28 mins",
      averageCost: "₹320 for two",
    },
  },
  {
    data: {
      id: "6",
      name: "Dragon Delight",
      rating: 4.0,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/vibrant-vegetable-rice-stir-fry-delight.webp",
      cuisine: ["Chinese", "Thai"],
      deliveryTime: "32 mins",
      averageCost: "₹280 for two",
    },
  },
  {
    data: {
      id: "7",
      name: "Pizza Crust",
      rating: 4.6,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/12/cutting-pizza.jpg",
      cuisine: ["Italian", "Pizza"],
      deliveryTime: "22 mins",
      averageCost: "₹450 for two",
    },
  },
  {
    data: {
      id: "8",
      name: "Bombay Sandwich Co.",
      rating: 3.8,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-bacon-bagel.jpg",
      cuisine: ["Street Food", "Snacks"],
      deliveryTime: "18 mins",
      averageCost: "₹200 for two",
    },
  },
  {
    data: {
      id: "9",
      name: "Wrap It Up",
      rating: 4.1,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/08/chicken-avocado-wraps.jpg",
      cuisine: ["Mexican", "Wraps"],
      deliveryTime: "24 mins",
      averageCost: "₹270 for two",
    },
  },
  {
    data: {
      id: "10",
      name: "Desi Vibes",
      rating: 4.4,
      image:
        "https://media.istockphoto.com/id/1477217536/photo/image-of-chargrilled-marinated-red-snapper-restaurant-meal-lemon-slice-garnish-on-grilled.jpg?b=1&s=612x612&w=0&k=20&c=gAX4gL40-rtWkba0lYbktOGEE-lTApMAPQitjQnrk0I=",
      cuisine: ["Indian", "Tandoori"],
      deliveryTime: "29 mins",
      averageCost: "₹330 for two",
    },
  },
  {
    data: {
      id: "11",
      name: "Cafe Mocha",
      rating: 4.2,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/delicious-tiramisu-dessert-slice-on-elegant-plate.webp",
      cuisine: ["Cafe", "Desserts"],
      deliveryTime: "27 mins",
      averageCost: "₹350 for two",
    },
  },
  {
    data: {
      id: "12",
      name: "Flavour Town",
      rating: 3.7,
      image:
        "https://media.istockphoto.com/id/1301956915/photo/traditional-danish-dishes.jpg?b=1&s=612x612&w=0&k=20&c=UMTJqn0YQLcTvFkf5cIC4EMZcb0yfH99UGPN8MhpRkY=",
      cuisine: ["Continental", "Fusion"],
      deliveryTime: "34 mins",
      averageCost: "₹400 for two",
    },
  },
  {
    data: {
      id: "13",
      name: "Punjab Express",
      rating: 4.3,
      image:
        "https://media.istockphoto.com/id/1307253080/photo/methi-paratha.jpg?b=1&s=612x612&w=0&k=20&c=wpGeiLNVVpdgTP1pLakquF1U4hJsr_zF2grP_86BEGU=",
      cuisine: ["Punjabi", "Paratha"],
      deliveryTime: "26 mins",
      averageCost: "₹310 for two",
    },
  },
  {
    data: {
      id: "14",
      name: "Biryani Box",
      rating: 4.5,
      image:
        "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?b=1&s=612x612&w=0&k=20&c=DiaW0yTvt1-ydUk_f_i7YyJ8KoS8ODeHeGlJawwS0o0=",
      cuisine: ["Hyderabadi", "Biryani"],
      deliveryTime: "30 mins",
      averageCost: "₹370 for two",
    },
  },
  {
    data: {
      id: "15",
      name: "Sushi Sama",
      rating: 4.1,
      image:
        "https://media.istockphoto.com/id/108178091/photo/big-maki-sushi.jpg?b=1&s=612x612&w=0&k=20&c=_zVyg6wXKa12SEmN5VxZZmBJzUWKRitvzx58_wDWyhY=",
      cuisine: ["Japanese", "Sushi"],
      deliveryTime: "40 mins",
      averageCost: "₹600 for two",
    },
  },
  {
    data: {
      id: "16",
      name: "Street Zaika",
      rating: 3.9,
      image:
        "https://media.istockphoto.com/id/1212212948/photo/genius-bhalle.jpg?b=1&s=612x612&w=0&k=20&c=kYRtc7Vd0BMoMB-_LpcF5YVDCEWWmeJNPF_jGNeZ31E=",
      cuisine: ["Chaat", "Snacks"],
      deliveryTime: "15 mins",
      averageCost: "₹150 for two",
    },
  },
  {
    data: {
      id: "17",
      name: "Burger Blast",
      rating: 4.0,
      image:
        "https://media.istockphoto.com/id/531564300/photo/homemade-memorial-day-hamburger-picnic.jpg?b=1&s=612x612&w=0&k=20&c=og3xXlhXAfjDgd2CXJga6puyFJhGn1op-wOvcMCjhPM=",
      cuisine: ["American", "Burgers"],
      deliveryTime: "21 mins",
      averageCost: "₹280 for two",
    },
  },
  {
    data: {
      id: "18",
      name: "Hot Wok",
      rating: 4.3,
      image:
        "https://media.istockphoto.com/id/1449519071/photo/homemade-uzbek-dish-boiled-manti-or-manty-chuchvara-dumpling-typical-of-central-asian-cuisine.jpg?b=1&s=612x612&w=0&k=20&c=8GHT2nuWA3o8TlJO3RoK5PvZ0CaeT0MB_0myvcNcll8=",
      cuisine: ["Asian", "Chinese"],
      deliveryTime: "33 mins",
      averageCost: "₹300 for two",
    },
  },
  {
    data: {
      id: "19",
      name: "Rice Bowl Express",
      rating: 4.2,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/colorful-vegetable-stir-fry-with-rice.jpg",
      cuisine: ["Asian", "Rice Bowls"],
      deliveryTime: "28 mins",
      averageCost: "₹290 for two",
    },
  },
  {
    data: {
      id: "20",
      name: "Sweet Treats",
      rating: 4.6,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2022/11/pastries-and-biscuits.jpg",
      cuisine: ["Desserts", "Bakery"],
      deliveryTime: "20 mins",
      averageCost: "₹240 for two",
    },
  },
];

export default resList;