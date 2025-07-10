import { ProductSkeleton } from "../components/ProductSkeleton.js";
import { ProductSpinner } from "../components/ProductSpinner.js";
import { ProductFilterAndSort } from "../components/ProductFilterAndSort.js";
import { ProductList } from "../components/ProductList.js";
import { Footer } from "../components/layout/Footer.js";
import { Header } from "../components/layout/Header.js";

export const MainPage = ({ isLoading, products, pagination }) => {
  return `
    <div class="min-h-screen bg-gray-50">
      ${Header()}
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 검색 및 필터 -->
        ${ProductFilterAndSort({ pagination })}
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            <!-- 상품 개수 정보 -->
            ${
              !isLoading
                ? `
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${pagination.total || 0}개</span>의 상품
            </div>
            `
                : ""
            }
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            <!-- 로딩 스켈레톤 -->
            ${
              isLoading
                ? `
              ${ProductSkeleton()} ${ProductSkeleton()} ${ProductSkeleton()} ${ProductSkeleton()}`
                : `${ProductList({ products })}`
            }
            </div>

            ${
              isLoading
                ? ProductSpinner()
                : `
              끝!
            `
            }
        </div>
      </main>
      ${Footer()}
    </div>
  `;
};
