import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import home from './home.js'

var mock = new MockAdapter(axios);
mock.onGet('/home').reply(200,home)

