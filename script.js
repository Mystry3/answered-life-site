function beginJourney() {
  document.querySelector(".worlds").scrollIntoView({
    behavior: "smooth"
  });
}

function surpriseMe() {
  const journeys = [
    {
      title: "A Hidden Journey",
      message:
        "🏔️ You discover a mysterious mountain.\n\n" +
        "🌍 Then you meet the culture surrounding it.\n\n" +
        "📖 A story is waiting for you.\n\n" +
        "🧩 But first... solve a challenge."
    },
    {
      title: "A Journey Through the Mind",
      message:
        "🧠 A strange question appears.\n\n" +
        "What if the way you see the world is not the way it really is?\n\n" +
        "🧩 Your journey begins with a mystery."
    },
    {
      title: "A Moment of Life",
      message:
        "✨ Somewhere in the world, someone has a story.\n\n" +
        "❤️ A moment of love.\n\n" +
        "🌱 A moment of change.\n\n" +
        "💭 What would your story be?"
    },
    {
      title: "Beyond the Stars",
      message:
        "🌌 You look into the night sky.\n\n" +
        "Among countless stars, you are here.\n\n" +
        "✨ Explore. Wonder. Continue."
    }
  ];

  const journey =
    journeys[Math.floor(Math.random() * journeys.length)];

  alert(
    journey.title +
    "\n\n" +
    journey.message
  );
    }
