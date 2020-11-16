import {
  LOG_IN,
  LOG_OUT,
  LOAD_TO_STATE,
  LIKE_FLIGHT,
  SET_DATE
} from './ActionTypes';
import {
  getDate
} from '../scripts/getDate';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true
      }
      case LOG_OUT:
        return {
          ...state,
          isAuthenticated: false
        }
        case LOAD_TO_STATE:
          return {
            ...state,
            flights: action.payload.Quotes.map(quote => {
              return {
                id: String(quote.QuoteId),
                departureCity: 'Moscow',
                arriveCity: 'New York',
                departurePort: 'VKO',
                arrivePort: 'JFK',
                departureDate: getDate(new Date(quote.OutboundLeg.DepartureDate)),
                departureTime: '09:00',
                arriveTime: '20:50',
                company: action.payload.Carriers.find(item => item.CarrierId === quote.OutboundLeg.CarrierIds[0]).Name || 'undefined',
                price: quote.MinPrice,
                isLiked: false
              }
            })
          }
          case LIKE_FLIGHT:
            return {
              ...state,
              flights: state.flights.map(item => {
                if (item !== action.payload) {
                  return item;
                } else {
                  return {
                    ...item,
                    isLiked: !item.isLiked
                  }
                }
              }),
              
            }
          case SET_DATE:
            return {
              ...state,
              date: action.payload
            }
            default:
              return state;
  }
}
