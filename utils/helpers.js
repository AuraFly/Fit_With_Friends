module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_strImg: () => {
    const randomNum = Math.floor(Math.random() * 11);

    if (randomNum > 8) {
      return `<img src="http://localhost:3001/images/lifting.jpg" alt="strength"></img>`;
    } else if (randomNum > 4) {
      return `<img src="http://localhost:3001/images/weights.jpg" alt="strength"></img>`;
    } else {
      return `<img src="http://localhost:3001/images/g-strength.jpg" alt="strength"></img>`;
    }
  },
};
