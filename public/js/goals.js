const newGoals = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#goals-n").value.trim();
  const goal_type = document.querySelector("#goals-t").value.trim();
  const motivation = document.querySelector("#goals-m").value.trim();

  if (name && goal_type && motivation) {
    const response = await fetch(`/api/goals`, {
      method: "POST",
      body: JSON.stringify({ name, goal_type, motivation }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/account");
    } else {
      console.log(response);
      alert("Failed to create goal");
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

document.querySelector(".goals-form").addEventListener("submit", newGoals);
document.querySelector(".removethisgoal").addEventListener("click", delGoals);
