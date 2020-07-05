import Mock from 'mockjs'

let List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.mock('@increment'),
    title: Mock.mock('@first'),
    desc: Mock.mock('@cparagraph(1, 3)')
  }))
}

export default {
  /**
   * 获取列表
   * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
   * @param name, page, limit
   * @return {{code: number, count: number, data: *[]}}
   */
  getUserList: () => {
    // const { limit , page } = JSON.parse(config.body);
    let userList = List;
    // const userList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      data: {
        total: userList.length,
        userList: userList
      }
    }
  }
}