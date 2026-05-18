function post() {
  //リクエストを送信する処理
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    // レスポンスのデータフォーマットの指定
    XHR.send(formData);
    // データをおくる
  });
};

window.addEventListener('load', post);