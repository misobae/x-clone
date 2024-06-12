import {http, HttpResponse, StrictResponse} from 'msw'
import {faker} from "@faker-js/faker";

const User = [
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/elon.jpg'},
  {id: 'misosiru', nickname: '미소시루', image: '/profile.jpg'},
  {id: 'kingcat2', nickname: '킹냥이', image: faker.image.avatar()},
]

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
];