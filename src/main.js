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
    isLoadingMore: false, // 추가 로딩 상태
    hasMore: true, // 더 가져올 데이터가 있는지
    pagination: {
      limit: 20,
      page: 1,
      total: 0,
    },
    sort: "price_asc",
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
      state.sort = newSortBy;
      state.isLoading = true;
      console.log("again products", state.products);
      render(state);

      getProducts({ sort: state.sort, limit: state.pagination.limit })
        .then((response) => {
          state.products = response.products;
          state.pagination = response.pagination;
          state.filters = response.filters;
        })
        .catch((error) => {
          console.log("Fetch Error", error);
        })
        .finally(() => {
          state.isLoading = false;
          render(state);
        });
    }
  });

  function loadMoreProducts() {
    if (state.isLoadingMore || !state.hasMore) return;

    state.isLoadingMore = true;
    state.pagination.page += 1;
    render(state);

    getProducts({
      page: state.pagination.page,
      limit: state.pagination.limit,
      sort: state.sort,
    })
      .then((response) => {
        // 기존 products에 새로운 products 추가
        state.products = [...state.products, ...response.products];

        // 더 가져올 데이터가 있는지 확인 -> 전체 다 가지고 오면 더 가져올 데이터가 없음
        state.hasMore = response.products.length === state.pagination.limit;
      })
      .finally(() => {
        state.isLoadingMore = false;
        render(state);
      });
  }
  // 스크롤 이벤트 리스터
  document.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // 스크롤이 바닥에서 100px 정도 남았을 때 로드
    if (scrollHeight - scrollTop - clientHeight <= 100) {
      loadMoreProducts();
    }
  });

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
