import { http } from '../../request';
export function getGoodPriceRoomInfo() {
  return http.get('home/goodprice');
}

export function getDiscountRoomInfo() {
  return http.get('home/discount');
}

export function getHotRoomInfo() {
  return http.get('home/hotrecommenddest');
}

export function getHighScoreRoomInfo() {
  return http.get('home/highscore');
}

export function getPlusRoomInfo() {
  return http.get('home/plus');
}

export function getLongForCityInfo() {
  return http.get('home/longfor');
}
