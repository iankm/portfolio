export const shortenAddress = (
  address: string,
  firstHalf: boolean = false
): string => {
  if (!address) {
    return '';
  }
  return firstHalf
    ? `${address.substring(2, 7)}`.toLocaleLowerCase()
    : address.length > 10
    ? `${address.substring(0, 5)}...${address.substring(
        address.length - 4
      )}`.toLocaleLowerCase()
    : address;
};
