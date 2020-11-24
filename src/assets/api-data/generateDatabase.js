import moment from 'moment';
import localization from 'moment/locale/fr';
import logo1 from '../images/src_assets_images_logo1.png';
import logo2 from '../images/src_assets_images_logo2.png';

const names = ['Mr Kamel Key', 'Mr Tarek Chermat', 'Mr Alfred Smith', 'Mr Jhon Snow'];
const cars = ['Toyota', 'Citroen', 'Volvo', 'Tesla', 'Range Rover', 'Nissan', 'Volga'];
const types = ['Kit d’embrayage et vol', 'Reparation', 'Révision intermédiaire', 'Nettoyage'];
const prices = ['00,00', '180,65', '33,56', '201,8', '200,00', '170,65', '343,56', '101,8', '400,00', '10,65', '3,56', '18,8', '20,00', '80,5', '133,5', '61,8'];
const rdv = ['web', 'web', 'web', 'web', 'web', 'web', 'web', 'web', 'web', 'web', 'web', 'web', 'perso', 'perso'];
const quoteType = ['with', 'with', 'with', 'with', 'with', 'with', 'with', 'without', 'without', 'without', 'without', 'without', 'without', 'with'];
const statusesMulti = ['valid', 'toValidate', 'canceled', 'problems', 'wallet'];
const statusesValid = Array(5).fill('valid');
const statuses = [['valid'], ['toValidate'], ['canceled'], ['problems'], ['wallet'], statusesMulti, statusesValid,
  ['valid'], ['toValidate'], ['canceled'], ['problems'], ['wallet'], ['perso'], ['perso']];
const statusesN = [1, 1, 1, 1, 1, 2 + Math.floor(2 * Math.random()), 2
+ Math.floor(2 * Math.random()), 1, 1, 1, 1, 1, 1, 1];
const notes = ['Hôpital intercommunal de Creteil', 'Rendez-vous avec un médecin', 'Urgence familliale, hopital cochin'];
const information = {
  back: 'Restitution au plus tard 18h00',
  type: 'VEHICULE DE COURTOISIE',
  number: '01 84 47 81 14',
  email: 'hafdallahali@hotmail.fr',
  reseau: 'IdGarage',
  garageType: 'garage confiance',
  garage: 'speedoto',
  street: '57 RUE DE MAYENNE',
  city: '94000 CRETEIL (FR)',
  registration: '625 KH 57',
  mineType: '6R12E7',
  cnit: '',
  engineCode: 'CGGB',
  fuel: 'Essense',
  comment: '',
  equipment: '',
  total: '186,89 €',
  discount: '15,00 €',
  bill: '171,89 €',
  invoice: '15,58 €',
  totalHorsRemise: '251,08',
  totalAvecRemiseCoupon: '71,84',
  totalHT: '143,25',
  tva: '28,65',
  montantFacturer: '171,89',
  fourchette: '171,89',
};

const attention = ['ATTENTION : Pour ce rendez-vous web nous avons identifié plusieurs références constructeur possible. Vous devez vous assurez que la référence indiquée correspond bien à celle montée sur le véhicule du client. Le détail du devis ci après se base sur la fourchette minimum.', ''];

moment.updateLocale('fr', localization);

const generateDatabase = () => {
  const data = [];
  let oneWeek = {};

  for (let i = 0; i < 73; i++) {
    const weekData = [];
    for (let j = 0; j < 6; j++) {
      const quote = (N, status, RDV) => {
        const quotes = [];
        const hours = 1 + Math.floor(4 * Math.random());
        for (let n = 0; n < N; n++) {
          quotes.push({
            status: status[Math.floor(N * Math.random())],
            number: RDV === 'with' ? `IDG-20200501-${Math.floor(Math.random() * 10 ** 6)}` : 'RDV SANS DEVIS',
            type: types[Math.floor(3 * Math.random())],
            price: prices[Math.floor((prices.length - 1) * Math.random())],
            hours,
          });
        }
        return quotes;
      };

      const getSum = (ticket) => {
        let sum = 0;
        for (let m = 0; m < ticket.length; m++) {
          for (let n = 0; n < ticket[m].quotes.length; n++) {
            sum += ticket[m].quotes[n].hours;
          }
        }
        return sum;
      };

      const quotes14 = [];
      const rdv14 = [];
      const quoteType14 = [];
      for (let t = 0; t < 14; t++) {
        rdv14.push(rdv[t]);
        quoteType14.push(quoteType[t]);
        quotes14.push(quote(statusesN[t], statuses[t], quoteType[t]));
      }

      const ticket = (a, b) => {
        const tickets = [];
        for (let t = a; t < b; t++) {
          tickets.push({
            date: moment().week(i).day(j).format('dddd, D MMMM'),
            name: names[Math.floor(4 * Math.random())],
            vehicleMarque: cars[Math.floor((cars.length - 1) * Math.random())],
            vehicleModel: 'model',
            vehicleMotorisation: '1.6 HDI 110 FAB BVR',
            order: Math.floor(Math.random() * 10 ** 10).toString(),
            time: 8 + Math.floor((18 - 8) * Math.random()),
            Commandtime: `${8 + Math.floor((18 - 8) * Math.random())}h00`,
            minutes: '00',
            note: notes[Math.floor(Math.random() * 3)],
            logo: [logo1, logo2][Math.floor(Math.random())],
            show: 'none',
            quotes: quotes14[t],
            attention: attention[Math.floor(2 * Math.random())],
            rdv: rdv14[t],
            quoteType: quoteType14[t],
            information,
          });
        }
        return tickets;
      };

      const a = [0, 0, 2, 5, 7, 10];
      const b = [0, 2, 5, 7, 10, 14];
      const T = ticket(a[j], b[j]);

      weekData.push({
        hours: getSum(T),
        openingHours: [8, 12, 14, 18],
        tickets: T,
        oldTickets: T,
        closed: T.length === 0,
        showModal: false,
      });
    }

    oneWeek = {
      week: i,
      hours: 25 + Math.floor((40 - 25) * Math.random()),
      data: weekData.sort(() => Math.random() - 0.5),
    };

    data.push(oneWeek);
  }
  return data;
};

export default generateDatabase;
