const newPostHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#newposttext').value.trim();


  if (text) {
    console.log("posted")
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({text}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('#postSub').addEventListener('click', newPostHandler);