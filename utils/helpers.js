module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  get_strImg: (type) => {
    const randomNum = Math.floor(Math.random() * 11);

    let image1 = "";
    let image2 = "";
    let image3 = "";
    switch (type) {
      case "Strength":
        image1 = "http://localhost:3001/images/lifting.jpg";
        image2 = "http://localhost:3001/images/climbing.jpg";
        image3 = "http://localhost:3001/images/boxing.jpg";
        break;
      case "Aerobic":
        image1 = "http://localhost:3001/images/lifting.jpg";
        image2 = "http://localhost:3001/images/weights.jpg";
        image3 = "http://localhost:3001/images/climbing.jpg";
      case "Flexibility":
        image1 = "http://localhost:3001/images/lifting.jpg";
        image2 = "http://localhost:3001/images/weights.jpg";
        image3 = "http://localhost:3001/images/climbing.jpg";
      default:
        break;
    }
    if (randomNum > 8) {
      return `<img src="${image1}" alt="${type}">`;
    } else if (randomNum > 4) {
      return `<img src="${image2}" alt="${type}">`;
    } else {
      return `<img src="${image3}" alt="${type}">`;
    }
  },
};
