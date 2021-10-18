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
    return total;
  }

  return arr.reduce(getSum, 0);
};


// ----------------------Object------------------------------------------

//    1

const checkValues = (obj, value) => {
    // Solution code here...
  
    if (obj.age == value) {
      return true;
    } else return false;
  };
  
  //      2
  
  const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
    // Solution code here...
    return Object.keys(obj);
  };
  
  //   3
  const a = {
    GraceHopper: "222-303-5938",
    AdaLovelace: "222-349-9842",
    AlanTuring: "222-853-5933",
  }
  
  const updateNumbers = (obj) => {
    // Solution code here...
     let x= Object.entries(obj);
     let y;
     for (let index = 0; index < x.length; index++) {
         y += x[index] + ',' ;
         
     }
      return y;
  };
  
  //  4
  
  const PassedOrFailed = function (studentGrades) {
    // TODO: Your code here
    if (
      studentGrades.math.grade >= 50 &&
      studentGrades.english.grade >= 50 &&
      studentGrades.art.grade >= 50
    ) {
      return "The student have passed";
    } else return "The student have failed";
  };
  
  const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 },
  };
  
  const studentTwo = {
    math: { grade: 49, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 },
  };
  
  //  5
  
  const totalCharacters = (arr) => {
      // Solution code here...
    //  
      let x = arr.join()  ;
      
      return x.length-1;
    };
    
    
    