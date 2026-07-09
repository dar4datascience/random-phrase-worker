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

const flowers = [
  { text: "las gardenias abran sus pétalos para ti", emoji: "🌼" },
  { text: "tu aroma florezca como jazmín en la noche", emoji: "🌸" },
  { text: "los claveles te cuenten secretos dulces", emoji: "🌷" },
  { text: "las margaritas se cierren con tu respiración", emoji: "🤍" },
  { text: "tu jardín perfumado te guarde entre sus flores", emoji: "🌺" },
  { text: "el lirio blanco te cuide mientras duermes", emoji: "💐" },
  { text: "las orquídeas susurren tu nombre al viento", emoji: "🌸" },
  { text: "el aroma de las rosas te acompañe al dormir", emoji: "🌹" },
  { text: "las violetas se acurruquen contigo", emoji: "🪻" },
  { text: "el girasol cierre sus pétalos cuando cierres los ojos", emoji: "🌻" },
  { text: "la lavanda te envuelva en su perfume tranquilo", emoji: "💜" },
  { text: "los tulipanes te abran un camino de sueños", emoji: "🌷" },
];

const petrichor = [
  { text: "el olor a tierra mojada te envuelva en calma", emoji: "🌧️" },
  { text: "el petricor te cante una nana de lluvia antigua", emoji: "💧" },
  { text: "el aire después de llover te acaricie suavemente", emoji: "🍃" },
  { text: "la tierra recién regada te abrace con su aroma", emoji: "🌱" },
  { text: "el silencio mojado de la noche te guarde", emoji: "🌫️" },
  { text: "el perfume de la lluvia te lleve a soñar", emoji: "💦" },
  { text: "el frescor de la tormenta pasada te acune", emoji: "⛈️" },
  { text: "el aroma del asfalto mojado te traiga recuerdos dulces", emoji: "🌧️" },
  { text: "la lluvia que termina te deje su canción de agua", emoji: "🎶" },
  { text: "la tierra sedienta te agradezca con su perfume", emoji: "🌍" },
];

const morningHumidity = [
  { text: "la humedad del amanecer te prepare un despertar suave", emoji: "🌅" },
  { text: "el rocío de la mañana guarde tu nombre", emoji: "💧" },
  { text: "la bruma matutina te envuelva como un suspiro", emoji: "🌫️" },
  { text: "el alba húmeda te traiga un beso de lluvia", emoji: "💋" },
  { text: "la neblina de la mañana te reciba con ternura", emoji: "☁️" },
  { text: "el viento húmedo del amanecer te despierte con cariño", emoji: "🌬️" },
  { text: "la garúa matutina te guarde entre sus gotas", emoji: "🌦️" },
  { text: "el primer aliento húmedo del día te encuentre sonriendo", emoji: "😊" },
];

const horrorCliches = [
  { text: "que duermas tan tranquila como la persona que NO va a investigar el ruido en el sótano", emoji: "🕯️" },
  { text: "que descanses sin sentir la necesidad de decir '¿hola? quién anda ahí?'", emoji: "😱" },
  { text: "que tu sueño sea tan profundo que ni el llamado desde el bosque te despierte", emoji: "🌲" },
  { text: "que no se te ocurra bajar sola al sótano con solo una vela", emoji: "🔦" },
  { text: "que descanses sabiendo que la casa no tiene historia oscura... probablemente", emoji: "🏚️" },
  { text: "que la muñeca del estante ya parpadeó tres veces y ya pasó", emoji: "🎎" },
  { text: "que nadie te llame desde el clóset a las 3 de la mañana", emoji: "🚪" },
  { text: "que descanses como si la última persona en sobrevivir siempre lo lograra durmiendo", emoji: "🛏️" },
  { text: "que el ruido de la puerta no sea razón para salir de la cama", emoji: "🚪" },
  { text: "que duermas tan serena como quien sabe que el asesino nunca corre", emoji: "🏃" },
];

const cdmxBike = [
  { text: "que descanses como quien llega a casa tras cruzar Reforma en bicicleta sin que le toquen el claxon", emoji: "🚲" },
  { text: "que tu sueño sea tan fluido como bajar por Chapultepec sin frenos y sin miedo", emoji: "🚲" },
  { text: "que duermas tan tranquila como quien encontró ciclorruta vacía en hora pico", emoji: "🚴‍♀️" },
  { text: "que la noche te cuide como un casco en el Eje Central", emoji: "🛡️" },
  { text: "que descanses como quien pedalea por Roma-Condesa sin topes sorpresa", emoji: "🚲" },
  { text: "que tu sueño ruede suave como llantas nuevas por Insurgentes", emoji: "🚴‍♀️" },
  { text: "que duermas tan ligera como quien esquiva baches en la Colonia Doctores", emoji: "🚲" },
  { text: "que la noche te lleve como una bici sin carga cuesta abajo por Patriotismo", emoji: "🚴‍♀️" },
  { text: "que descanses como quien llegó entera al destino después del Viernes Vial", emoji: "🚲" },
  { text: "que tu sueño sea tan libre como rodar por el Zócalo un domingo sin tráfico", emoji: "🚴‍♀️" },
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

const shortOpenings = [
  "Buenas noches",
  "Dulces sueños",
  "Que descanses",
  "Descansa ya",
  "Sueña bonito",
  "Que la noche te abrace",
  "Hasta el amanecer",
  "Que el sueño te visite",
  "Buenas noches, mi cielo",
  "Descansa, mi vida",
];

const emojiPool = [
  "🐱", "🐈", "🐾", "😻", "😺",
  "🌳", "🌲", "🌿", "🍂",
  "🏙️", "🌃", "🌆",
  "❤️",
  "🚲", "🚴‍♀️",
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

  // Template 7: Opening + nickname + flowers + petrichor + closing
  () => {
    const o = pick(openings), n = pick(nicknames), fl = pick(flowers), pt = pick(petrichor), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${fl.text} ${fl.emoji} y que ${pt.text} ${pt.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 8: Opening + nickname + flowers + morningHumidity + closing
  () => {
    const o = pick(openings), n = pick(nicknames), fl = pick(flowers), mh = pick(morningHumidity), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${fl.text} ${fl.emoji} y que ${mh.text} ${mh.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 9: Opening + nickname + petrichor + dreams + closing
  () => {
    const o = pick(openings), n = pick(nicknames), pt = pick(petrichor), d = pick(dreams), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${pt.text} ${pt.emoji} y que ${d.text} ${d.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 10: Opening + nickname + flowers + nature + morningHumidity + closing (long)
  () => {
    const o = pick(openings), n = pick(nicknames), fl = pick(flowers), na = pick(nature), mh = pick(morningHumidity), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${fl.text} ${fl.emoji}, que ${na.text} ${na.emoji}, y que ${mh.text} ${mh.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 11: Opening + nickname + petrichor + cat + closing
  () => {
    const o = pick(openings), n = pick(nicknames), pt = pick(petrichor), cat = pick(catMetaphors), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. Que ${pt.text} ${pt.emoji}. ${cap(cat.text)} ${cat.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 12: Opening + nickname + horrorCliches + closing (funny contrast)
  () => {
    const o = pick(openings), n = pick(nicknames), hc = pick(horrorCliches), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. ${cap(hc.text)} ${hc.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },

  // Template 13: Opening + nickname + cdmxBike + dreams + closing (funny contrast)
  () => {
    const o = pick(openings), n = pick(nicknames), cb = pick(cdmxBike), d = pick(dreams), cl = pick(closings);
    return `${o.text} ${o.emoji}, ${n.text} ${n.emoji} ${name}. ${cap(cb.text)} ${cb.emoji} y que ${d.text} ${d.emoji}. ${cap(cl.text)} ${cl.emoji}.`;
  },
];

function generatePhrase() {
  const template = pick(templates);
  return template();
}

function generateShortPhrase() {
  const opening = pick(shortOpenings);
  const emojiCount = 1 + Math.floor(Math.random() * 5);
  const emojis = Array.from({ length: emojiCount }, () => pick(emojiPool)).join("");
  let phrase = `${opening}, moneytimes, besitos nocturnos, te quiero mucho ${emojis}`;
  if (Math.random() < 0.5) {
    phrase += " Besitos al Ricycle 🚲🚲";
  }
  return phrase;
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

    if (request.method === "GET" && url.pathname === "/short") {
      const phrase = generateShortPhrase();
      return new Response(JSON.stringify({ phrase }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
