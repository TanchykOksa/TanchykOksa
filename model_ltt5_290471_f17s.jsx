const sum = (a, b) => a + b;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const getRandomSubset = (array, size) => array.slice(0, size);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
kiwi


const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const filterEvenNumbers = numbers => numbers.filter(isEven);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const reverseWords = str => str.split(" ").reverse().join(" ");
const findLargestNumber = numbers => Math.max(...numbers);
class MyClass { constructor() { this.property = getRandomString(); } }
apple

const findLargestNumber = numbers => Math.max(...numbers);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true - grape
const reverseWords = str => str.split(" ").reverse().join(" ");

banana / true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
true - 97
const getRandomIndex = array => Math.floor(Math.random() * array.length);
apple

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
let result = performOperation(getRandomNumber(), getRandomNumber());

65 + false

const fetchData = async url => { const response = await fetch(url); return response.json(); }
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findSmallestNumber = numbers => Math.min(...numbers);
91,15,61,65,34,27,81,37,68,18,29,35,4,83,40,21,51,19,26,76,78,94,14,38,83,15,66,5,74,6,92,57,15,23 / false

const multiply = (a, b) => a * b;
const formatDate = date => new Date(date).toLocaleDateString();
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const randomNumber = getRandomNumber();
banana

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
false * apple
const sum = (a, b) => a + b;
const greet = name => `Hello, ${name}!`;

true - false

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
grape / grape
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const randomNumber = getRandomNumber();

apple


const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
8 - grape
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
57 - banana

const isEven = num => num % 2 === 0;

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi

const greet = name => `Hello, ${name}!`;
52 - 0,16,10,69,1,2,72,58,52,1,3,35,68,46,50,23,88,79,82,90

const greet = name => `Hello, ${name}!`;
orange

const capitalizeString = str => str.toUpperCase();
