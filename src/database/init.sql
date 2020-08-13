BEGIN;

DROP TABLE IF EXISTS posts, usernames CASCADE;

CREATE TABLE usernames (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES usernames(id),
  text_content TEXT
);



INSERT INTO usernames (name) VALUES -- automatically adds serial numbers 
  ('Aishah'), 
  ('Amber'),
  ('Azizi'),
  ('Ephie'),
  ('Jennifer'), 
  ('Jessica'),
  ('Jihyun'),
  ('Jack'),
  ('Josh'),
  ('Khadija'),
  ('Lisa'),
  ('My Hoa'),
  ('Rihards'),
  ('Shaya'), 
  ('Terrence C'),
  ('Terry'),
  ('Trish')
;

INSERT INTO posts (user_id, text_content) VALUES
  (1, 'Before FAC I was working on weekends at a coffee shop'),
  (1, 'I want to be a mermaid!'),
  (1, 'My superpower would be to learn anything through touch'),
  (2, 'I would love to be a great skydiver'),
  (2, 'If I could be any animal, I would be a manta ray!'),
  (2, 'Wolverine was my favourite superhero as a kid.'),
  (17, 'My favourite season is SUMMER!'),
  (3, 'My favourite superhero as a kid was spiderman'),
  (3, 'If I had an extra room in the house I would want it to be a climbing wall'),
  (17, 'As a kid, I wanted to grow up to be a marine biologist'),
  (14, 'Avocado on toast is overrated, I dislike avocados!'),
  (14, 'The first thing I notice about someone is their body language and then I imagine if we could become friends!'),
  (14, 'I start everyday with some matcha green tea'),
  (17, 'Ceiling fans are so underrated'),
  (15, 'I would like to control time!'),
  (4, 'I wish I could live in the Marvel Universe'),
  (4, 'I want to visit south korea and hawaii in the future!'),
  (5, 'I would like to learn to freedive'),
  (5, 'I like cats and dogs but I have been bitten by dogs twice..'),
  (6, 'I had a fashion label before FAC'),
  (6, 'I always wanted to grow up and be like my Granpda when I was little'),
  (10, 'Things I like include the movie Parasite, the tv show Hannah, and sweetcorn!'),
  (10, 'My favourite ice cream flavour is definitely not mint choc chip - maybe chocolate but sometimes that is too sweet, but yeah anything else is good'),
  (15, 'I wanna be a dragon - but also turn back into a human when I like'),
  (16, 'I used to be a music producer and designer for tfl but its hot sauce and street food company atm !'),
  (7, 'I love Harry Potter!'),
  (11, 'I loved watching Pose'), 
  (11, 'I love summer the most out of all the seasons'), 
  (8, 'The highlight of my day is yet to come, when I go get a Michelin starred kebab with my friend'),
  (12, 'I wanna be a mermaid'),
  (13, 'If I could immediately learn any skill it would be programming'),
  (7, 'If I could be another species I would like to be a fish'),
  (16, 'laugh declious, ancient aliens'),
  (16, 'I dream of going diving in cooke islands, living abroad and doing more diving'),
  (16, 'If I had a superpower it would definitely be teleportation'),
  (16, 'I want to live in the world of Avatar or Prometheus'),
  (9, 'I would like to be a dolphin'),
  (13, 'I want the power to not having to sleep!')
;

COMMIT;



