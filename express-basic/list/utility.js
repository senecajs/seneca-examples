function someFunc(colors){
  return Object.keys(colors).reduce((list, key) => {
    list[key.toLowerCase()] = colors[key];
    return list;
  }, {});
}

const colors = {
  'AliceBlue': 'f0f8ff',
  'AntiqueWhite': '#FAEBD7',
  'Aqua': '#00FFFF',
  'Aquamarine': '#7FFFD4',
  'Azure': '#F0FFFF',
  'Beige': '#F5F5DC',
  'Bisque': '#FFE4C4',
  'Black': '#000000',
  'BlanchedAlmond': '#FFEBCD',
  'Blue': '#0000FF',
  'BlueViolet': '#8A2BE2',
  'Brown': '#A52A2A',
  'BurlyWood': '#DEB887',
  'CadetBlue': '#5F9EA0',
  'Chartreuse': '#7fff00',
  'Chocolate': '#d2691e',
  'Coral': '#FF7F50',
  'CornflowerBlue': '#6495ED',
  'Cornsilk': '#FFF8DC',
  'Crimson': '#DC143C'
}

const cdata = someFunc(colors);
module.exports = { cdata }

