document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
  
      try {
        const response = await fetch(`/api/ticket/${id}`, {
          method: 'DELETE'
        });
  
        if (response.ok) {
          location.reload();
        } else {
          alert('Failed to delete');
        }
      } catch (err) {
        console.error(err);
        alert('Error deleting ticket');
      }
    });
  });