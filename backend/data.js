const data = {
  games: [
    {
      name: "Call of Duty 1",
      slug: "cod1",
      category: "shooting",
      image: "/images/cod1jpg.jpg",
      brand: "Infinity Ward",
      rating: "2.2",
      numReviews: 10,
      description:
        "Call of Duty, released in 2003, is a groundbreaking first-person shooter set in World War II. Developed by Infinity Ward and published by Activision, it introduced innovative AI-controlled allies and received critical acclaim, winning multiple Game of the Year awards.",
      images: ["/images/cod1jpg.jpg", "/images/cod1jpg2.jpg"], // Example of multiple images
      playersAllowed: "Single player, Multiplayer",
      pricing: "$19.99",
      releaseDate: "October 29, 2003",
    },
    {
      name: "Call of Duty 4 Modern Warfare",
      slug: "codmw",
      category: "shooting",
      image: "/images/codmwjpg.jpg",
      brand: "Infinity Ward",
      rating: "4.5",
      numReviews: 98,
      description:
        "Call of Duty 4: Modern Warfare, released in 2007, marks a departure from World War II settings, immersing players in modern warfare scenarios. Developed by Infinity Ward, it received universal acclaim for its gripping storyline and multiplayer innovation. With over 23 million copies sold, it remains one of the best-selling games worldwide.",
      images: ["/images/codmwjpg.jpg", "/images/codmwjpg2.jpg"], // Example of multiple images
      playersAllowed: "Multiplayer",
      pricing: "$29.99",
      releaseDate: "November 5, 2007",
    },
    {
      name: "Call of Duty Black Ops 3",
      slug: "codblackops3",
      category: "shooting",
      image: "/images/codblackops3jpg.jpg",
      brand: "Activision",
      rating: "3.8",
      numReviews: 18,
      description:
        "Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision. It is the twelfth entry in the Call of Duty series and the sequel to the 2012 video game Call of Duty: Black Ops II.",
      images: ["/images/codblackops3jpg.jpg"], // Example of single image
      playersAllowed: "Single player, Multiplayer, Co-op",
      pricing: "$39.99",
      releaseDate: "November 6, 2015",
    },
    {
      name: "Call of Duty World War 2",
      slug: "codww2",
      category: "shooting",
      image: "/images/codww2jpg.jpg",
      brand: "Activision",
      rating: "3.5",
      numReviews: 75,
      description:
        "Call of Duty: WWII, released in 2017, returns to World War II settings, focusing on the European theater. Developed by Sledgehammer Games, it received positive reviews for its immersive campaign and revamped multiplayer mode. Despite criticisms of familiar gameplay elements, it became one of the highest-grossing console games of 2017.",
      images: ["/images/codww2jpg.jpg", "/images/codww2jpg2.jpg"], // Example of multiple images
      playersAllowed: "Single player, Multiplayer, Co-op",
      pricing: "$49.99",
      releaseDate: "November 3, 2017",
    },
    {
      name: "PUBG",
      slug: "pubg",
      category: "shooting",
      image: "/images/pubgjpg.jpg",
      brand: "PUBG Studios",
      rating: "4.2",
      numReviews: 137,
      description:
        "PUBG: Battlegrounds, launched in 2017, is a pioneering battle royale game where up to 100 players fight to be the last person standing on a shrinking map. Developed by PUBG Studios, it gained acclaim for introducing new gameplay dynamics and popularizing the battle royale genre, achieving over 75 million sales across multiple platforms and becoming one of the highest-grossing video games of all time.",
      images: ["/images/pubgjpg.jpg", "/images/pubgjpg2.jpg"], // Example of multiple images
      playersAllowed: "Multiplayer",
      pricing: "Free to play",
      releaseDate: "December 20, 2017",
    },
  ],
};

export default data;