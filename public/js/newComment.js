const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('.newcommenttext').value.trim();
    const id = event.target.getAttribute('data-id')
  
  
    if (comment) {
      console.log("posted")
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({comment}),
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
  
  document.querySelector('.newComment').addEventListener('click', newCommentHandler);