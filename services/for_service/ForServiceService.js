import xhr from '../xhr/'

class ForServiceService{

  /**
   * 新增寿险保单信息
   * @param param
   * @param fuc
   */
  listLegal(param,fuc){
    xhr({
      method: 'GET',
      url: '/forService/listLegal',
      body: JSON.stringify(param),
      contentType:"application/json;charset=utf-8"
    }).then(data=>fuc(data))
  }

}
export default new ForServiceService()
