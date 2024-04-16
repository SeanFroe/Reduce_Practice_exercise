// REDUCE PRACTICE EXERCISE

// extractValue() Function

const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}
console.log(extractValue(arr, "name")); // ['Elie', 'Tim', 'Matt', 'Colt']

// vowelCount() FUNCTION

function vowelCount(str) {
  const vowels = "aeiou";

  return str.split("").reduce(function (acc, next) {
    let lowercased = next.toLowerCase();
    if (vowels.indexOf(lowercased) !== -1) {
      if (acc[lowercased]) {
        acc[lowercased]++;
      } else {
        acc[lowercased] = 1;
      }
    }
    return acc;
  }, {});
}

console.log(vowelCount("Elie")); // {e:2,i:1};
console.log(vowelCount("Tim")); // {i:1};
console.log(vowelCount("Matt")); // {a:1})
console.log(vowelCount("hmmm")); // {};
console.log(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// addKeyAndValue() FUNCTION

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

console.log(addKeyAndValue(arr, "title", "Instructor"));

// partition() FUNCTION

function partition(arr, callback) {
  return arr.reduce(
    function (acc, next) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}

function isEven(val) {
  return val % 2 === 0;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(partition(num, isEven)); // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

const names = ["Elie", "Colt", "Tim", "Matt"];

console.log(partition(names, isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]
