// Central tournament setup.
// To trial another event, change this file plus your Vercel env vars:
// SLASH_GOLF_TOURN_ID, SLASH_GOLF_YEAR, TOURNAMENT_STATE_ID.

export const tournamentConfig = {
  majorLabel: '154TH OPEN CHAMPIONSHIP',
  title: 'THE OPEN PICK 3 LIVE',
  venue: 'Royal Birkdale Golf Club',
  location: 'Southport, Merseyside, England',
  dates: 'July 16–19, 2026',
  prizePool: '$1,750',
  tournamentTimezone: 'America/Toronto',
  jackpotRule: 'To win, your picks must include the Champion Golfer of the Year. If no punter selects them, the prize pool jackpots.',
  heroImage: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=2400&q=80'
};

export const poolEntries = [
  { player: 'Barty', picks: ['Scottie Scheffler', 'Viktor Hovland', 'Matt Fitzpatrick'] },
  { player: 'Enright', picks: ['Scottie Scheffler', 'Shane Lowry', 'Wyndham Clark'] },
  { player: 'Roche SES', picks: ['Viktor Hovland', 'Patrick Cantlay', 'Matt Fitzpatrick'] },
  { player: 'Kitch', picks: ['Scottie Scheffler', 'Akshay Bhatia', 'Keith Mitchell'] },
  { player: 'Brom', picks: ['Viktor Hovland', 'J.J. Spaun', 'Sam Burns'] },
  { player: 'Shaw', picks: ['Scottie Scheffler', 'Robert MacIntyre', 'Si Woo Kim'] },
  { player: 'Brian Irish', picks: ['Matt Fitzpatrick', 'Justin Rose', 'Tommy Fleetwood'] },
  { player: 'Jonesy', picks: ['Viktor Hovland', 'Scottie Scheffler', 'Akshay Bhatia'] },
  { player: 'Haycock Snr', picks: ['Shane Lowry', 'Ryan Fox', 'Russell Henley'] },
  { player: 'Mal J', picks: ['Patrick Cantlay', 'Ludvig Åberg', 'Corey Conners'] },

  { player: 'Doc Campbell', picks: ['Scottie Scheffler', 'Matt Fitzpatrick', 'J.J. Spaun'] },
  { player: 'T Coleman', picks: ['Viktor Hovland', 'Shane Lowry', 'Collin Morikawa'] },
  { player: 'A Rose', picks: ['Akshay Bhatia', 'Justin Rose', 'Sam Burns'] },
  { player: 'D Haycock', picks: ['Scottie Scheffler', 'Patrick Cantlay', 'Keith Mitchell'] },
  { player: 'P Langley', picks: ['Viktor Hovland', 'Wyndham Clark', 'Robert MacIntyre'] },
  { player: 'T Wallace', picks: ['Matt Fitzpatrick', 'J.J. Spaun', 'Chris Gotterup'] },
  { player: 'K Ferg', picks: ['Scottie Scheffler', 'Shane Lowry', 'Si Woo Kim'] },
  { player: 'JB', picks: ['Viktor Hovland', 'Tommy Fleetwood', 'Russell Henley'] },
  { player: 'D McCarthy', picks: ['Akshay Bhatia', 'Matt Fitzpatrick', 'Ryan Fox'] },
  { player: 'Nath Ferg', picks: ['Scottie Scheffler', 'Justin Thomas', 'Corey Conners'] },

  { player: 'Muzza T', picks: ['Viktor Hovland', 'Patrick Cantlay', 'Sam Burns'] },
  { player: 'D Donnelly', picks: ['Shane Lowry', 'Keith Mitchell', 'Collin Morikawa'] },
  { player: 'Hancock', picks: ['Matt Fitzpatrick', 'Wyndham Clark', 'Tommy Fleetwood'] },
  { player: 'B Ashford', picks: ['Scottie Scheffler', 'J.J. Spaun', 'Justin Rose'] },

    { player: 'Bradley C', picks: ['Viktor Hovland', 'Akshay Bhatia', 'Scottie Scheffler'] },
  { player: 'Sloanie', picks: ['Matt Fitzpatrick', 'Patrick Cantlay', 'Justin Rose'] },
  { player: 'R Fowler', picks: ['Shane Lowry', 'Russell Henley', 'Corey Conners'] },
  { player: 'Sparky', picks: ['Ludvig Åberg', 'Tommy Fleetwood', 'Wyndham Clark'] },
  { player: 'Barley', picks: ['Scottie Scheffler', 'Keith Mitchell', 'Matt Fitzpatrick'] },
  { player: 'Pete Holly', picks: ['Sam Burns', 'Viktor Hovland', 'Collin Morikawa'] },

  { player: 'Timmy S', picks: ['Patrick Cantlay', 'Justin Rose', 'Akshay Bhatia'] },
  { player: 'Mr Grant', picks: ['Scottie Scheffler', 'J.J. Spaun', 'Tommy Fleetwood'] },
  { player: 'Greg B', picks: ['Robert MacIntyre', 'Shane Lowry', 'Ryan Fox'] },
  { player: 'JD Boy', picks: ['Matt Fitzpatrick', 'Scottie Scheffler', 'Chris Gotterup'] },
  { player: 'Mr Manson', picks: ['Viktor Hovland', 'Patrick Cantlay', 'Russell Henley'] },
  { player: 'Up the Wahs', picks: ['Scottie Scheffler', 'Justin Thomas', 'Keith Mitchell'] },

  { player: 'G Ponting', picks: ['Collin Morikawa', 'Sam Burns', 'Tommy Fleetwood'] },
  { player: 'R McKnight', picks: ['Shane Lowry', 'Matt Fitzpatrick', 'J.J. Spaun'] },
  { player: 'Chalkey', picks: ['Viktor Hovland', 'Corey Conners', 'Patrick Cantlay'] },
  { player: 'Budgie', picks: ['Scottie Scheffler', 'Justin Rose', 'Akshay Bhatia'] },
  { player: 'Lamming', picks: ['Tommy Fleetwood', 'Russell Henley', 'Ryan Fox'] },
  { player: 'A Bull', picks: ['Matt Fitzpatrick', 'Shane Lowry', 'Sam Burns'] },

  { player: 'Lynda R', picks: ['Patrick Cantlay', 'Keith Mitchell', 'Wyndham Clark'] },
  { player: 'Cam P', picks: ['Scottie Scheffler', 'Collin Morikawa', 'Matt Fitzpatrick'] },
  { player: 'Wazza SB', picks: ['Viktor Hovland', 'Justin Thomas', 'Tommy Fleetwood'] },
  { player: 'Mac The Knife', picks: ['Akshay Bhatia', 'Robert MacIntyre', 'Chris Gotterup'] },
  { player: 'Crusader', picks: ['Scottie Scheffler', 'Matt Fitzpatrick', 'Patrick Cantlay'] },
  { player: 'Maccas', picks: ['Ryan Fox', 'Corey Conners', 'Justin Rose'] },

    { player: 'Matt B', picks: ['Scottie Scheffler', 'Viktor Hovland', 'Tommy Fleetwood'] },
  { player: 'The Wrangler', picks: ['Matt Fitzpatrick', 'Patrick Cantlay', 'Shane Lowry'] },
  { player: 'AD', picks: ['Collin Morikawa', 'Sam Burns', 'Russell Henley'] },
  { player: 'J Turner', picks: ['Scottie Scheffler', 'Keith Mitchell', 'Ryan Fox'] },
  { player: 'M Sanders', picks: ['Viktor Hovland', 'Justin Rose', 'Akshay Bhatia'] },
  { player: 'Nick Fitz', picks: ['Matt Fitzpatrick', 'Patrick Cantlay', 'Tommy Fleetwood'] },

  { player: 'T Rowe', picks: ['Shane Lowry', 'Corey Conners', 'Collin Morikawa'] },
  { player: 'J Tilley', picks: ['Scottie Scheffler', 'J.J. Spaun', 'Sam Burns'] },
  { player: 'Arnie Palmer', picks: ['Viktor Hovland', 'Russell Henley', 'Keith Mitchell'] },
  { player: 'Kimbo Slice', picks: ['Matt Fitzpatrick', 'Justin Thomas', 'Patrick Cantlay'] },
  { player: 'L Adams', picks: ['Akshay Bhatia', 'Ryan Fox', 'Robert MacIntyre'] },
  { player: 'K McGinness', picks: ['Scottie Scheffler', 'Tommy Fleetwood', 'Justin Rose'] },

  { player: 'Baylis', picks: ['Viktor Hovland', 'Matt Fitzpatrick', 'Sam Burns'] },
  { player: 'D Tucker', picks: ['Patrick Cantlay', 'Collin Morikawa', 'Shane Lowry'] },
  { player: 'Kev Martin', picks: ['Scottie Scheffler', 'Keith Mitchell', 'Corey Conners'] },
  { player: 'P Mac', picks: ['Viktor Hovland', 'Tommy Fleetwood', 'J.J. Spaun'] },
  { player: 'J Barbour', picks: ['Matt Fitzpatrick', 'Ryan Fox', 'Russell Henley'] },
  { player: 'P Lund', picks: ['Shane Lowry', 'Justin Rose', 'Patrick Cantlay'] },

  { player: 'Trump H', picks: ['Robert MacIntyre', 'Matt Fitzpatrick', 'Tommy Fleetwood'] },
  { player: 'John Edge', picks: ['Scottie Scheffler', 'Akshay Bhatia', 'Sam Burns'] },
  { player: 'Trent W', picks: ['Viktor Hovland', 'Justin Thomas', 'Patrick Cantlay'] },
  { player: 'Sir Steve', picks: ['Matt Fitzpatrick', 'Tommy Fleetwood', 'Ryan Fox'] },
  { player: 'Nat M', picks: ['Scottie Scheffler', 'Collin Morikawa', 'Keith Mitchell'] },
  { player: 'Spinetto', picks: ['Viktor Hovland', 'Justin Rose', 'Corey Conners'] }
];
