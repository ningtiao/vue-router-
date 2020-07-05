
import Mock from 'mockjs'
import userAPI from './user'


Mock.mock(/\/user\/list\/get/, 'get', userAPI.getUserList)

export default Mock;