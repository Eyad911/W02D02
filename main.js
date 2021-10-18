//      1

const addOne = (arr) => {
  // Solution code here...
  let newArr = [];
  function incrone(item, i) {
    newArr.push(item + 1);
  }

  arr.forEach(incrone);
  return newArr;
};

//     2

const addExclamation = (arr) => {
  // Solution code here...
  let newArr = [];
  function addsymb(item, i) {
    newArr.push(item + "!");
  }

  arr.forEach(addsymb);
  return newArr;
};

//    3

const addOneByMap = (arr) => {
  // Solution code here...

  let newArr = [];
  function add1map(item, i) {
    newArr.push(item + 1);
  }

  arr.map(add1map);
  return newArr;
};

//   4

const addQuestion = (arr) => {
  // Solution code here...
  let newArr = [];
  function addQusMap(item, i) {
    newArr.push(item + "?");
  }

  arr.map(addQusMap);
  return newArr;
};

//   5

const forLoopTwoToThe = (arr) => {
  // Solution code here...
  function towToThe(item, i) {
    return Math.pow(2, item);
  }

  return arr.map(towToThe);
};

//      6

const typeNum = (arr) => {
  // Solution code here...
  function checkNum(item, i) {
    return typeof item === "number";
  }

  return arr.filter(checkNum);
};

//    7

const containsAnd = (arr) => {
  // Solution code here...
  function checkStr(item, i) {
    return typeof item === "string" && item.includes("and");
  }

  return arr.filter(checkStr);
};

//    8

const oddValues = (arr) => {
  // Solution code here...
  function checkOdd(item, i) {
    let x = item % 2;
    if (x != 0) {
      return x;
    }
  }

  return arr.filter(checkOdd);
};

//  9

const addValues = (arr) => {
  // Solution code here...
  function getSum(total, num) {
    return total + num;
  }

  return arr.reduce(getSum, 0);
};

// 10

const countNumberOfElements = (arr) => {
  // Solution code here...
  function getSum(total, num) {
      total++;
    return  total;
  }

  return arr.reduce(getSum, 0);
};
