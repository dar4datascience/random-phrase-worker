const openings = [
  { text: "Buenas noches", emoji: "🌙" },
  { text: "Dulces sueños", emoji: "😴" },
  { text: "Que descanses", emoji: "✨" },
  { text: "Descansa ya", emoji: "🌙" },
  { text: "Sueña bonito", emoji: "💫" },
  { text: "Que la noche te abrace", emoji: "🌜" },
  { text: "Hasta el amanecer", emoji: "🌅" },
  { text: "Descansa, mi vida", emoji: "💕" },
  { text: "Que el sueño te visite", emoji: "😴" },
  { text: "Buenas noches, mi cielo", emoji: "🌌" },
];

const nicknames = [
  { text: "mi hermosa", emoji: "🌸" },
  { text: "mi tierna", emoji: "🌷" },
  { text: "mi dulce", emoji: "🍯" },
  { text: "mi preciosa", emoji: "💎" },
  { text: "mi flor más bella", emoji: "🌺" },
  { text: "mi amor", emoji: "❤️" },
  { text: "mi cielito", emoji: "🌟" },
  { text: "mi luz de la noche", emoji: "✨" },
  { text: "mi gardenia", emoji: "🌼" },
  { text: "mi rosa de la noche", emoji: "🌹" },
  { text: "mi hada del sueño", emoji: "🧚‍♀️" },
];

const celestial = [
  { text: "las estrellas te abracen esta noche", emoji: "⭐" },
  { text: "la luna te cuente un cuento", emoji: "🌕" },
  { text: "el cielo entero te cuide", emoji: "🌌" },
  { text: "las constelaciones te guíen", emoji: "🔭" },
  { text: "la luna llena te ilumine", emoji: "🌕" },
  { text: "cada estrella susurre tu nombre", emoji: "✨" },
  { text: "el firmamento te bendiga", emoji: "🌠" },
  { text: "la vía láctea te envuelva", emoji: "🌌" },
  { text: "los astros te sonrían", emoji: "🌟" },
  { text: "la luna te acune entre sus rayos", emoji: "🌙" },
  { text: "las estrellas bailen para ti", emoji: "💃" },
  { text: "la noche estrellada te cante", emoji: "🌃" },
];

const nature = [
  { text: "la lluvia te acaricie suavemente", emoji: "🌧️" },
  { text: "los pétalos caigan sobre ti", emoji: "🌸" },
  { text: "el viento te susurre poemas", emoji: "🌬️" },
  { text: "tu jardín florezca en sueños", emoji: "🌷" },
  { text: "la brisa te lleve a dormir", emoji: "🍃" },
  { text: "cada flor se abra para ti", emoji: "🌺" },
  { text: "el rocío te bese la frente", emoji: "💧" },
  { text: "la tormenta se calme a tu lado", emoji: "⛈️" },
  { text: "las hojas te canten nanas", emoji: "🍂" },
  { text: "el río te lleve a soñar", emoji: "🏞️" },
  { text: "la niebla te envuelva en calma", emoji: "🌫️" },
  { text: "la tierra te abrace como raíz", emoji: "🌱" },
];

const dreams = [
  { text: "los sueños te lleven donde la lluvia nace", emoji: "💭" },
  { text: "tu almohada sea de nubes", emoji: "☁️" },
  { text: "las mantas te cubran de estrellas", emoji: "🌟" },
  { text: "tu sueño sea profundo y sereno", emoji: "😴" },
  { text: "los sueños te regalen un jardín", emoji: "🌈" },
  { text: "tu descanso sea un poema", emoji: "📜" },
  { text: "los sueños te lleven a volar", emoji: "🕊️" },
  { text: "tu cama sea un campo de flores", emoji: "🌻" },
  { text: "los sueños te abracen con ternura", emoji: "🤗" },
  { text: "tu descanso sea tan dulce como tú", emoji: "🍬" },
];

const catMetaphors = [
  { text: "que tu descanso sea suave como la barriga de un gatito", emoji: "🐱" },
  { text: "que tus sueños sean tan suaves como las patitas de un gato", emoji: "🐾" },
  { text: "que duermas acurrucada como un gatito al sol", emoji: "🐈" },
  { text: "que la paz te envuelva como el pelaje de un gato en invierno", emoji: "🐱" },
  { text: "que tus sueños ronroneen como un gatito feliz", emoji: "😻" },
  { text: "que descanses sobre nubes tan mullidas como la barriga de un gato", emoji: "☁️" },
  { text: "que la noche te acaricie como las patitas de un gatito sobre tu cara", emoji: "🐾" },
  { text: "que tu sueño sea tan tranquilo como un gato durmiendo al sol", emoji: "🐈" },
  { text: "que los sueños te abracen como un gatito que se acurruca en tu pecho", emoji: "🐱" },
  { text: "que descanses tan plácidamente como un gato sobre una cobija tibia", emoji: "😺" },
  { text: "que tu descanso sea tan dulce como el ronroneo de un gatito dormido", emoji: "💤" },
  { text: "que la noche te envuelva tan suave como las orejitas de un gato", emoji: "🐱" },
];

const closings = [
  { text: "te quiero mucho", emoji: "❤️" },
  { text: "que los sueños te abracen", emoji: "🤗" },
  { text: "hasta mañana", emoji: "🌅" },
  { text: "descansa entre estrellas", emoji: "⭐" },
  { text: "sueña conmigo", emoji: "💭" },
  { text: "que amanezca con tu sonrisa", emoji: "😊" },
  { text: "te llevo en el corazón", emoji: "💖" },
  { text: "hasta que el sol nos vuelva a encontrar", emoji: "☀️" },
  { text: "que la noche te sea leve", emoji: "🌙" },
  { text: "eres mi último pensamiento del día", emoji: "🧠" },
];

const name = "Flor de Lluvia 🌸🌱💧";

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const templates = [
  // Template 1: Opening + nickname + celestial + cat + closing
  () => {
    const o = pick(openings), n = pick(nicknames), c = pick(celestial), d = pick(dreams), cat = pick(catMetaphors), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${c.text} ${c.emoji} y ${d.text} ${d.emoji}. ${cap(cat.text)} ${cat.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 2: Opening + nickname + nature + cat + closing
  () => {
    const o = pick(openings), n = pick(nicknames), na = pick(nature), c = pick(celestial), cat = pick(catMetaphors), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji}. Que ${na.text} ${na.emoji} y ${c.text} ${c.emoji}. ${cap(cat.text)} ${cat.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 3: Opening + nickname + dreams + nature + cat + closing
  () => {
    const o = pick(openings), n = pick(nicknames), d = pick(dreams), na = pick(nature), cat = pick(catMetaphors), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${d.text} ${d.emoji} y que ${na.text} ${na.emoji}. ${cap(cat.text)} ${cat.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 4: Opening + celestial + nature + cat + closing (no nickname inline)
  () => {
    const o = pick(openings), c = pick(celestial), na = pick(nature), d = pick(dreams), cat = pick(catMetaphors), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${name}. Que ${c.text} ${c.emoji}, que ${na.text} ${na.emoji}, y que ${d.text} ${d.emoji}. ${cap(cat.text)} ${cat.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 5: Opening + nickname + cat + dreams + closing
  () => {
    const o = pick(openings), n = pick(nicknames), cat = pick(catMetaphors), d = pick(dreams), na = pick(nature), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji}. ${cap(cat.text)} ${cat.emoji}. ${cap(d.text)} ${d.emoji} y que ${na.text} ${na.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 6: Opening + nickname + celestial + nature + cat + dreams + closing (long)
  () => {
    const o = pick(openings), n = pick(nicknames), c = pick(celestial), na = pick(nature), cat = pick(catMetaphors), d = pick(dreams), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${c.text} ${c.emoji}, que ${na.text} ${na.emoji}, ${cat.text} ${cat.emoji}, y que ${d.text} ${d.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },
];

function generatePhrase() {
  const template = pick(templates);
  return template();
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      const phrase = generatePhrase();
      return new Response(JSON.stringify({ phrase }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
