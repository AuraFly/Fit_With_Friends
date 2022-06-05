const newGoals = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#goals-n").value.trim();
    const goals_type = document.querySelector("#goals-t").value.trim();
    const description = document.querySelector("#goals-m").value.trim();
  
    if (name && goals_type && description) {
      const response = await fetch(`/api/goals`, {
        method: "POST",
        body: JSON.stringify({ name, goals_type, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/account");
      } else {
        console.log(response);
        alert("Failed to create goals");
      }
    }
  };
  
  const delGoals = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/goals/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/account");
      } else {
        alert("Failed to delete goals");
      }
    }
  };
  
  document
    .querySelector(".goals-form")
    .addEventListener("submit", newGoals);
  
  document.querySelector(".goal-title").addEventListener("click", delGoals);
  