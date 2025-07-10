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
    pagination: {
      limit: 20,
      page: 1,
    },
    filters: "",
  };

  // 전역 이벤트 위임
  document.addEventListener("change", (event) => {
    const target = event.target;
    // console.log("eventLister", event);

    // 총 개수 변경 시
    if (target.id === "limit-select") {
      const newLimit = parseInt(target.value);
      state.pagination.limit = newLimit;
      state.isLoading = true;
      render(state);

      getProducts({ limit: state.pagination.limit })
        .then((response) => {
          state.products = response.products;
          state.pagination = response.pagination;
          state.filters = response.filters;
          console.log("again products", state.products);
        })
        .catch((error) => {
          console.log("Fetch Error", error);
        })
        .finally(() => {
          state.isLoading = false;
          render(state);
        });
    }

    if (target.id === "sort-select") {
      const newSortBy = target.value;
      console.log("newSortBy", newSortBy);
    }
  });
  // document.addEventListener("change", (event) => {
  //   const target = event.target;

  //   // limit select 변경 감지
  //   if (target.id === "limit-select") {
  //     const newLimit = parseInt(target.value);
  //     state.pagination.limit = newLimit;
  //     state.isLoading = true;
  //     render(state);

  //     // 새로운 limit으로 상품 다시 로드
  //     getProducts({ limit: newLimit })
  //       .then((response) => {
  //         state.products = response.products;
  //         state.pagination = response.pagination;
  //         state.filters = response.filters;
  //       })
  //       .finally(() => {
  //         state.isLoading = false;
  //         render(state);
  //       });
  //   }

  //   // sort select 변경 감지
  //   if (target.id === "sort-select") {
  //     const sortBy = target.value;
  //     state.isLoading = true;
  //     render(state);

  //     // 새로운 정렬로 상품 다시 로드
  //     getProducts({ sort: sortBy, limit: state.pagination.limit })
  //       .then((response) => {
  //         state.products = response.products;
  //         state.pagination = response.pagination;
  //         state.filters = response.filters;
  //       })
  //       .finally(() => {
  //         state.isLoading = false;
  //         render(state);
  //       });
  //   }
  // });

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
