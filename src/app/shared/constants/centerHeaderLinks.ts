import URLS from 'src/app/core/constants/urls';
import { HeaderLink } from 'src/app/core/interfaces/headerLinks';

const centerHeaderLinks: HeaderLink[] = [
  {
    title: 'Home',
    url: URLS.HOME,
  },
  {
    title: 'Catalogue',
    url: URLS.CATALOGUE,
  },
  {
    title: 'Contact',
    url: URLS.CONTACT,
  },
];

export default centerHeaderLinks;
