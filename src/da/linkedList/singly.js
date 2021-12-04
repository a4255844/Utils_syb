/* 
  自定义单项链表 : 结构类型 data + next(指针)
  1.链表头指向第一个元素,如果为空则指向null
  2.链表的尾部指向null
  3.链表元素之间用指针连接
*/
export default  class SinglyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  //向链表尾部添加一项
  append(data) { 
    const node = new SinglyLinkedList.Node(data)
    //如果当前head为Null,则直接指向这个节点
    if (!this.head) {
      this.head = node
    } else {
      //从头开始判断node的next属性是否为null, 如不是则一步一步往下找
      let current = this.head
      while(current.next) {
        current = current.next
      }
      //直到为null,则指向最新的节点
      current.next = node
    }
    this.length++ //添加完记得长度加1
  }
  // 在链表的特定位置中插入一项
  insert(position, data) {
    const node = new SinglyLinkedList.Node(data)
    if (position < 0 || position > this.length)  throw new Error(`请输入正整数,不能大于${this.length}`)
    let currentItem = this.head
    //如果向下标为0的位置插入
    if (position === 0) {
      this.head = node
      node.next = currentItem
    } else { 
      let currentIndex = 0 //记录下标
      let preItem = null  //记录当前目标的上一目标
      while(currentIndex++ < position) { //循环找到对应位置跳出循环
        preItem = currentItem
        currentItem = currentItem.next
      }
      preItem.next = node //改变指针
      node.next = currentItem
    }
    this.length++
  }
  //获取对应位置的元素
  get(position) {
    if (position < 0 || position >= this.length) throw new Error(`请输入小于${this.length}正整数`)
    if (position === 0) return this.head
    else {
      let currentIndex = 0
      let currentItem = this.head
      //如果当前下标 小于 传入的位置, 则继续向下寻找
      while(currentIndex++ < position) {
        currentItem = currentItem.next
      }
      // 跳出循环,表示已经找到目标
      return currentItem
    }
    
  }
  indexOf(element) { //通过元素找下标, 没有返回-1
    if (this.isEmpty()) return -1 //如果当前链表为空, 直接反回-1
    let index = 0
    let current = this.head
    while(current) { //从下标为0的位置开始找
      if (current.data === element) return index // 找到后返回下标
      // 未找到就继续向下寻找
      current = current.next 
      index += 1
    }
    // 如果跳出循环说明没有此目标, 返回-1
    return -1
    
  }
  update(position, element) {
    // if (position < 0 || position >= this.length) throw new Error(`失败,请输入小于${this.length}的正整数`)
    // let currentItem = this.head //获取第一个元素
    // let index = 0  //获取当前下标
    // while(index++ < position) { //如果当前下标 小于 传入的位置, 则继续向下寻找
    //   currentItem = currentItem.next
    // }
    // //跳出循环表示找到对应位置, 赋值即可
    // currentItem.data = element
    const currentItem = this.get(position)
    console.log(currentItem, 'currentItem');
    if (currentItem) {
      currentItem.data = element
    }
  }
  // 根据指定位置删除元素, 并返回删除的这个元素
  removeAt(position) {
    if(position < 0 || position >= this.length) throw new Error(`失败, 请输入小于${this.length}的正整数`)
    let currentItem = this.head
    //如果删除的是第一个元素
    if (position === 0) {
      this.head = currentItem.next
    } else {
      let currentIndex = 0
      let preItem = null
      //每次遍历分别记录上一个元素和下一个元素
      while(currentIndex++ < position) {
        preItem = currentItem
        currentItem = currentItem.next
      }
      // 找到目标位置,修改目标位置上一个元素的指针指向目标位置的下一个元素, 函数执行完毕,目标位置不在有指针指向,会被垃圾回收掉
      preItem.next = currentItem.next 
    }
    this.length -= 1 //长度减一
    return currentItem //返回被删除的目标元素
  }
  // 根据元素内容删除,返回删除项的下标
  remove(element) {
    if (this.isEmpty()) throw new Error('失败,当前链表为空')
    let index = 0
    let currentItem = this.head
    let preItem = null
    while(currentItem) {
      // 找到元素后进行情况判断
      if (currentItem.data === element) {
        if (this.length === 1) { // 情况1: 链表长度为1
          this.head = null
        } else if (index === 0) { // 情况2: 要删除的是下标为0的元素项
          this.head = this.head.next
        } else {  // 情况3: 要删除的元素项是下标为1开始的, 或是最后一个
          preItem.next = currentItem.next
        }
        this.length -= 1
        return index
      }
      preItem = currentItem
      currentItem = currentItem.next
      index += 1
    }
    // 跳出循环表示未找到,返回undefined
    return undefined    
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
  toString() {
    if (this.isEmpty()) return '当前链表为空' 
    let current = this.head
    let result = ''
    while(current) {
      result += current.data + ' ' 
      current = current.next
    }
    return result
  }
  
}
SinglyLinkedList.Node = class {
  constructor(data) {
    this.data = data
    this.next = null
  }
}