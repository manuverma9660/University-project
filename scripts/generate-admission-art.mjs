import { mkdir, writeFile } from "node:fs/promises";

const scenes = [
  ["overview", "Your next chapter", "pathway", "#ff5964", "#37b6bd"],
  ["after-class-10", "Explore your next step", "book", "#ffb84d", "#65c8b0"],
  ["after-class-12", "Undergraduate pathways", "graduation", "#7fc8ff", "#ffb84d"],
  ["after-graduation", "Build on your degree", "diploma", "#ae9bff", "#61d6cb"],
  ["doctoral-study", "Research what comes next", "research", "#7ed8ce", "#ff7e86"],
  ["industry-learning", "Learning in the lab", "microscope", "#ffc268", "#75c9ff"],
  ["lateral-entry", "Carry learning forward", "transfer", "#8dbdff", "#ff9e7a"],
  ["specialist-courses", "Find your field", "science", "#ff8da0", "#9bafff"],
  ["eligibility", "A clear eligibility check", "checklist", "#70d3bd", "#ffc15e"],
  ["important-dates", "Keep your plans on track", "calendar", "#ffb968", "#80c9ff"],
  ["how-to-apply", "One step at a time", "steps", "#8baeff", "#ff8f9c"],
  ["scholarships", "Opportunity to thrive", "award", "#ffc966", "#8bd1bc"],
  ["national-scholarship-portal", "Find support for study", "portal", "#70d1bc", "#91adff"],
  ["parents-and-families", "Planning together", "family", "#ffa88c", "#8abaff"],
  ["apply", "Start your application", "application", "#ff7884", "#80c8ff"],
  ["enquiry", "Let us help you decide", "conversation", "#81c9ff", "#ffbd68"],
  ["iths-set", "Your next opportunity", "exam", "#f6c463", "#95aaff"],
  ["wellness-studio", "A moment to reset", "wellness", "#70d6c4", "#f6c463"],
  ["campus-events", "Learning beyond class", "events", "#ff9c78", "#78bfff"],
  ["contact-us", "Here to help", "contact", "#ff7884", "#78c9ff"],
];

function icon(scene, a, b) {
  const common = `stroke="#102449" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"`;
  const shapes = {
    pathway: `<path d="M60 205h95v78h-95zM185 145h95v78h-95zM310 85h95v78h-95z" fill="#fff" ${common}/><path d="m155 225 30-46m95-4 30-46" fill="none" ${common}/><circle cx="361" cy="111" r="13" fill="${a}"/>`,
    book: `<path d="M55 105q72-28 143 12v190q-71-40-143-12zM198 117q71-40 143-12v190q-72-28-143 12z" fill="#fff" ${common}/><path d="M83 148q42-10 82 6m-82 27q42-10 82 6m62-33q40-16 82-6m-82 33q40-16 82-6" fill="none" stroke="${a}" stroke-width="8" stroke-linecap="round"/>`,
    graduation: `<path d="m37 137 163-70 163 70-163 70z" fill="${a}" ${common}/><path d="M102 165v88q98 76 196 0v-88" fill="#fff" ${common}/><path d="M364 143v105" fill="none" ${common}/><circle cx="364" cy="260" r="13" fill="${b}"/>`,
    diploma: `<rect x="65" y="68" width="270" height="245" rx="20" fill="#fff" ${common}/><path d="M106 122h183M106 164h135M106 205h115" stroke="${a}" stroke-width="10" stroke-linecap="round"/><circle cx="276" cy="251" r="34" fill="${b}" ${common}/><path d="m253 278-9 54 32-20 31 20-8-54" fill="${a}" ${common}/><path d="m287 250 11 11 20-24" fill="none" ${common}/`,
    research: `<path d="M152 58h100m-70 0v102l-92 142q-15 26 17 26h190q32 0 17-26l-92-142V58" fill="#fff" ${common}/><path d="M112 257q65-36 130 0t81 0l41 63q8 14-12 14H79q-20 0-12-14z" fill="${a}"/><circle cx="165" cy="270" r="10" fill="${b}"/><circle cx="231" cy="292" r="8" fill="#fff"/><path d="M317 88c-46 31-46 62 0 93m0-93c46 31 46 62 0 93m-30-62h60m-60 31h60" fill="none" stroke="${b}" stroke-width="7"/>`,
    microscope: `<path d="m119 70 57-34 103 130-57 36zM260 172l-46 37m-89 15 70-34m-72 35q-34 58 24 91h119q53-30 31-75M88 318h267" fill="none" ${common}/><circle cx="126" cy="227" r="17" fill="${a}" ${common}/><path d="M256 105 288 80" fill="none" stroke="${b}" stroke-width="11"/>`,
    transfer: `<path d="M63 103h174a55 55 0 0 1 0 110H122a55 55 0 0 0 0 110h196" fill="none" stroke="#fff" stroke-width="23" stroke-linecap="round"/><path d="m208 71 42 32-42 32m80 155 42 33-42 32" fill="none" stroke="${a}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="110" cy="158" r="23" fill="${b}"/><circle cx="302" cy="268" r="23" fill="${a}"/>`,
    science: `<circle cx="210" cy="185" r="105" fill="#fff" ${common}/><circle cx="210" cy="185" r="55" fill="${a}"/><circle cx="193" cy="166" r="13" fill="#fff"/><circle cx="237" cy="205" r="9" fill="${b}"/><ellipse cx="210" cy="185" rx="170" ry="65" fill="none" stroke="${b}" stroke-width="10" transform="rotate(-25 210 185)"/><path d="M65 310h290M91 280l-24 30m263-30 25 30" fill="none" ${common}/>`,
    checklist: `<rect x="83" y="45" width="250" height="297" rx="20" fill="#fff" ${common}/><path d="M157 45v-18h100v18" fill="${a}" ${common}/><path d="m119 122 15 15 28-33m-43 92 15 15 28-33m-43 92 15 15 28-33" fill="none" stroke="${b}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M184 128h102m-102 74h102m-102 74h102" stroke="#a9b5c8" stroke-width="9" stroke-linecap="round"/>`,
    calendar: `<rect x="56" y="70" width="310" height="265" rx="22" fill="#fff" ${common}/><path d="M57 140h308" stroke="${a}" stroke-width="18"/><path d="M126 48v45m170-45v45" stroke="#fff" stroke-width="13" stroke-linecap="round"/><g fill="#cad3e1"><rect x="99" y="174" width="38" height="32" rx="7"/><rect x="165" y="174" width="38" height="32" rx="7"/><rect x="231" y="174" width="38" height="32" rx="7"/><rect x="297" y="174" width="38" height="32" rx="7"/><rect x="99" y="229" width="38" height="32" rx="7"/><rect x="165" y="229" width="38" height="32" rx="7"/><rect x="231" y="229" width="38" height="32" rx="7"/></g><circle cx="316" cy="245" r="24" fill="${b}"/>`,
    steps: `<path d="M82 291V220h92v71m12 0v-132h92v132m12 0V90h92v201" fill="#fff" ${common}/><circle cx="128" cy="188" r="18" fill="${a}"/><circle cx="220" cy="119" r="18" fill="${b}"/><circle cx="312" cy="70" r="18" fill="${a}"/><path d="M57 315h313" stroke="#fff" stroke-width="12" stroke-linecap="round"/>`,
    award: `<path d="M120 63h180v106q0 91-90 125-90-34-90-125z" fill="#fff" ${common}/><path d="m210 91 22 44 49 7-36 34 9 49-44-23-44 23 9-49-36-34 49-7z" fill="${a}"/><path d="m146 263-19 83 83-34m64-49 19 83-83-34" fill="${b}" ${common}/><circle cx="210" cy="158" r="100" fill="none" stroke="${b}" stroke-width="8" stroke-dasharray="4 18"/>`,
    portal: `<rect x="57" y="60" width="310" height="262" rx="20" fill="#fff" ${common}/><path d="M57 126h310" stroke="${a}" stroke-width="15"/><circle cx="211" cy="226" r="63" fill="${b}"/><path d="M148 226h126m-63-63q-47 63 0 126m0-126q47 63 0 126" fill="none" stroke="#fff" stroke-width="8"/><circle cx="92" cy="93" r="8" fill="#fff"/><circle cx="119" cy="93" r="8" fill="#fff"/>`,
    family: `<circle cx="128" cy="111" r="43" fill="${a}"/><circle cx="292" cy="111" r="43" fill="${b}"/><circle cx="210" cy="81" r="48" fill="#fff"/><path d="M58 319q8-140 120-116l32 40 33-40q111-24 120 116z" fill="#fff" ${common}/><path d="M132 319q0-96 78-113 78 17 78 113" fill="${a}"/><path d="M211 206v101" stroke="${b}" stroke-width="8"/>`,
    application: `<rect x="89" y="45" width="235" height="299" rx="18" fill="#fff" ${common}/><path d="M136 107h143m-143 43h110m-110 42h125" stroke="#a9b5c8" stroke-width="10" stroke-linecap="round"/><rect x="136" y="238" width="132" height="45" rx="12" fill="${a}"/><path d="m295 274 24 24 53-66" fill="none" stroke="${b}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M141 45v-17h131v17" fill="${b}" ${common}/>`,
    conversation: `<path d="M59 89q0-30 35-30h170q35 0 35 30v104q0 30-35 30H164l-54 43v-43H94q-35 0-35-30z" fill="#fff" ${common}/><path d="M206 177q0-28 35-28h101q35 0 35 28v80q0 27-35 27h-14v39l-48-39h-39q-35 0-35-27z" fill="${a}" ${common}/><circle cx="112" cy="138" r="9" fill="${b}"/><circle cx="154" cy="138" r="9" fill="${b}"/><circle cx="196" cy="138" r="9" fill="${b}"/>`,
    exam: `<rect x="73" y="49" width="275" height="292" rx="20" fill="#fff" ${common}/><path d="M127 111h164m-164 49h164m-164 49h95" stroke="#aab8ca" stroke-width="9" stroke-linecap="round"/><circle cx="264" cy="264" r="42" fill="${a}" ${common}/><path d="m245 264 14 15 27-32" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="m93 98 13 13 23-28m-36 77 13 13 23-28" fill="none" stroke="${b}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
    wellness: `<path d="M210 290c-8-90 27-151 105-185-2 74-35 126-105 155m-4 31c6-70-20-119-78-147 1 59 28 100 78 122" fill="${a}" ${common}/><circle cx="210" cy="125" r="29" fill="#fff"/><path d="M210 163v82m0-47-48 36m48-36 49 36m-49 11-36 60m36-60 36 60" stroke="#fff" stroke-width="15" stroke-linecap="round"/><path d="M79 326q131-39 262 0" stroke="${b}" stroke-width="11" stroke-linecap="round"/>`,
    events: `<path d="M92 75h237v177H92z" fill="#fff" ${common}/><path d="M121 217 184 151l49 43 44-56 52 79" fill="none" stroke="${a}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="287" cy="112" r="17" fill="${b}"/><path d="M119 295h192m-167 31h143" stroke="#fff" stroke-width="12" stroke-linecap="round"/><path d="m90 42 8 17 19 2-14 13 4 19-17-10-17 10 4-19-14-13 19-2z" fill="${b}"/><path d="m347 257 7 14 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2z" fill="${a}"/>`,
    contact: `<rect x="44" y="45" width="390" height="282" rx="34" fill="#eaf5f4"/><circle cx="116" cy="97" r="47" fill="#d9e8ff"/><circle cx="358" cy="84" r="58" fill="#ffe8dc"/><path d="M47 286h388v27H47z" fill="#d8a36f"/><path d="M66 308h20v44H66zm331 0h20v44h-20z" fill="#9b6647"/><rect x="179" y="202" width="133" height="91" rx="10" fill="#102449"/><rect x="188" y="211" width="115" height="72" rx="6" fill="#8ed8df"/><path d="m161 299 21-12h126l21 12q-4 9-14 9H174q-10 0-13-9" fill="#d9e1ec"/><path d="M68 179q0-39 39-39h42q39 0 39 39v47H68z" fill="#3f73bc"/><circle cx="138" cy="113" r="35" fill="#d89a78"/><path d="M102 111q5-47 47-38 23 5 27 29l-20-8-16-11q-11 22-38 28" fill="#23314d"/><path d="M312 177q0-42 44-42h39q37 0 37 42v48H312z" fill="#d94b57"/><circle cx="357" cy="111" r="35" fill="#b97559"/><path d="M323 103q4-43 39-40 32 2 36 39l-23-8-16-16q-10 17-36 25" fill="#27283b"/><path d="M164 176q33 1 50 32m103-28q-29 1-48 31" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M62 49q0-19 22-19h97q22 0 22 19v46q0 19-22 19h-45l-26 23v-23H84q-22 0-22-19z" fill="#fff" ${common}/><circle cx="103" cy="72" r="5" fill="${a}"/><circle cx="126" cy="72" r="5" fill="${a}"/><circle cx="149" cy="72" r="5" fill="${a}"/><rect x="301" y="25" width="124" height="67" rx="18" fill="#fff" ${common}/><path d="M325 47h75m-75 19h48" stroke="${b}" stroke-width="8" stroke-linecap="round"/><circle cx="410" cy="265" r="25" fill="${b}"/><path d="M399 266h22m-11-11v22" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`,
  };
  return shapes[scene] || shapes.science;
}

function svg([slug, title, motif, accent, accent2], index) {
  const art = icon(motif, accent, accent2);
  const id = `glow${index}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" fill="none"><defs><linearGradient id="bg" x1="0" y1="0" x2="1600" y2="900" gradientUnits="userSpaceOnUse"><stop stop-color="#102345"/><stop offset="1" stop-color="#07132e"/></linearGradient><linearGradient id="veil" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#102345"/><stop offset="1" stop-color="#102345" stop-opacity="0"/></linearGradient><radialGradient id="${id}" cx="0" cy="0" r="1" gradientTransform="matrix(500 440 -440 500 1200 430)" gradientUnits="userSpaceOnUse"><stop stop-color="${accent}" stop-opacity=".28"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs><path fill="url(#bg)" d="M0 0h1600v900H0z"/><path fill="url(#${id})" d="M0 0h1600v900H0z"/><circle cx="1320" cy="120" r="180" fill="${accent2}" fill-opacity=".06"/><circle cx="960" cy="820" r="240" fill="${accent}" fill-opacity=".07"/><path d="M0 740c240-90 360 125 628 18 236-94 338-25 497 71l475 71H0z" fill="#fff" fill-opacity=".025"/><g fill="#fff" fill-opacity=".35"><circle cx="918" cy="142" r="3"/><circle cx="1456" cy="314" r="4"/><circle cx="1052" cy="718" r="3"/><circle cx="1531" cy="636" r="3"/><circle cx="1270" cy="83" r="3"/></g><rect x="852" y="163" width="590" height="574" rx="42" fill="#fff" fill-opacity=".055" stroke="#fff" stroke-opacity=".14" stroke-width="2"/><rect x="891" y="202" width="512" height="496" rx="30" fill="#fff" fill-opacity=".035"/><circle cx="1148" cy="450" r="213" fill="${accent}" fill-opacity=".10"/><circle cx="1148" cy="450" r="178" fill="#fff" fill-opacity=".055" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><g transform="translate(950 275) scale(1.02)">${art}</g><rect x="0" y="0" width="950" height="900" fill="url(#veil)"/><rect x="926" y="245" width="11" height="11" rx="5.5" fill="${accent}"/><rect x="1363" y="603" width="14" height="14" rx="7" fill="${accent2}"/><text x="900" y="650" fill="#fff" fill-opacity=".88" font-family="Arial,sans-serif" font-size="23" font-weight="700" letter-spacing="3">${title.toUpperCase()}</text><path d="M900 674h390" stroke="${accent}" stroke-width="3" stroke-linecap="round"/><text x="900" y="707" fill="#dce7f7" fill-opacity=".68" font-family="Arial,sans-serif" font-size="14" letter-spacing="2">UNIVERSITY OF TRANSLATIONAL HEALTH SCIENCE</text></svg>`;
}

await mkdir("public/admissions/visuals", { recursive: true });
await Promise.all(scenes.map((scene, index) => writeFile(`public/admissions/visuals/${scene[0]}.svg`, svg(scene, index), "utf8")));

const replacements = new Map([
  ["/admissions/courses-after-10th/", ["/admissions/visuals/after-class-10.svg", "Illustration of health science students and nutrition genetics"]],
  ["/admissions/courses-after-12th/", ["/admissions/visuals/after-class-12.svg", "Illustration of undergraduate study pathways and graduation"]],
  ["/admissions/courses-after-graduation/", ["/admissions/visuals/after-graduation.svg", "Illustration of postgraduate qualifications"]],
  ["/admissions/courses-after-post-graduation/", ["/admissions/visuals/doctoral-study.svg", "Illustration of doctoral research"]],
  ["/admissions/industry-embedded-courses/", ["/admissions/visuals/industry-learning.svg", "Illustration of practical laboratory learning"]],
  ["/admissions/lateral-entry-programmes/", ["/admissions/visuals/lateral-entry.svg", "Illustration of study credits transferring into a new pathway"]],
  ["/admissions/specialised-courses/", ["/admissions/visuals/specialist-courses.svg", "Illustration of specialist health science fields"]],
  ["/admissions/eligibility/", ["/admissions/visuals/eligibility.svg", "Illustration of an academic eligibility checklist"]],
  ["/admissions/important-dates/", ["/admissions/visuals/important-dates.svg", "Illustration of an admissions calendar"]],
  ["/admissions/how-to-apply/", ["/admissions/visuals/how-to-apply.svg", "Illustration of application steps"]],
  ["/admissions/scholarships-iths-set/", ["/admissions/visuals/scholarships.svg", "Illustration of a scholarship medal and award"]],
  ["/admissions/national-scholarship-portal/", ["/admissions/visuals/national-scholarship-portal.svg", "Illustration of a digital scholarship portal"]],
  ["/admissions/for-parents/", ["/admissions/visuals/parents-and-families.svg", "Illustration of a student planning university with family"]],
]);
const componentPath = "components/admission-pages.tsx";
let component = await (await import("node:fs/promises")).readFile(componentPath, "utf8");
component = component.split("\n").map(line => {
  for (const [route, [image, alt]] of replacements) {
    if (line.includes(`"${route}"`)) return line.replace(/image: "[^"]+", alt: "[^"]+"/, `image: "${image}", alt: "${alt}"`);
  }
  if (line.includes('image="/images/notices/New-Batch-at-ITHS-2026.webp"')) return line.replace('image="/images/notices/New-Batch-at-ITHS-2026.webp" alt="ITHS students beginning their university journey together"', 'image="/admissions/visuals/apply.svg" alt="Illustration of an application form and completed admission checklist"');
  if (line.includes("image=\"/home/health-science-hero.webp\"")) return line.replace('image="/home/health-science-hero.webp" alt="Health science students learning at ITHS"', 'image="/admissions/visuals/overview.svg" alt="Illustration of health science study pathways at ITHS"');
  if (line.includes("image=\"/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp\"")) return line.replace('image="/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp" alt="Students taking part in an ITHS laboratory exposure session"', 'image="/admissions/visuals/enquiry.svg" alt="Illustration of a student speaking with an admissions adviser"');
  if (line.includes("image=\"/home/nutrition-event.webp\"")) return line.replace('image="/home/nutrition-event.webp" alt="Students taking part in an ITHS academic event"', 'image="/admissions/visuals/iths-set.svg" alt="Illustration of an entrance test and scholarship opportunity"');
  return line;
}).join("\n");
await (await import("node:fs/promises")).writeFile(componentPath, component, "utf8");
