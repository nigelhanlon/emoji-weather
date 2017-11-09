module.exports = {
  defaultMap : () => {
    // Just here for reference really. 
    return [ 
    '📘📘📘📘📘📗📗📗📘📘',
    '📘📘📘📗📗📗📗📗📗📘',
    '📘📘📘📗📗📗📗📗📗📘',
    '📘📘📘📘📗📗📗📗📘📘',
    '📘📗📗📗📗📗📗📗📗📘',
    '📘📘📗📗📗📗📗📗📗📘',
    '📘📗📗📗📗📗📗📗📗📘',
    '📘📗📗📗📗📗📗📗📗📘',
    '📘📘📘📗📗📗📗📗📗📘',
    '📘📗📗📗📗📗📗📗📗📘',
    '📘📗📗📗📗📗📗📗📘📘',
    '📘📘📗📗📘📘📘📘📘📘'].join('\n');
   },
   weatherMapString: (weather) => {
    
      const b = weather[0];
      const c = weather[1];
      const d = weather[2];
      const g = weather[3];
      const l = weather[4];
      const m = weather[5];
      const s = weather[6];
      const w = weather[7]; 

    return [ 
      `📘📘📘📘📘📗📗📗📘📘`,
      `📘📘📘📗📗${l}📗📗📗📘`,
      `📘📘📘📗📗📗📗📗${b}📘`,
      `📘📘📘📘${s}📗📗📗📘📘`,
      `📘📗📗📗📗📗📗📗📗📘`,
      `📘📘${g}📗📗📗📗📗📗📘`,
      `📘📗📗📗📗${m}📗📗${d}📘`,
      `📘📗📗📗📗📗📗📗📗📘`,
      `📘📘📘📗📗📗📗📗📗📘`,
      `📘📗📗📗📗📗📗📗📗📘`,
      `📘📗📗📗${c}📗📗${w}📘📘`,
      `📘📘📗📗📘📘📘📘📘📘`].join('\n');
   },
   getLocations: () => {
    return [
      'Belfast,UK',
      'Cork,IE',
      'Dublin,IE',
      2964180,          // Galway
      'Letterkenny,IE',
      2962361,          // Mullingar
      'Sligo,IE',
      2960992           // Waterford
    ];
   }
}