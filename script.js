const movies = [
  {
    title: "Alien 👽",
    description:
      "A terrifying space horror film where a crew battles a deadly alien creature.",
  },
  {
    title: "The Shining 👧🏼👧🏼",
    description:
      "A psychological horror film about a family's terrifying experience at an isolated hotel.",
  },
  {
    title: "The Thing 👹",
    description:
      "A horror film featuring a shape-shifting alien that terrorizes a group in Antarctica.",
  },
  {
    title: "The Exorcist 😈",
    description:
      "A chilling tale of a young girl's demonic possession and the exorcism that follows.",
  },
  {
    title: "Halloween (1978) 🎃",
    description:
      "A classic slasher film featuring Michael Myers on a killing spree.",
  },
  {
    title: "Jaws 🦈",
    description:
      "A thrilling horror film about a giant shark terrorizing a small beach town.",
  },
  {
    title: "The Texas Chain Saw Massacre 🪚",
    description:
      "A brutal horror story of a group of friends encountering a family of cannibals.",
  },
  {
    title: "Rosemary's Baby 👶🏼",
    description:
      "A psychological horror film about a pregnant woman who suspects her baby is not normal.",
  },
  {
    title: "The Blair Witch Project 🧙🏼",
    description:
      "A found-footage horror film about students investigating a local legend.",
  },
  {
    title: "A Nightmare on Elm Street 🛌🏼",
    description:
      "A slasher film featuring Freddy Krueger, who kills teens in their dreams.",
  },
  {
    title: "Poltergeist 📺",
    description:
      "A horror film about a family's home being haunted by spirits.",
  },
  {
    title: "Psycho 🔪",
    description:
      "A psychological thriller involving a secretary, a motel, and its mysterious caretaker.",
  },
  {
    title: "The Ring 📺",
    description:
      "A supernatural horror film about a cursed videotape that kills its viewers.",
  },
  {
    title: "Hereditary👪",
    description:
      "A psychological horror film about a family unraveling dark secrets after their grandmother's death.",
  },
  {
    title: "Paranormal Activity 📹",
    description:
      "A found-footage horror film depicting a couple haunted by a supernatural presence.",
  },
  {
    title: "Pet Sematary ⚰️",
    description:
      "A horror story about a family encountering dark forces at a burial ground.",
  },
  {
    title: "The Amityville Horror 🏚️",
    description:
      "A horror film about a family haunted by sinister forces in their new home.",
  },
  {
    title: "Scream 👻",
    description:
      "A slasher film where a masked killer targets high school students.",
  },
  {
    title: "A Quiet Place 🤫",
    description:
      "A horror film where a family must live in silence to avoid deadly creatures.",
  },
  {
    title: "The Autopsy of Jane Doe 💀",
    description:
      "A horror mystery film about a father-son duo uncovering a corpse's dark secrets.",
  },
  {
    title: "The Evil Dead 👹",
    description:
      "A horror film about friends encountering evil spirits in a remote cabin.",
  },
  {
    title: "[Rec] 🎥",
    description:
      "A found-footage horror film about a journalist trapped in a building with infected residents.",
  },
  {
    title: "Hostel 🛎️",
    description:
      "A horror film about travelers who become victims of a sadistic organization.",
  },
  {
    title: "Saw 🪚",
    description:
      "A horror film about individuals forced to play deadly games to survive.",
  },
  {
    title: "It 🤡",
    description:
      "A horror film featuring a group of kids facing a shape-shifting clown.",
  },
  {
    title: "Final Destination ✈️",
    description:
      "A horror film about a group of friends cheating death and facing its consequences.",
  },
  {
    title: "Friday the 13th Part VI: Jason Lives 🏕️",
    description: "A slasher film featuring Jason Voorhees back from the dead.",
  },
  {
    title: "The Exorcism of Emily Rose 👹",
    description: "A horror film about a trial following a failed exorcism.",
  },
  {
    title: "Wrong Turn 🚗",
    description:
      "A horror film about a group of friends encountering cannibals in the forest.",
  },
  {
    title: "Child's Play 🪆",
    description: "A horror film about a killer doll named Chucky.",
  },
  {
    title: "Barbarian 🛎️",
    description:
      "A horror film about a group of friends exploring a haunted mansion.",
  },
  {
    title: "Get Out 👨🏿",
    description:
      "A psychological horror film about a man uncovering a sinister secret while visiting his girlfriend's family.",
  },
  {
    title: "28 Weeks Later 🧟",
    description:
      "A horror film about a virus outbreak turning people into zombies.",
  },
  {
    title: "Ghost Ship ⚓",
    description:
      "A horror film about a crew discovering a haunted ship lost at sea.",
  },
];

const usedIndexes = new Set();
const movieElement = document.getElementById("movie");

function typeText(element, text) {
  element.innerHTML = ""; 
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

function generateMovie() {
  if (usedIndexes.size >= movies.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * movies.length);

    if (usedIndexes.has(randomIdx)) continue;

    const movie = movies[randomIdx];
    usedIndexes.add(randomIdx);

    const movieTitle = document.createElement("h2");
    const movieDescription = document.createElement("p");

    movieElement.innerHTML = "";
    movieElement.appendChild(movieTitle);
    movieElement.appendChild(movieDescription);

    typeText(movieTitle, movie.title);
    setTimeout(() => typeText(movieDescription, movie.description), 2000);
    break;
  }
}
