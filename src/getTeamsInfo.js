import { v4 as uuidv4 } from 'uuid';

function importAll(r) {
    let images = [];
    r.keys().map((item) => images.push({ 
      name: item.replace('./', '').replace('.png', '').replaceAll('_', ' '), 
      logo: r(item),
      clicked: false,
      id: uuidv4(),
    }));
    return images;
  }
  
  const teams = importAll(require.context('./images/teams', false, /\.(png|jpe?g|svg)$/));

  export default teams;