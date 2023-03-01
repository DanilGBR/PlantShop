import URLS from 'src/app/core/constants/urls';
import { HeaderLink } from 'src/app/core/interfaces/headerLinks';

const rightHeaderLinks: HeaderLink[] = [
  {
    title: 'Log-In/Sign-Up',
    url: URLS.LOGIN,
  },
  {
    title: 'Search',
    url: URLS.SEARCH,
  },
  {
    title: 'Cart',
    url: URLS.CART,
  },
];

export default rightHeaderLinks;
