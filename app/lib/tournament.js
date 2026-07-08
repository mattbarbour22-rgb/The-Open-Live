// Central tournament setup.
// To trial another event, change this file plus your Vercel env vars:
// SLASH_GOLF_TOURN_ID, SLASH_GOLF_YEAR, TOURNAMENT_STATE_ID.

export const tournamentConfig = {
  majorLabel: '154TH OPEN CHAMPIONSHIP',
  title: 'THE OPEN PICK 3 LIVE',
  venue: 'Royal Birkdale Golf Club',
  location: 'Southport, Merseyside, England',
  dates: 'July 16–19, 2026',
  prizePool: '$1,825',
  tournamentTimezone: 'Europe/London',
  jackpotRule: 'To win, your picks must include the Champion Golfer of the Year. If no punter selects them, the prize pool jackpots.',
  heroImage: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=2400&q=80'
};

export const poolEntries = [
  { player: 'Barty', picks: ['Scottie Scheffler', 'Tommy Fleetwood', 'Rory McIlroy'] },
  { player: 'Enright', picks: ['Jon Rahm', 'Xander Schauffele', 'Viktor Hovland'] },
  { player: 'Roche SES', picks: ['Tommy Fleetwood', 'Matt Fitzpatrick', 'Robert MacIntyre'] },
  { player: 'Kitch', picks: ['Scottie Scheffler', 'Ludvig Åberg', 'Patrick Cantlay'] },
  { player: 'Brom', picks: ['Rory McIlroy', 'Tom Kim', 'Aaron Rai'] },
  { player: 'Shaw', picks: ['Jon Rahm', 'Tyrrell Hatton', 'Shane Lowry'] },
  { player: 'Brian Irish', picks: ['Xander Schauffele', 'Brooks Koepka', 'Sungjae Im'] },
  { player: 'Jonesy', picks: ['Scottie Scheffler', 'Rory McIlroy', 'Corey Conners'] },
  { player: 'Haycock Snr', picks: ['Ryan Fox', 'Robert MacIntyre', 'Adam Scott'] },
  { player: 'Mal J', picks: ['Ludvig Åberg', 'Alex Noren', 'Tommy Fleetwood'] },

  { player: 'Doc Campbell', picks: ['Scottie Scheffler', 'Jon Rahm', 'Matt Fitzpatrick'] },
  { player: 'T Coleman', picks: ['Viktor Hovland', 'Tom Kim', 'Patrick Cantlay'] },
  { player: 'A Rose', picks: ['Xander Schauffele', 'Aaron Rai', 'Bud Cauley'] },
  { player: 'D Haycock', picks: ['Rory McIlroy', 'Shane Lowry', 'Robert MacIntyre'] },
  { player: 'P Langley', picks: ['Scottie Scheffler', 'Tyrrell Hatton', 'Min Woo Lee'] },
  { player: 'T Wallace', picks: ['Matt Fitzpatrick', 'Ludvig Åberg', 'Tommy Fleetwood'] },
  { player: 'K Ferg', picks: ['Jon Rahm', 'Brooks Koepka', 'Corey Conners'] },
  { player: 'JB', picks: ['Scottie Scheffler', 'Patrick Cantlay', 'Ryan Fox'] },
  { player: 'D McCarthy', picks: ['Xander Schauffele', 'Rory McIlroy', 'Si Woo Kim'] },
  { player: 'Nath Ferg', picks: ['Viktor Hovland', 'Tom Kim', 'Alex Fitzpatrick'] },

  { player: 'Muzza T', picks: ['Tommy Fleetwood', 'Ryan Fox', 'Matt Fitzpatrick'] },
  { player: 'D Donnelly', picks: ['Robert MacIntyre', 'Chris Gotterup', 'Aaron Rai'] },
  { player: 'Hancock', picks: ['Tyrrell Hatton', 'Tommy Fleetwood', 'Patrick Cantlay'] },
  { player: 'B Ashford', picks: ['Scottie Scheffler', 'Ludvig Åberg', 'Shane Lowry'] },
  
  { player: 'Bradley C', picks: ['Brooks Koepka', 'Justin Thomas', 'Scottie Scheffler'] },
  { player: 'Sloanie', picks: ['Jon Rahm', 'Scottie Scheffler', 'Rory McIlroy'] },
  { player: 'R Fowler', picks: ['Tom Kim', 'Tommy Fleetwood', 'Wyndham Clark'] },
  { player: 'Sparky', picks: ['Ludvig Åberg', 'Ryan Fox', 'Tommy Fleetwood'] },
  { player: 'Barley', picks: ['Tommy Fleetwood', 'Patrick Cantlay', 'Ludvig Åberg'] },
  { player: 'Pete Holly', picks: ['Shane Lowry', 'Viktor Hovland', 'Wyndham Clark'] },
  { player: 'Timmy S', picks: ['Tommy Fleetwood', 'Corey Conners', 'Matt Fitzpatrick'] },
  { player: 'Mr Grant', picks: ['Rory McIlroy', 'Scottie Scheffler', 'Matt Fitzpatrick'] },
  { player: 'Greg B', picks: ['Ludvig Åberg', 'Tommy Fleetwood', 'Rory McIlroy'] },
  { player: 'JD Boy', picks: ['Scottie Scheffler', 'Tommy Fleetwood', 'Brooks Koepka'] },

  { player: 'Mr Manson', picks: ['Tom Kim', 'Ludvig Åberg', 'Scottie Scheffler'] },
  { player: 'Up the Wahs', picks: ['Rory McIlroy', 'Shane Lowry', 'J.J. Spaun'] },
  { player: 'G Ponting', picks: ['Brooks Koepka', 'Shane Lowry', 'J.J. Spaun'] },
  { player: 'R McKnight', picks: ['Scottie Scheffler', 'Shane Lowry', 'Rory McIlroy'] },
  { player: 'Chalkey', picks: ['Tommy Fleetwood', 'Jon Rahm', 'Tom Kim'] },
  { player: 'Budgie', picks: ['Jon Rahm', 'J.J. Spaun', 'Wyndham Clark'] },
  { player: 'Lamming', picks: ['Rory McIlroy', 'Corey Conners', 'Ludvig Åberg'] },
  { player: 'A Bull', picks: ['Scottie Scheffler', 'Tommy Fleetwood', 'Wyndham Clark'] },
  { player: 'Lynda R', picks: ['Matt Fitzpatrick', 'Wyndham Clark', 'Viktor Hovland'] },
  { player: 'Cam P', picks: ['Scottie Scheffler', 'Rory McIlroy', 'Wyndham Clark'] },

  { player: 'Wazza SB', picks: ['Scottie Scheffler', 'Rory McIlroy', 'Tom Kim'] },
  { player: 'Mac The Knife', picks: ['Kristoffer Reitan', 'Tom Kim', 'Kurt Kitayama'] },
  { player: 'Crusader', picks: ['Scottie Scheffler', 'Xander Schauffele', 'Matt Fitzpatrick'] },
  { player: 'Maccas', picks: ['Corey Conners', 'Aaron Rai', 'Patrick Cantlay'] },

    { player: 'Matt B', picks: ['Scottie Scheffler', 'Rory McIlroy', 'Jon Rahm'] },
  { player: 'The Wrangler', picks: ['Scottie Scheffler', 'Xander Schauffele', 'Tommy Fleetwood'] },
  { player: 'AD', picks: ['Tommy Fleetwood', 'Matt Fitzpatrick', 'Xander Schauffele'] },
  { player: 'J Turner', picks: ['Scottie Scheffler', 'Xander Schauffele', 'Tyrrell Hatton'] },
  { player: 'M Sanders', picks: ['Rory McIlroy', 'Matt Fitzpatrick', 'Bud Cauley'] },
  { player: 'Nick Fitz', picks: ['Rory McIlroy', 'Matt Fitzpatrick', 'Min Woo Lee'] },
  { player: 'T Rowe', picks: ['Ludvig Åberg', 'Tom Kim', 'Scottie Scheffler'] },
  { player: 'J Tilley', picks: ['Matt Fitzpatrick', 'Jon Rahm', 'Aaron Rai'] },
  { player: 'Arnie Palmer', picks: ['Scottie Scheffler', 'Tom Kim', 'Tommy Fleetwood'] },
  { player: 'Kimbo Slice', picks: ['Scottie Scheffler', 'Robert MacIntyre', 'Tommy Fleetwood'] },

  { player: 'L Adams', picks: ['Wyndham Clark', 'Jon Rahm', 'Rory McIlroy'] },
  { player: 'K McGinness', picks: ['Shane Lowry', 'Matt Fitzpatrick', 'Tommy Fleetwood'] },
  { player: 'Baylis', picks: ['Scottie Scheffler', 'Tommy Fleetwood', 'Bud Cauley'] },
  { player: 'D Tucker', picks: ['Scottie Scheffler', 'Tyrrell Hatton', 'Jon Rahm'] },
  { player: 'Kev Martin', picks: ['Ludvig Åberg', 'Rory McIlroy', 'Corey Conners'] },
  { player: 'P Mac', picks: ['Scottie Scheffler', 'Tom Kim', 'Tommy Fleetwood'] },
  { player: 'J Barbour', picks: ['Scottie Scheffler', 'Wyndham Clark', 'Robert MacIntyre'] },
  { player: 'P Lund', picks: ['Aaron Rai', 'Tyrrell Hatton', 'Shane Lowry'] },
  { player: 'Trump H', picks: ['Kristoffer Reitan', 'Viktor Hovland', 'Scottie Scheffler'] },
  { player: 'John Edge', picks: ['Tommy Fleetwood', 'Ludvig Åberg', 'Xander Schauffele'] },

  { player: 'Trent W', picks: ['Justin Thomas', 'Xander Schauffele', 'Rory McIlroy'] },
  { player: 'Sir Steve', picks: ['Jon Rahm', 'Xander Schauffele', 'Matt Fitzpatrick'] },
  { player: 'Nat M', picks: ['Tom Kim', 'Jon Rahm', 'Scottie Scheffler'] },
  { player: 'Spinetto', picks: ['Xander Schauffele', 'Tommy Fleetwood', 'Matt Fitzpatrick'] }
];

  
