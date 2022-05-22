
export const currencyFormatter = (params) => {
    return formatNumber(params.value) + ' ریال';
  }
  const formatNumber = (number) => {
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

