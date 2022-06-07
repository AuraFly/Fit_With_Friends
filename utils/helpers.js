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
        image1 = "images/lifting.jpg";
        image2 = "images/climbing.jpg";
        image3 = "images/boxing.jpg";
        image4 = "images/press.jpg";
        image5 = "images/pushup.jpg";
        break;
      case "Aerobic":
        image1 = "images/bike.jpg";
        image2 = "images/walk.jpg";
        image3 = "images/hike.jpg";
        image4 = "images/swim.jpg";
        image5 = "images/run.jpg";
        break;
      case "Flexibility":
        image1 = "images/stretching.jpg";
        image2 = "images/yoga.jpg";
        image3 = "images/dance.jpg";
        image4 = "images/wallyoga.jpg";
        image5 = "images/pilates.jpg";
      default:
        break;
    }
    if (randomNum > 8) {
      return `src="${image1}" alt="${type}"`;
    } else if (randomNum > 6) {
      return `src="${image2}" alt="${type}"`;
    } else if (randomNum > 4) {
      return `src="${image3}" alt="${type}"`;
    } else if (randomNum > 2) {
      return `src="${image4}" alt="${type}"`;
    } else {
      return `src="${image5}" alt="${type}"`;
    }
  },

  goalImg: (gtype) => {
    const randomNumb = Math.floor(Math.random() * 11);

    let imag1 = "";
    let imag2 = "";
    switch (gtype) {
      case "Stamina":
        imag1 = "images/g-stamina.jpg";
        imag2 = "images/g-stamina2.jpg";
        break;
      case "Strength":
        imag1 = "images/g-strength.jpg";
        imag2 = "images/g-strength2.jpg";
        break;
      case "Diet":
        imag1 = "images/g-diet.jpg";
        imag2 = "images/g-water.jpg";
        break;
      case "Core":
        imag1 = "images/g-core.jpg";
        imag2 = "images/g-balance.jpg";
      default:
        break;
    }
    if (randomNumb > 5) {
      return `src="${imag1}" alt="${gtype}"`;
    } else {
      return `src="${imag2}" alt="${gtype}"`;
    }
  },
};
