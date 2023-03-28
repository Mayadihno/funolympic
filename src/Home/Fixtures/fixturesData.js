const data = [
  {
    id: 1,
    sport: "Football",
    fixtures: (
      <>
        <p>Blackpool v Queens Park Rangers</p>
        <p>Millwall v Swansea City</p>
        <p>Rotherham United v Preston North</p>
        <p>Watford v Birmingham City</p>
        <p>Wigan Athletic v Coventry City</p>
        <p>Middlesbrough v Stoke City</p>
        <p>Accrington Stanley v Portsmouth</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    sport: "Basketball",
    fixtures: (
      <>
        <h4 style={{ paddingBottom: "10px" }}>NBA</h4>
        <p>Golden State Warriors v Phoenix</p>
        <p>Sacramento Kings v Milwaukee Bucks</p>
        <p>Charlotte Hornets v Cleveland Cavaliers</p>
        <p>Washington Wizards v Detroit Pistons</p>
        <p>Toronto Raptors v Denver Nuggets</p>
        <p>Texas A&M v Southeast Missouri State</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    sport: "Cricket",
    fixtures: (
      <>
        <p>Northerns v Glamorgan</p>
        <p>Southerns v Durham</p>
        <p>Boland v Knights</p>
        <p>Lions v Dolphins</p>
        <p>Titans v North West</p>
        <p>Western Province v Warriors</p>
        <p>Asia Lions v India Maharajas</p>
        <p>Dambulla v Galle</p>
        <p>Kandy v Jaffna</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    sport: "Boxing",
    fixtures: (
      <>
        <p>Gilberto Ramirez v Gabriel Rosado</p>
        <p>Lawrence Okolie v David Light</p>
        <p>David Benavidez v Caleb Plant</p>
        <p>José Ramirez v Richard Commey</p>
        <p>Anthony Joshua v Jermaine Franklin</p>
        <p>Robeisy Ramirez v Isaac Dogboe</p>
        <p>Kenshiro Teraji v Jonathan Gonzalez</p>
        <p>Jesse Rodriguez v Cristian González</p>
        <p>Sebastian Fundora v Brian Mendoza</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/4761671/pexels-photo-4761671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    sport: "Volleyball",
    fixtures: (
      <>
        <p>France V Spain</p>
        <p>USA V Poland</p>
        <p>China V Brazil</p>
        <p>Wales V Italy</p>
        <p>England V Germany</p>
        <p>Denmark V Australia</p>
        <p>India V Isreal</p>
        <p>Belgium V Romania</p>
        <p>Turkey V Peru</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    sport: "Rugby",
    fixtures: (
      <>
        <p>Sea Eagles v Eels</p>
        <p>Castleford Tigers v Leeds Rhinos</p>
        <p>Huddersfield Giants v Wigan Warriors</p>
        <p>St Helens v Hull FC</p>
        <p>Warrington Wolves v Leigh Leopards</p>
        <p>Titans v Storm</p>
        <p>Cowboys v Warriors</p>
        <p>Broncos v Dragons</p>
        <p>Catalans Dragons v Hull Kingston Rovers</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/3641367/pexels-photo-3641367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    sport: "Swinmming",
    fixtures: (
      <>
        <p>David Ramirez </p>
        <p>Jonathan Gonzalez</p>
        <p>Brian Mendoza</p>
        <p>Cristian González</p>
        <p>Andrew Kate</p>
        <p>Kelvin Arnold</p>
        <p>Peter Walker</p>
        <p>Declan Stones</p>
        <p>Hary Maguire</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    sport: "Tennis",
    fixtures: (
      <>
        <p>C. Alcaraz Garfia V T. Griekspoor </p>
        <p>J. Sinner V A. Mannarino</p>
        <p>J. Draper V A. Murray</p>
        <p>D. Medvedev V A. Zverev</p>
        <p>A. Davidovich Fokina V C. Garin</p>
        <p>A. Rublev V C. Norrie</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/1277397/pexels-photo-1277397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    sport: "Formular 1",
    fixtures: (
      <>
        <p>Fr8Auctions 208 </p>
        <p>RAPTOR 250</p>
        <p>Jeddah</p>
        <p>Saudi Arabian Grand Prix</p>
        <p>São Paulo E-Prix</p>
        <p>Ambetter Health 400</p>
        <p>Portugal Grand Prix</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/11202308/pexels-photo-11202308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    fixtures: (
      <>
        <p>Seattle Kraken vs Dallas Stars </p>
        <p>Carolina Hurricanes vs Winnipeg Jets</p>
        <p>New Jersey Devils vs Tampa Bay Lightning</p>
        <p>New York Rangers vs Washington Capitals</p>
        <p>Philadelphia Flyers vs Vegas Golden Knights</p>
        <p>Pittsburgh Penguins vs Montreal Canadiens</p>
        <p>Nashville Predators vs Detroit Red Wings</p>
        <p>Chicago Blackhawks v Boston Bruins</p>
        <p>Edmonton Oilers v Ottawa Senators</p>
      </>
    ),
    sport: "Ice Hockey",
    image:
      "https://images.pexels.com/photos/40564/ice-hockey-players-pass-forward-40564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 11,
    sport: "Baseball",
    fixtures: (
      <>
        <p>Israel v Puerto Rico </p>
        <p>Canada v United States</p>
        <p>Nicaragua v Venezuela</p>
        <p>Canada v Colombia</p>
        <p>Israel v Dominican Republic</p>
        <p>Great Britain v Mexico</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 12,
    sport: "sailing",
    fixtures: (
      <>
        <p>Winter Match Racing 3Day 1</p>
        <p>New ZealandDay 1</p>
        <p>NJK Open Spring CupDay 1</p>
        <p>United StatesDay 1</p>
        <p>Porto Montenegro Match RaceDay 1</p>
        <p>De Guingand Bowl</p>
      </>
    ),
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/3493816/210724-olympics-day1-mb-1544.JPG",
  },
  {
    id: 13,
    sport: "Fencing",
    fixtures: (
      <>
        <p>FIE World Cup - W Sabre - Sint-Niklaas, Belgium</p>
        <p>FIE World Cup - M Sabre - Budapest, Hungary</p>
        <p>FIE World Cup - W Epee - Nanjing, China</p>
        <p>FIE World Cup - M Epee - Buenos Aires, Argentina</p>
        <p>FIE World Cup - W Foil - Poznan, Poland</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/6538913/pexels-photo-6538913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 14,
    sport: "Judo",
    fixtures: (
      <>
        <p>IJF World Tour Grand Slam - Tbilisi, Georgia</p>
        <p>IJF World Tour Grand Slam - Antalya, Turkey</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/6765029/pexels-photo-6765029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 15,
    sport: "Surfing",
    fixtures: (
      <>
        <p>Birubi Beach, Port Stephens, NSW, Australia</p>
        <p>Fernando de Noronha, Pernambuco, Brazil</p>
        <p>Okuragahama Beach, Hyuga, Japan</p>
        <p>Maroubra, Sydney, NSW, Australia</p>
        <p>Rangiroa, Tuamotus, French Polynesia</p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg",
  },
];

export default data;
