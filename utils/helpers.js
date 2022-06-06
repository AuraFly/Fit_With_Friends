module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },

  get_strImg: (type) => {
    const randomNum = Math.floor(Math.random() * 11);

    let image1 = "";
    let image2 = "";
    let image3 = "";
    let image4 = "";
    let image5 = "";
    switch (type) {
      case "Strength":
        image1 = "http://localhost:3001/images/lifting.jpg";
        image2 = "http://localhost:3001/images/climbing.jpg";
        image3 = "http://localhost:3001/images/boxing.jpg";
        image4 = "http://localhost:3001/images/press.jpg";
        image5 = "http://localhost:3001/images/pushup.jpg";
        break;
      case "Aerobic":
        image1 = "http://localhost:3001/images/bike.jpg";
        image2 = "http://localhost:3001/images/walk.jpg";
        image3 = "http://localhost:3001/images/hike.jpg";
        image4 = "http://localhost:3001/images/swim.jpg";
        image5 = "http://localhost:3001/images/run.jpg";
      case "Flexibility":
        image1 = "http://localhost:3001/images/stretching.jpg";
        image2 = "http://localhost:3001/images/yoga.jpg";
        image3 = "http://localhost:3001/images/dance.jpg";
        image4 = "http://localhost:3001/images/wallyoga.jpg";
        image5 = "http://localhost:3001/images/pilates.jpg";
      default:
        break;
    }
    if (randomNum > 8) {
      return `<img src="${image1}" alt="${type}">`;
    } else if (randomNum > 6) {
      return `<img src="${image2}" alt="${type}">`;
    } else if (randomNum > 4) {
      return `<img src="${image3}" alt="${type}">`;
    } else if (randomNum > 2) {
      return `<img src="${image4}" alt="${type}">`;
    } else {
      return `<img src="${image5}" alt="${type}">`;
    }
  },

  get_goalImg: (gtype) => {
    const randomNumb = Math.floor(Math.random() * 11);

    let imag1 = "";
    let imag2 = "";
    switch (gtype) {
      case "Stamina":
        imag1 = "http://localhost:3001/images/g-stamina.jpg";
        imag2 = "http://localhost:3001/images/g-stamina2.jpg";
        break;
      case "Strength":
        imag1 = "http://localhost:3001/images/g-strength.jpg";
        imag2 = "http://localhost:3001/images/g-strength2.jpg";
      case "Diet":
        imag1 = "http://localhost:3001/images/g-diet.jpg";
        imag2 = "http://localhost:3001/images/g-water.jpg";
      case "Core":
        imag1 = "http://localhost:3001/images/g-core.jpg";
        imag2 = "http://localhost:3001/images/g-balance.jpg";
      default:
        break;
    }
    if (randomNumb > 5) {
      return `<img src="${imag1}" alt="${gtype}">`;
    } else {
      return `<img src="${imag2}" alt="${gtype}">`;
    }
  },
}