let input = [
  {
    id: 1,
    val: "学校",
    parentId: null,
  },
  {
    id: 2,
    val: "班级1",
    parentId: 1,
  },
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
    id: 4,
    val: "学生1",
    parentId: 2,
  },
  {
    id: 5,
    val: "学生2",
    parentId: 3,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
];

const buildTree = (arr, parentId, childrenArray) => {
  arr.forEach(item => {
    if (item.parentId === parentId) {
      item.children = []
      buildTree(arr, item.id, item.children)
      childrenArray.push(item)
    }
  })
}

const arrayToTree = (arr, parentId) => {
  const array = []
  buildTree(arr, parentId, array)
  return array.length ? (array.length === 1 ? array[0] : array) : {}
}

const obj = arrayToTree(input, null)
console.info(JSON.stringify(obj))

