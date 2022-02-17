/* eslint-disable no-useless-concat */
import ImgWork1 from '../../res/assets/images/works/work1.png';
import ImgWork2 from '../../res/assets/images/works/work2.png';
import ImgWork3 from '../../res/assets/images/works/work3.png';
import ImgWork4 from '../../res/assets/images/works/work4.png';

const workList = [
  {
    id: 1,
    title: 'JobFinFin',
    description:
      '' +
      'Platform: Web, Android, iOS' +
      '\n\nJob search platform' +
      '\n\nJobFinFIn is a job search platform. Which has collected up to 100000+ job listings. Save jobs you have viewed for later. Easily apply to jobs directly through the platform.',
    image: ImgWork3,
    imageFloat: 'left',
  },
  {
    id: 20,
    title: 'Ufriend',
    description:
      '' +
      'Platform: Android, iOS' +
      '\n\nInstallment Sale Platform' +
      '\n\nUfriend is a installment sale platform. The system can view installment information and notify you of overdue payments, next bill payments. Able to pay installments and view your payment history',
    image: ImgWork4,
    imageFloat: 'right',
  },
  {
    id: 2,
    title: 'Panya5G',
    description:
      '' +
      'Platform: Android, iOS' +
      '\n\nData recording system for rotating savings platform' +
      '\n\nPanya5G is a platform for saving data in the form of rotating savings. Daily statement of outstanding balance or installment payments. Reminder of the amount of payment received every day.',
    image: ImgWork1,
    imageFloat: 'left',
  },
  {
    id: 3,
    title: 'Susco Smart Member',
    description:
      '' +
      'Platform: Android, iOS' +
      '\n\nCustomer relationship management system (CRM).' +
      '\n\nSusco Smart Member is a customer relationship management system (CRM). Used to earn points. Exchange points for rewards and transfer points to other participating platforms.',
    image: ImgWork2,
    imageFloat: 'right',
  },
];
export default workList;
