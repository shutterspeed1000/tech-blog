const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector(".newcommenttext").value.trim();
  const post_id = event.target.getAttribute("data-id");

  if ((comment, post_id)) {
    console.log("posted");
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector(".newComment")
  .addEventListener("click", newCommentHandler);
