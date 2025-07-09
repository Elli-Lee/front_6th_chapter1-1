export const Badge = ({ count = 0 }) => {
  if (count === 0) return "";

  return `
  <span
    class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${count}</span> 
  `;
};
