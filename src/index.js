const openings = [
  "Buenas noches",
  "Dulces sueños",
  "Que descanses",
  "Descansa ya",
  "Sueña bonito",
  "Que la noche te abrace",
  "Hasta el amanecer",
  "Descansa, mi vida",
  "Que el sueño te visite",
  "Buenas noches, mi cielo",
];

const nicknames = [
  "mi hermosa",
  "mi tierna",
  "mi dulce",
  "mi preciosa",
  "mi Flor de Lluvia",
  "mi flor más bella",
  "mi amor",
  "mi cielito",
  "mi luz de la noche",
  "mi gardenia",
  "mi rosa de la noche",
  "mi hada del sueño",
];

const celestial = [
  "las estrellas te abracen esta noche",
  "la luna te cuente un cuento",
  "el cielo entero te cuide",
  "las constelaciones te guíen",
  "la luna llena te ilumine",
  "cada estrella susurre tu nombre",
  "el firmamento te bendiga",
  "la vía láctea te envuelva",
  "los astros te sonrían",
  "la luna te acune entre sus rayos",
  "las estrellas bailen para ti",
  "la noche estrellada te cante",
];

const nature = [
  "la lluvia te acaricie suavemente",
  "los pétalos caigan sobre ti",
  "el viento te susurre poemas",
  "tu jardín florezca en sueños",
  "la brisa te lleve a dormir",
  "cada flor se abra para ti",
  "el rocío te bese la frente",
  "la tormenta se calme a tu lado",
  "las hojas te canten nanas",
  "el río te lleve a soñar",
  "la niebla te envuelva en calma",
  "la tierra te abrace como raíz",
];

const dreams = [
  "los sueños te lleven donde la lluvia nace",
  "tu almohada sea de nubes",
  "las mantas te cubran de estrellas",
  "tu sueño sea profundo y sereno",
  "los sueños te regalen un jardín",
  "tu descanso sea un poema",
  "los sueños te lleven a volar",
  "tu cama sea un campo de flores",
  "los sueños te abracen con ternura",
  "tu descanso sea tan dulce como tú",
];

const closings = [
  "te amo",
  "que los sueños te abracen",
  "hasta mañana",
  "descansa entre estrellas",
  "sueña conmigo",
  "que amanezca con tu sonrisa",
  "te llevo en el corazón",
  "hasta que el sol nos vuelva a encontrar",
  "que la noche te sea leve",
  "eres mi último pensamiento del día",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const templates = [
  // Template 1: Opening + nickname + celestial + closing
  () =>
    `${pick(openings)}, ${pick(nicknames)} Flor de Lluvia. Que ${pick(celestial)} y ${pick(dreams)}. ${cap(pick(closings))}.`,

  // Template 2: Opening + nickname + nature + closing
  () =>
    `${pick(openings)}, ${pick(nicknames)}. Que ${pick(nature)} y ${pick(celestial)}. ${cap(pick(closings))}.`,

  // Template 3: Opening + nickname + dreams + nature + closing
  () =>
    `${pick(openings)}, ${pick(nicknames)} Flor de Lluvia. Que ${pick(dreams)} y que ${pick(nature)}. ${cap(pick(closings))}.`,

  // Template 4: Opening + celestial + nature + closing (no nickname inline)
  () =>
    `${pick(openings)}, Flor de Lluvia. Que ${pick(celestial)}, que ${pick(nature)}, y que ${pick(dreams)}. ${cap(pick(closings))}.`,

  // Template 5: Opening + nickname + dreams + closing
  () =>
    `${pick(openings)}, ${pick(nicknames)}. ${cap(pick(dreams))} y que ${pick(nature)}. ${cap(pick(closings))}.`,

  // Template 6: Opening + nickname + celestial + nature + dreams + closing (long)
  () =>
    `${pick(openings)}, ${pick(nicknames)} Flor de Lluvia. Que ${pick(celestial)}, que ${pick(nature)}, y que ${pick(dreams)}. ${cap(pick(closings))}.`,
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
