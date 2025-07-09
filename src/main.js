import { MainPage } from "./pages/MainPage.js";
import { getProducts } from "./api/productApi.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

function render(state) {
  const root = document.getElementById("root");
  root.innerHTML = MainPage(state);
}

function main() {
  let state = {
    products: [],
    isLoading: true,
    pagination: 0,
    filters: "",
  };

  // 초기 렌더링
  render(state);

  getProducts({})
    .then((response) => {
      state.products = response.products;
      state.pagination = response.pagination;
      state.filters = response.filters;
    })
    .finally(() => {
      state.isLoading = false;
      render(state);
    });
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
