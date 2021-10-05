"use scrpit";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 75,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-01-24",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-01-24",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Logan", 100, "05/42/20032");

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    item.name === name;
  });
  array.splice(index, 1);
};

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const findSubmissionByName = (array, name) => {
  return array.find((index) => {
    return index.name === name;
  });
};

const findLowestScore = (array) => {
  let currentlow = array[0];
  array.forEach((item) => {
    if (item.score < currentlow.score) {
      currentlow = item;
    }
  });
  return currentlow;
};

const findAverageScore = (array) => {
  return (
    array.reduce((acc, cv) => {
      return acc + cv.score;
    }, 0) / array.length
  );
};

const filterPassing = (array) => {
  return array.filter((submissions) => {
    return submissions.passed === true;
  });
};
console.log(filterPassing);

const filter90AndAbove = (array) => {
  return array.filter((submissions) => {
    return submissions.score >= 90;
  });
};
