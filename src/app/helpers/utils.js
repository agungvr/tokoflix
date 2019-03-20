export const getPrice = (rating) => {
  if (rating === 1 && rating <= 3) {
    return 3500;
  } else if (rating >= 3 && rating <= 6) {
    return 8250;
  } else if (rating >= 6 && rating <= 8) {
    return 16350;
  } else if (rating >= 8 && rating <= 10) {
    return 21250;
  } else {
    return 3000;
  }
};

export const convertToRupiah = (angka) => {
  let rupiah = '';
  let angkarev = angka.toString().split('').reverse().join('');
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 === 0)
      rupiah += angkarev.substr(i, 3) + '.';
  return rupiah.split('', rupiah.length - 1).reverse().join('');
}
