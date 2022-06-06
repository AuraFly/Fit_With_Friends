const newActivity = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#activity-n").value.trim();
  const activity_type = document.querySelector("#activity-t").value.trim();
  const description = document.querySelector("#activity-d").value.trim();

  if (name && activity_type && description) {
    const response = await fetch(`/api/activities`, {
      method: "POST",
      body: JSON.stringify({ name, activity_type, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/account");
    } else {
      console.log(response);
      alert("Failed to create activity");
    }
  }
};

const delActivity = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/activities/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/account");
    } else {
      alert("Failed to delete activity");
    }
  }
};

document.querySelector(".activity-form").addEventListener("click", newActivity);

document.querySelector(".activity-list").addEventListener("click", delActivity);

const postComment = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment-act").value.trim();
  const creator = document.querySelector("#profile-name").value.trim();

  if (event.target.hasAttribute("data-id")) {
    const activity_id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ comment, creator, activity_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/account");
    } else {
      console.log(response);
      alert("Failed to create comment");
    }
  }
};

document.querySelector(".post-button").addEventListener("click", postComment);
