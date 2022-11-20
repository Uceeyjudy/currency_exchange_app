import MoneyIcon from './assets/moneyIcon.png';
import WorldIcon from './assets/world.png';
import DollarIcon from './assets/dollar.png';
import MessageIcon from './assets/message.png';
import PalIcon from './assets/parralel.png';
import ExchangeIcon from './assets/convertIcon.svg';
import NotificationIcon from './assets/notification.png';

export const faqData = [
  {
    quest: 'What is a street bank exchange rate app',
    answer:
      'It is an App that shows you a country’s real time street market rate',
    img: ExchangeIcon,
  },
  {
    quest: 'Can I convert between currencies?',
    answer:
      'Yes. A user can convert between currencies from inside the application.',
    img: PalIcon,
  },
  {
    quest: 'Can I see the parallel market rate?',
    answer:
      'You can be able to see official parallel market rates for currency i.e., the official and parallel rates.',
    img: ExchangeIcon,
  },
  {
    quest: 'Will I be able to see push notifications?',
    answer: 'You can see push notifications when rates are updated.',
    img: NotificationIcon,
  },
  {
    quest: 'Which currency can I view?',
    answer:
      'Also known as the mid-market rate, the spot rate or the real exchange rate, the interbank rate  is the exchange rate used by banks and instituitions when trading large volumes of foreign currency with the one another',
    img: DollarIcon,
  },
  {
    quest: 'Why do currency cnversion rates differ between companies?',
    answer:
      'Currency conversion rates differ between companies as each company manipulates the interbank rate to make a profit. This is usually done on volume; the higher the volume, the closer you get to the interbank rate.',
    img: WorldIcon,
  },
  {
    quest: 'What is the best time to exchange my money?',
    answer:
      'Most trading happens in the UK and US market, so 8am GMT to 5pm EST, is when the market is mostly liquid and the difference between the bid and ask rates is minimal.',
    img: MoneyIcon,
  },
  {
    quest: 'How do i change my account email?',
    answer:
      'You can log in to your account and change it from your profile > Edit profile, then go to the general tab and change your email.',
    img: MessageIcon,
  },
];
