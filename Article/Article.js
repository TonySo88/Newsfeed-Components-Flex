/* This is the data we will be using to create our articles */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Leviosa, not Leviosaaa',
    date: "6 Comments Give Award Share Save",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.`,

    secondParagraph: `Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?`,

    thirdParagraph: `Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.`,
  },
  {
    title: "May the 4th be with You",
    date: "49 Comments Give Award Share Save",
    firstParagraph: `Lucas ipsum dolor sit amet mara skywalker windu leia hutt mara wicket droid coruscant qui-gon. Thrawn zabrak moff twi'lek biggs maul qui-gon jawa biggs. Leia secura skywalker darth luuke palpatine. Skywalker lando naboo ventress jabba skywalker lars. Moff darth wedge darth darth endor. Fisto organa darth c-3po. Kashyyyk solo organa anakin yavin mace solo darth. Jade moff tatooine mon vader jinn. Biggs coruscant ahsoka luuke. Kenobi qui-gonn ben chewbacca hutt. Mothma hutt wedge mon calrissian anakin mandalorians antilles wedge.`,

    secondParagraph: `Ventress jade darth moff antilles. Moff c-3p0 secura biggs mustafar mara. Darth qui-gonn vader utapau kessel leia yoda darth. Skywalker grievous lando dantooine ponda. Jango jabba darth luke. Greedo yavin hutt yoda mon moff hutt utapau luuke. Maul moff kessel baba moff leia anakin jade. Mothma obi-wan wampa maul secura solo skywalker. Darth ben darth darth skywalker maul chewbacca. Darth organa skywalker mon secura jar. Watto solo mandalorians tusken raider sidious watto yavin. Secura fett jinn owen amidala skywalker grievous palpatine.`,

    thirdParagraph: `Cade secura darth solo jade jade windu organa. Solo qui-gon antilles dagobah. Obi-wan vader hutt darth. Obi-wan kamino mace sidious antilles tusken raider. Ewok jade fett darth chewbacca. Vader qui-gon yavin solo baba. Skywalker vader ben vader gamorrean mustafar. Biggs skywalker calamari ackbar jawa sith mon jabba dantooine. Hutt leia ackbar kashyyyk. Organa mustafar skywalker windu kamino. Solo anakin solo amidala yoda padmé kessel tatooine organa. Coruscant kamino boba secura. Calrissian hutt grievous alderaan secura.`,
  },
  {
    title: "When 'Gotta Catch Em All,' Goes Terribly Wrong",
    date: "12 Comments Give Award Share Save",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`,
  },
  {
    title: "Hodor",
    date: "117 Comments Give Award Share Save",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
  {
    title: "I am Groot",
    date: "0 Comments Give Award Share Save",
    firstParagraph: `We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot.  `,

    secondParagraph: `We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. `,

    thirdParagraph: `We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. `,
  },
];

/* Step 1: Write a component called 'articleMaker' to create an article. You want your component to return markup like the template below: 

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as its one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This listener should toggle the class 'article-open' on the 'article' div.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function, loop over the data. At each iteration you'll use your component to create an article and append it to the DOM inside the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.
*/
function articleCreator(
  titleData,
  dateData,
  firstParagraphData,
  secondParagraphData,
  thirdParagraphData
) {
  const article = document.createElement("div");
  article.classList.add("article");

  const title = document.createElement("h2");
  title.textContent = titleData;

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = dateData;

  const firstParagraph = document.createElement("p");
  firstParagraph.textContent = firstParagraphData;

  const secondParagraph = document.createElement("p");
  secondParagraph.textContent = secondParagraphData;

  const thirdParagraph = document.createElement("p");
  thirdParagraph.textContent = thirdParagraphData;

  const expandButton = document.createElement("span");
  expandButton.classList.add("expandButton");
  expandButton.textContent = "load story";

  expandButton.addEventListener("click", (clickEvent) => {
    article.classList.toggle("article-open");
  });

  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(firstParagraph);
  article.appendChild(secondParagraph);
  article.appendChild(thirdParagraph);
  article.appendChild(expandButton);

  return article;
}

const articles = document.querySelector(".articles");

data.map((dataObject) => {
  const allData = articleCreator(
    dataObject.title,
    dataObject.date,
    dataObject.firstParagraph,
    dataObject.secondParagraph,
    dataObject.thirdParagraph
  );
  articles.appendChild(allData);
});
