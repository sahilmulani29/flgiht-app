import { fetchRequest, get } from '../../api/request'
import { APIResponse, mockFetch } from '../mock'

/* eslint-disable */

// To mock fetch
global.fetch = mockFetch(APIResponse)

describe('Request component Test Cases', () => {

  test('Should call fetchAllCatMovies', () => {
    expect(fetchRequest('GET', '/api/flights')).not.toBeNull()
  })

  test('API fail', () => {
    global.fetch = mockFetch(null)
    expect(fetchRequest('GET', '/api/flights')).not.toBeNull()
  })

})

/* eslint-disable */
