function recommendScent() {
  const music = document.getElementById("music").value;

  const data = { song: music };

  fetch("https://your-server-url/api/recommend", { // 나중에 서버 주소 바꾸기
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    document.getElementById("result").innerText =
      `추천 향기: ${result.scent}`;
  })
  .catch(error => {
    console.error("에러 발생:", error);
    document.getElementById("result").innerText = "추천에 실패했어요.";
  });
}
