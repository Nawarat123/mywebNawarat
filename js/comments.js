function addComment() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  if (name === "" || comment === "") {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}:</strong> ${comment}`;

  document.getElementById("commentList").appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}
