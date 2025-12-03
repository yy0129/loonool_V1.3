// main.js - 404 错误页按钮逻辑（暂时 console 提示）

(function () {
  const btnHome = document.getElementById("btnHome");
  const btnSpaces = document.getElementById("btnSpaces");

  if (btnHome) {
    btnHome.addEventListener("click", () => {
      // 将来接入路由时可以改成：window.location.href = "/";
      console.log("TODO: 跳转到首页 /");
    });
  }

  if (btnSpaces) {
    btnSpaces.addEventListener("click", () => {
      // 将来接入路由时可以改成：window.location.href = '/my-spaces';
      console.log("TODO: 跳转到 My Spaces /my-spaces");
    });
  }
})();
