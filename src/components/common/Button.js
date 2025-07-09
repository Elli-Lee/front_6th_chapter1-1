export const Button = ({ text, onClick }) => {
  return `
    <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
      hover:bg-blue-700 transition-colors add-to-cart-btn" @click="${() => onClick()}">
      ${text}
    </button>
  `;
};
