function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function confirmDelete(id) {
  if (confirm("¿Estás seguro de que quieres borrar este artículo?")) {
    const csrftoken = getCookie("csrftoken");
    fetch(`/blog/${id}/borrar/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": csrftoken,
      },
    }).then(() => {
      window.location.href = "/";
    });
  }
}
