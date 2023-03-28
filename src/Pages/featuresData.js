const data = [
  {
    id: 1,
    name: "Badminton",
    topic: "Badminton",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/slq1xqtbloeczu7cv3xj",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1675077841/primary/m6idfrfezouqdh99o8mf",
  },
  {
    id: 2,
    name: "Football",
    topic: "Football",
    flyer: "https://c8.alamy.com/comp/2CBM9RJ/fifa-2CBM9RJ.jpg",
    image:
      "https://digitalhub.fifa.com/transform/2d264787-f3b5-4533-9142-cb0df6ca0142/Brazil-v-Serbia-Group-G-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:868,width:1536&quality=100",
  },
  {
    id: 3,
    name: "Fencing",
    topic: "Fencing",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/kfhzsmtntkgbjtdxz0lb",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_480/f_auto/v1673438371/primary/rndhxqtfpzfgfqqgdqac",
  },
  {
    id: 4,
    name: "Shooting",
    topic: "Shooting",
    flyer:
      "https://img.olympicchannel.com/images/image/private//f_auto/f_auto/primary/rhgwqxigidwqomkmoknn",
    image:
      "https://img.olympicchannel.com/images/image/private/ar_16:9,c_fill/f_auto/v1670229343/primary/rn7czionsjephmnkmlus",
  },
  {
    id: 5,
    name: "Rugby Seven",
    topic: "Rugby",
    flyer:
      "https://img.olympicchannel.com/images/image/private//f_auto/f_auto/primary/bpbi0hktjov3zfma3dq9",

    image:
      "https://img.olympicchannel.com/images/image/private/ar_16:9,c_fill/f_auto/v1674128595/primary/bdnfrykn8uvvhrexhmis",
  },
  {
    id: 6,
    name: "Beach Volleyball",
    topic: "Beach Volleyball",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/hd7ytq34vaz3bbaaareq",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_1280/f_auto/primary/rtbglwo7dielpqtljrzk",
  },
  {
    id: 7,
    name: "Basketball",
    topic: "Basketball",
    flyer: "https://www.logodesignlove.com/images/classic/nba-logo.jpg",
    image:
      "https://cdn.gmtm.com/optimized/content+images+2021+06/1200/webp/2751923597_e4788045db_b.jpeg",
  },
  {
    id: 8,
    name: "Cricket",
    topic: "Cricket",
    flyer:
      "https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160730182727-05-olympic-tech-cricket-bat.jpg?q=w_3536,h_2380,x_0,y_0,c_fill/w_1280",
  },
  {
    id: 9,
    name: "Baseball",
    topic: "Baseball",
    flyer:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/640px-Major_League_Baseball_logo.svg.png",
    image:
      "https://storage.googleapis.com/afs-prod/media/9eb3f3d9656d46288787dc6b07fc3585/3000.jpeg",
  },
  {
    id: 10,
    name: "Swimming",
    topic: "Swimming",
    flyer:
      "https://findlogovector.com/wp-content/uploads/2019/04/usa-swimming-logo-vector.png",
    image:
      "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/olympics-swimming-072421-getty-ftrjpg_16g0acrv6g06y1vo0r84bl3wch.jpg?itok=aAY61W2i",
  },
  {
    id: 11,
    name: "Tennis",
    topic: "Tennis",
    flyer:
      "https://img.freepik.com/premium-vector/tennis-logo-icon-design-sports-badge-template-vector-illustration_630259-74.jpg?w=2000",
    image:
      "https://cdn-wp.thesportsrush.com/2016/08/Rafael_Nadal_Men_Singles_Tennis_Match_in_Olympic.jpg",
  },
  {
    id: 12,
    name: "Motorsport",
    topic: "Motorsport",
    flyer:
      "https://seeklogo.com/images/F/flag-motorsport-logo-B4353EC1DE-seeklogo.com.png",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/primary/bkm8d3908bar7zejibzo",
  },
  {
    id: 13,
    name: "Judo",
    topic: "Judo",
    flyer:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/International_Judo_Federation_logo.svg/1200px-International_Judo_Federation_logo.svg.png",
    image:
      "https://www.teamusa.org/-/media/TeamUSA/Judo/Delgado_Angelica/Delgado_Angelica_080716_1440x810.png",
  },
  {
    id: 14,
    name: "Boxing",
    topic: "Boxing",
    flyer:
      "https://img.freepik.com/free-vector/boxing-simple-element_24908-54268.jpg?w=2000",
    image:
      "https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/03/23/usp-olympics_-boxing-mens-middle-75kg-final-bou-16_9.jpg",
  },
  {
    id: 15,
    name: "Ice Hockey",
    topic: "Ice Hockey",
    flyer:
      "https://www.shutterstock.com/image-vector/ice-hockey-badge-logo-emblem-260nw-472781557.jpg",
    image:
      "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qlj4caepd8tc7ygczrol",
  },
];
export default data;
