function recommendScent() {
  const music = document.getElementById("music").value;

  fetch("https://your-server-url/api/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ song: music })
  })
  .then(response => response.json())
  .then(result => {
    const scents = result.scent.split(', ');

    document.getElementById("result").innerHTML =
      `<p>이 노래에 어울리는 향:</p>
       <div class="scent-tags">
         ${scents.map(s => `<span class="tag">${s}</span>`).join('')}
       </div>`;
  })
  .catch(error => {
    console.error("에러:", error);
    document.getElementById("result").innerText = "추천에 실패했어요.";
  });
}
