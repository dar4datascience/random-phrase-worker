const phrases = [
  "The early bird catches the worm, but the second mouse gets the cheese.",
  "If at first you don't succeed, call it version 1.0.",
  "There's no place like 127.0.0.1.",
  "I would tell you a UDP joke, but you might not get it.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Programmer: a machine that turns coffee into code.",
  "There are 10 types of people: those who understand binary and those who don't.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "How many programmers does it take to change a light bulb? None — that's a hardware problem.",
  "The best thing about a boolean is that even if you're wrong, you're only off by a bit.",
  "Software is like sex: it's better when it's free. — Linus Torvalds",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Premature optimization is the root of all evil. — Donald Knuth",
  "It works on my machine.",
  "That's not a bug, it's a feature.",
  "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 127 little bugs in the code.",
  "First, solve the problem. Then write the code. — John Johnson",
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie"
];

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      return new Response(JSON.stringify({ phrase }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
