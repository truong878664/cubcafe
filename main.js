function scrollToTop() {
  const scrollTopBtn = document.querySelector(".scroll-top");
  scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;

    for (let i = document.documentElement.scrollTop; i >= 0; i--) {
      setTimeout(() => {
        document.documentElement.scrollTop = i;
      }, 100);
    }
  });
}

scrollToTop();
