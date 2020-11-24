import moment from 'moment';
import generateDatabase from '../assets/api-data/generateDatabase';
import french from '../assets/lg/FR';
import list from '../assets/api-data/nameList';
import descriptions from '../assets/api-data/descriptions';

const generatedData = generateDatabase();

// eslint-disable-next-line import/prefer-default-export
export const initState = {
  calendarReducer:
        {
          allData: generatedData,
          calendarOpened: false,
          dataForCommand: [],
          scrollWeek: moment().week(),
          scrollWeekDay: moment().weekday(),
          date: moment(),
        },
  planningReducer:
        {
          dataWeekAPI: {
            cars: 0, weekends: 6, weekdays: 10, delay: 2,
          },
          statuses:
                {
                  canceled: 10,
                  problems: 3,
                  toValidate: 7,
                  valid: 1,
                },
          currentStatus: { header: '', status: '', items: [] },
          weekDayForModifHours: { week: moment().week(), day: 0 },
        },
  congesReducer: {
    modif: false,
    index: 0,
    date1: moment().format('DD MMM YYYY'),
    date2: moment().format('DD MMM YYYY'),
    hour1: '8:00',
    hour2: '8:00',
    hours: 0,
    conges: [],
    weekNumber1: 0,
    weekDay1: 0,
    weekNumber2: 0,
    weekDay2: 0,
  },
  statusReducer:
        {
          canceled: 10,
          problems: 3,
          toValidate: 7,
          valid: 1,
        },
  languageReducer:
        {
          language: french,
          langAccount: descriptions,
        },
  authReducer:
        {
          userToken: false,
        },
  commandReducer:
        {
          currentCommand: [],
          idxs: [],
          note: '',
        },

  invoiceReducer:
        {
          periodType: 'year',
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1, // current month
        },
  statisticsReducer:
        {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          type: 'Visibility',
          network: 0,
          visibilityData: {
            contact: 0,
            vue: 0,
            compare: 0,
            browsed: 0,
          },
          salesData: {
            rdv: 0,
            ca: 0,
            cart: 0,
          },
        },
  tarifsReducer: {
    list,
    listIndex: 0,
  },
};
