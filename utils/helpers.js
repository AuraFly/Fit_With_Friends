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
    } else if (randomNum > 4) {
      return `<img src="${image2}" alt="${type}">`;
    } else {
      return `<img src="${image3}" alt="${type}">`;
    }
  },
};
