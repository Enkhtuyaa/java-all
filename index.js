console.log("hello world");
/* ============================================================
   LESSON 1 â€” VARIABLES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools allowed: const / let, reassignment, + - * / , and
   joining strings with + . Nothing else yet.

   How to use:
   - Write your function where you see  // your code here
   - The test call sits below it, COMMENTED OUT. Delete the
     leading "// " to switch it on, then run:  node 1-variables.js
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value
     you must RETURN. All 3 match = correct.

   Every function has a DIFFERENT name, so all answers live here.
   ============================================================ */

// ----- 1. Running total -----
// Write `runningTotal()` (no input). Start let sum = 0, add 8, add 8,
// subtract 1, then RETURN sum.
// your code here
// let = runningTotal()
// let sum = 0;
// console.log(runningTotal());
// TEST 1:  runningTotal()      ->  15
// TEST 2:  runningTotal() + 5  ->  20
// TEST 3:  runningTotal() * 2  ->  30

// ----- 2. Swap into a label -----
// Write `swapLabel(a, b)` that RETURNS b + "-" + a (the two joined,
// swapped, with a dash between).
// your code here
// let = swapLabel(a,b)
//     return b + "-" + a

// console.log(swapLabel("left", "right"));
// TEST 1:  swapLabel("left", "right")  ->  "right-left"
// TEST 2:  swapLabel("1", "2")         ->  "2-1"
// TEST 3:  swapLabel("a", "b")         ->  "b-a"

// ----- 3. Triple then bump -----
// Write `tripleBump(n)`. Set let x = n * 3, then add 1 to x, then RETURN x.
// your code here

// console.log(tripleBump(4));
// TEST 1:  tripleBump(4)   ->  13
// TEST 2:  tripleBump(0)   ->  1
// TEST 3:  tripleBump(10)  ->  31

// ----- 4. Full name -----
// Write `fullName(first, last)` that RETURNS the two joined with one space.
// your code here

// console.log(fullName("Ada", "Lovelace"));
// TEST 1:  fullName("Ada", "Lovelace")  ->  "Ada Lovelace"
// TEST 2:  fullName("Sam", "Lee")       ->  "Sam Lee"
// TEST 3:  fullName("A", "B")           ->  "A B"

// ----- 5. Price with tax -----
// Write `withTax(price)`. Use const TAX = 0.1, then RETURN price plus
// price * TAX.
// your code here

// console.log(withTax(100));
// TEST 1:  withTax(100)  ->  110
// TEST 2:  withTax(50)   ->  55
// TEST 3:  withTax(0)    ->  0

// ----- 6. Count up by one, three times -----
// Write `countUp3(start)`. Set let c = start, then c++ three times, RETURN c.
// your code here

// console.log(countUp3(7));
// TEST 1:  countUp3(7)   ->  10
// TEST 2:  countUp3(0)   ->  3
// TEST 3:  countUp3(-3)  ->  0

// ----- 7. Average of two -----
// Write `avgTwo(a, b)` that RETURNS the average of a and b.
// your code here

// console.log(avgTwo(4, 8));
// TEST 1:  avgTwo(4, 8)    ->  6
// TEST 2:  avgTwo(10, 20)  ->  15
// TEST 3:  avgTwo(3, 3)    ->  3

// ----- 8. Rectangle area then double -----
// Write `doubleArea(w, h)`. Set let area = w * h, then reassign
// area = area * 2, RETURN area.
// your code here

// console.log(doubleArea(3, 4));
// TEST 1:  doubleArea(3, 4)  ->  24
// TEST 2:  doubleArea(5, 2)  ->  20
// TEST 3:  doubleArea(1, 1)  ->  2
/* ============================================================
   LESSON 2 â€” DATA TYPES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: typeof, Number(), String(), Boolean(), + - * / ,
   and the types number / string / boolean / undefined.

   Run:  node 2-data-types.js
   Switch on a test by deleting its leading "// ".
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. What type is it? -----
// Write `whatType(value)` that RETURNS the typeof string of value.
// your code here
function whatType(value) {
  return typeof value;
}
console.log(whatType(42));
console.log(whatType("hi"));
console.log(whatType(true));
// TEST 1:  whatType(42)      ->  "number"
// TEST 2:  whatType("hi")    ->  "string"
// TEST 3:  whatType(true)    ->  "boolean"

// ----- 2. String to number -----
// Write `toNumber(text)` that RETURNS text turned into a real number.
// your code here
function toNumber(text) {
  return text;
}
console.log(toNumber("42"));
console.log(toNumber("7") + 1);
console.log(toNumber("100") * 2);
// TEST 1:  toNumber("42")        ->  42
// TEST 2:  toNumber("7") + 1     ->  8
// TEST 3:  toNumber("100") * 2   ->  200

// ----- 3. Number to string -----
// Write `toText(n)` that RETURNS n turned into a string.
// your code here
function toText(n) {
  return String(n);
}
console.log(toText(42));
console.log(typeof toText(5));
console.log(toText(9) + "!");
// TEST 1:  toText(42)            ->  "42"
// TEST 2:  typeof toText(5)      ->  "string"
// TEST 3:  toText(9) + "!"       ->  "9!"

// ----- 4. The string-plus-number trap -----
// Write `mix(a, b)` where a is a number and b is a string. RETURN a + b.
// (Find out what JS does when you add a number to a string.)
// your code here
function mix(a, b) {
  return a + b;
}
console.log(mix(5, "5"));
console.log(mix(1, "0"));
console.log(typeof mix(2, "x"));
// TEST 1:  mix(5, "5")       ->  "55"
// TEST 2:  mix(1, "0")       ->  "10"
// TEST 3:  typeof mix(2, "x") ->  "string"

// ----- 5. Is it a real number? -----
// Write `isRealNumber(text)` that RETURNS true if Number(text) is a valid
// number, false if it is NaN.
// your code here
function isRealNumber(text) {
  if (Number(text)) {
    return true;
  } else {
    return false;
  }
}
console.log(isRealNumber("42"));
console.log(isRealNumber("hello"));
console.log(isRealNumber("3.14"));
// TEST 1:  isRealNumber("42")    ->  true
// TEST 2:  isRealNumber("hello") ->  false
// TEST 3:  isRealNumber("3.14")  ->  true

// ----- 6. Force a boolean -----
// Write `asBoolean(value)` that RETURNS value turned into a true/false
// with Boolean(value).
// your code here
function asBoolean(value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}
console.log(asBoolean(0));
console.log(asBoolean(1));
console.log(asBoolean(""));
// TEST 1:  asBoolean(0)    ->  false
// TEST 2:  asBoolean(1)    ->  true
// TEST 3:  asBoolean("")   ->  false

// ----- 7. Undefined check -----
// Write `isMissing(value)` that RETURNS true when value is undefined.
// your code here
function isMissing(value) {
  if (value === undefined) {
    return true;
  } else {
    return false;
  }
}
console.log(isMissing(undefined));
console.log(isMissing(0));
console.log(isMissing("x"));
// TEST 1:  isMissing(undefined)  ->  true
// TEST 2:  isMissing(0)          ->  false
// TEST 3:  isMissing("x")        ->  false

// ----- 8. Round-trip a digit -----
// Write `firstDigitType(n)`. Turn n into a string, take its first
// character, RETURN the typeof that character.
// your code here
function firstDigitType(n) {
  return "string";
}
console.log(firstDigitType(42));
console.log(firstDigitType(7));
console.log(firstDigitType(900));
// TEST 1:  firstDigitType(42)   ->  "string"
// TEST 2:  firstDigitType(7)    ->  "string"
// TEST 3:  firstDigitType(900)  ->  "string"
/* ============================================================
   LESSON 3 â€” OPERATORS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: < > <= >= === !== , && || ! , % , + - * / .
   Every answer RETURNS a value (often true/false). No if needed.

   Run:  node 3-operators.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
// ----- 1. Is it bigger? -----
// Write `isBigger(a, b)` that RETURNS true when a is greater than b.
// your code here
function isBigger(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(isBigger(10, 3));
console.log(isBigger(3, 10));
console.log(isBigger(5, 5));
// TEST 1:  isBigger(10, 3)  ->  true
// TEST 2:  isBigger(3, 10)  ->  false
// TEST 3:  isBigger(5, 5)   ->  false

// ----- 2. Exactly equal -----
// Write `sameValueAndType(a, b)` that RETURNS true only when a === b.
// your code here
function sameValueAndType(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(sameValueAndType(5, 5));
console.log(sameValueAndType(5, "5"));
console.log(sameValueAndType("a", "a"));
// TEST 1:  sameValueAndType(5, 5)     ->  true
// TEST 2:  sameValueAndType(5, "5")   ->  false
// TEST 3:  sameValueAndType("a", "a") ->  true

// ----- 3. In working hours -----
// Write `isWorkHour(hour)` that RETURNS true when hour is >= 9 AND < 17.
// your code here
function isWorkHour(hour) {
  if (hour >= 9 && hour < 17) {
    return true;
  } else {
    return false;
  }
}
console.log(isWorkHour(10));
console.log(isWorkHour(17));
console.log(isWorkHour(8));
// TEST 1:  isWorkHour(10)  ->  true
// TEST 2:  isWorkHour(17)  ->  false
// TEST 3:  isWorkHour(8)   ->  false

// ----- 4. Weekend day -----
// Write `isWeekend(day)` that RETURNS true when day is "Sat" OR "Sun".
// your code here
function isWeekend(day) {
  if (day === "Sat" || day === "Sun") {
    return true;
  } else {
    return false;
  }
}
console.log(isWeekend("Sat"));
console.log(isWeekend("Sun"));
console.log(isWeekend("Mon"));
// TEST 1:  isWeekend("Sat")  ->  true
// TEST 2:  isWeekend("Sun")  ->  true
// TEST 3:  isWeekend("Mon")  ->  false

// ----- 5. Flip it -----
// Write `flip(value)` that RETURNS the NOT of value (the opposite boolean).
// your code here
function flip(value) {
  if (value) {
    return false;
  } else {
    return true;
  }
}
console.log(flip(true));
console.log(flip(false));
console.log(flip(0));
// TEST 1:  flip(true)   ->  false
// TEST 2:  flip(false)  ->  true
// TEST 3:  flip(0)      ->  true

// ----- 6. Even number -----
// Write `isEven(n)` that RETURNS true when n divides evenly by 2 (use %).
// your code here
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(8));
console.log(isEven(7));
console.log(isEven(0));
// TEST 1:  isEven(8)   ->  true
// TEST 2:  isEven(7)   ->  false
// TEST 3:  isEven(0)   ->  true

// ----- 7. In range (inclusive) -----
// Write `inRange(n)` that RETURNS true when n is between 50 and 100 inclusive.
// your code here
function inRange(n) {
  if (n >= 50 && n < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(inRange(75));
console.log(inRange(50));
console.log(inRange(101));
// TEST 1:  inRange(75)   ->  true
// TEST 2:  inRange(50)   ->  true
// TEST 3:  inRange(101)  ->  false

// ----- 8. Default fallback -----
// Write `displayName(nick)` that RETURNS nick, OR "Guest" when nick is empty.
// (Use the || operator.)
// your code here
function displayName(nick) {
  if (nick === "" || nick === "Guest") {
    return "Guest";
  } else {
    return nick;
  }
}
console.log(displayName(""));
console.log(displayName("Sam"));
console.log(displayName("x"));
// TEST 1:  displayName("")     ->  "Guest"
// TEST 2:  displayName("Sam")  ->  "Sam"
// TEST 3:  displayName("x")    ->  "x"

// ----- 9. Leap-ish check -----
// Write `divisibleByBoth(n)` that RETURNS true when n divides evenly by
// BOTH 3 and 5.
// your code here
function divisibleByBoth(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisibleByBoth(15));
console.log(divisibleByBoth(9));
console.log(divisibleByBoth(30));
// TEST 1:  divisibleByBoth(15)  ->  true
// TEST 2:  divisibleByBoth(9)   ->  false
// TEST 3:  divisibleByBoth(30)  ->  true

// ----- 10. Access granted -----
// Write `canEnter(pinOk, isAdmin)` that RETURNS true when pinOk is true
// OR isAdmin is true.
// your code here
function canEnter(pinOk, isAdmin) {
  if (pinOk == true || isAdmin === true) {
    return true;
  } else {
    return false;
  }
}
console.log(canEnter(false, true));
console.log(canEnter(true, false));
console.log(canEnter(false, false));
// TEST 1:  canEnter(false, true)   ->  true
// TEST 2:  canEnter(true, false)   ->  true
// TEST 3:  canEnter(false, false)  ->  false
/* ============================================================
   LESSON 4 â€” IF STATEMENTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: if / else if / else, plus everything before.
   Each function RETURNS a value chosen by a decision.

   Run:  node 4-if-statements.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Pass or fail -----
// Write `passFail(score)` that RETURNS "Pass" when score >= 60, else "Fail".
// your code here
function passFail(score) {
  if (score >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(passFail(72));
console.log(passFail(60));
console.log(passFail(40));
// TEST 1:  passFail(72)  ->  "Pass"
// TEST 2:  passFail(60)  ->  "Pass"
// TEST 3:  passFail(40)  ->  "Fail"

// ----- 2. Sign of a number -----
// Write `signOf(n)` that RETURNS "positive", "negative", or "zero".
// your code here
function signOf(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(signOf(-4));
console.log(signOf(0));
console.log(signOf(9));
// TEST 1:  signOf(-4)  ->  "negative"
// TEST 2:  signOf(0)   ->  "zero"
// TEST 3:  signOf(9)   ->  "positive"

// ----- 3. Letter grade -----
// Write `grade(score)`: 90+ "A", 80-89 "B", 70-79 "C", below 70 "F".
// your code here
function grade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80 && score < 89) {
    return "B";
  } else if (score > 70 && score < 79) {
    return "C";
  } else {
    return "F";
  }
}
console.log(grade(95));
console.log(grade(85));
console.log(grade(50));
// TEST 1:  grade(95)  ->  "A"
// TEST 2:  grade(85)  ->  "B"
// TEST 3:  grade(50)  ->  "F"

// ----- 4. Bigger of two -----
// Write `bigger(a, b)` that RETURNS the larger, or "equal" when they match.
// your code here
function bigger(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "equal";
  }
}
console.log(bigger(14, 9));
console.log(bigger(3, 8));
console.log(bigger(5, 5));
// TEST 1:  bigger(14, 9)  ->  14
// TEST 2:  bigger(3, 8)   ->  8
// TEST 3:  bigger(5, 5)   ->  "equal"

// ----- 5. Ticket price -----
// Write `ticketPrice(age)`: under 12 -> 5, 12 to 64 -> 12, 65+ -> 8.
// your code here
function ticketPrice(age) {
  if (age < 12) {
    return 5;
  } else if (age > 12 && age < 64) {
    return 12;
  } else {
    return 8;
  }
}
console.log(ticketPrice(8));
console.log(ticketPrice(30));
console.log(ticketPrice(70));
// TEST 1:  ticketPrice(8)   ->  5
// TEST 2:  ticketPrice(30)  ->  12
// TEST 3:  ticketPrice(70)  ->  8

// ----- 6. Traffic light -----
// Write `light(color)`: "green" -> "Go", "yellow" -> "Slow", "red" -> "Stop",
// anything else -> "Invalid".
// your code here
function light(color) {
  if (color === "green") {
    return "Go";
  } else if (color === "yellow") {
    return "Slow";
  } else if (color === "red") {
    return "stop";
  } else {
    return "Invalid";
  }
}
console.log(light("green"));
console.log(light("red"));
console.log(light("purple"));
// TEST 1:  light("green")   ->  "Go"
// TEST 2:  light("red")     ->  "Stop"
// TEST 3:  light("purple")  ->  "Invalid"

// ----- 7. FizzBuzz of one number -----
// Write `fizzbuzz(n)`: divisible by 3 and 5 -> "FizzBuzz", by 3 -> "Fizz",
// by 5 -> "Buzz", else the number n itself.
// your code here
function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}
console.log(fizzbuzz(15));
console.log(fizzbuzz(9));
console.log(fizzbuzz(7));
// TEST 1:  fizzbuzz(15)  ->  "FizzBuzz"
// TEST 2:  fizzbuzz(9)   ->  "Fizz"
// TEST 3:  fizzbuzz(7)   ->  7

// ----- 8. Temperature advice -----
// Write `clothes(temp)`: above 28 -> "Shorts", 15 to 28 -> "Jacket",
// below 15 -> "Coat".
// your code here
function clothes(temp) {
  if (temp > 28) {
    return "Shorts";
  } else if (temp > 15 && temp < 28) {
    return "jacket";
  } else {
    return "coat";
  }
}
console.log(clothes(30));
console.log(clothes(20));
console.log(clothes(5));
// TEST 1:  clothes(30)  ->  "Shorts"
// TEST 2:  clothes(20)  ->  "Jacket"
// TEST 3:  clothes(5)   ->  "Coat"

// ----- 9. Login result -----
// Write `login(user, pass)` that RETURNS "Welcome" when user is "admin"
// AND pass is "1234", otherwise "Denied".
// your code here
function login(user, pass) {
  if (user === "admin" && pass === "1234") {
    return "Welcome";
  } else {
    return "Denied";
  }
}
console.log(login("admin", "1234"));
console.log(login("admin", "0000"));
console.log(login("guest", "1234"));
// TEST 1:  login("admin", "1234")  ->  "Welcome"
// TEST 2:  login("admin", "0000")  ->  "Denied"
// TEST 3:  login("guest", "1234")  ->  "Denied"

// ----- 10. Absolute value -----
// Write `absValue(n)` that RETURNS n when n >= 0, otherwise -n.
// your code here
function absValue(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
}
console.log(absValue(-7));
console.log(absValue(7));
console.log(absValue(0));
// TEST 1:  absValue(-7)  ->  7
// TEST 2:  absValue(7)   ->  7
// TEST 3:  absValue(0)   ->  0
/* ============================================================
   LESSON 5 â€” STRINGS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: .length, [i], .toUpperCase/.toLowerCase, .includes,
   .indexOf, .slice, .trim, + , String()/Number()/isNaN, if.
   NO loops, NO functions-inside beyond these. Each RETURNS a value.

   Run:  node 5-strings.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Shout it -----
// Write `shout(text)` that RETURNS text in ALL CAPS.
// your code here
function shout(text) {
  return text.toUpperCase();
}
console.log(shout("hi"));
console.log(shout("Code"));
console.log(shout("a"));
// TEST 1:  shout("hi")     ->  "HI"
// TEST 2:  shout("Code")   ->  "CODE"
// TEST 3:  shout("a")      ->  "A"

// ----- 2. First letter -----
// Write `firstLetter(word)` that RETURNS the character at index 0.
// your code here
function firstLetter(word) {
  return word[0];
}
console.log(firstLetter("hello"));
console.log(firstLetter("Zebra"));
console.log(firstLetter("x"));
// TEST 1:  firstLetter("hello")  ->  "h"
// TEST 2:  firstLetter("Zebra")  ->  "Z"
// TEST 3:  firstLetter("x")      ->  "x"

// ----- 3. Last letter -----
// Write `lastLetter(word)` that RETURNS the last character of any length word.
// your code here
function lastLetter(word) {
  //  return word.slice(-1)
  return word[word.length - 1];
}
console.log(lastLetter("hello"));
console.log(lastLetter("cat"));
console.log(lastLetter("z"));
// TEST 1:  lastLetter("hello")  ->  "o"
// TEST 2:  lastLetter("cat")    ->  "t"
// TEST 3:  lastLetter("z")      ->  "z"

// ----- 4. Initials -----
// Write `initials(first, last)` that RETURNS the two first letters,
// uppercased, joined with a dot: "M.J".
// your code here
function initials(first, last) {
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
console.log(initials("maria", "jones"));
// TEST 1:  initials("maria", "jones")  ->  "M.J"
// TEST 2:  initials("sam", "lee")      ->  "S.L"
// TEST 3:  initials("a", "b")          ->  "A.B"

// ----- 5. Capitalize -----
// Write `capitalize(word)` that RETURNS the word with the first letter
// uppercased and the rest unchanged.
// your code here
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("maria"));
console.log(capitalize("code"));
console.log(capitalize("x"));
// TEST 1:  capitalize("maria")  ->  "Maria"
// TEST 2:  capitalize("code")   ->  "Code"
// TEST 3:  capitalize("x")      ->  "X"

// ----- 6. Looks like an email -----
// Write `isEmail(text)` that RETURNS true when text includes "@", else false.
// your code here
function isEmail(text) {
  if (text.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmail("sam@mail.com"));
console.log(isEmail("sam.com"));
console.log(isEmail("@"));
// TEST 1:  isEmail("sam@mail.com")  ->  true
// TEST 2:  isEmail("sam.com")       ->  false
// TEST 3:  isEmail("@")             ->  true

// ----- 7. Valid username length -----
// Write `validUsername(name)` that RETURNS "Valid" when length is >= 3
// AND <= 15, otherwise "Invalid".
// your code here
function validUsername(name) {
  if (name.length >= 3 && name.length <= 15) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
console.log(validUsername("jordan"));
console.log(validUsername("jo"));
console.log(validUsername("a"));
// TEST 1:  validUsername("jordan")  ->  "Valid"
// TEST 2:  validUsername("jo")      ->  "Invalid"
// TEST 3:  validUsername("a")       ->  "Invalid"

// ----- 8. Area code -----
// Write `areaCode(phone)` (10-char string) that RETURNS the first 3 chars.
// your code here
function areaCode(phone) {
  return phone.slice(0, 3);
}
console.log(areaCode("5551234567"));
console.log(areaCode("2129998888"));
console.log(areaCode("0000000000"));
// TEST 1:  areaCode("5551234567")  ->  "555"
// TEST 2:  areaCode("2129998888")  ->  "212"
// TEST 3:  areaCode("0000000000")  ->  "000"

// ----- 9. Same word ignoring case -----
// Write `sameWord(a, b)` that RETURNS true when a and b match ignoring case.
// your code here
function sameWord(a, b) {
  if (a.toLowerCase() === b.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(sameWord("Hello", "hello"));
console.log(sameWord("cat", "dog"));
console.log(sameWord("ABC", "abc"));
// TEST 1:  sameWord("Hello", "hello")  ->  true
// TEST 2:  sameWord("cat", "dog")      ->  false
// TEST 3:  sameWord("ABC", "abc")      ->  true

// ----- 10. Clean and measure -----
// Write `cleanLength(raw)` that trims the spaces off both ends and RETURNS
// the length of what is left.
// your code here
function cleanLength(raw) {
  return raw.trim().length;
}
console.log(cleanLength("  hi  "));
console.log(cleanLength("  hello   "));
console.log(cleanLength("x"));
// TEST 1:  cleanLength("  hi  ")      ->  2
// TEST 2:  cleanLength("  hello   ")  ->  5
// TEST 3:  cleanLength("x")           ->  1

// ----- 11. Pad the clock -----
// Write `padClock(minute)` (0-59 number). RETURN a 2-char string, adding a
// leading "0" when it is a single digit: 5 -> "05", 42 -> "42".
// your code here
function padClock(minute) {
  if (minute < 10) {
    return "0" + minute;
  } else {
    return "" + minute;
  }
}
console.log(padClock(5));
console.log(padClock(42));
console.log(padClock(0));
// TEST 1:  padClock(5)   ->  "05"
// TEST 2:  padClock(42)  ->  "42"
// TEST 3:  padClock(0)   ->  "00"

// ----- 12. Cents to price tag -----
// Write `priceTag(cents)` (3+ digit whole number). RETURN "$D.CC" where CC
// is the last 2 digits and D is the rest: 150 -> "$1.50", 905 -> "$9.05".
// your code here
// function priceTag(cents){
//   return cents + "" + ce
// }
// console.log(priceTag(150));
// TEST 1:  priceTag(150)  ->  "$1.50"
// TEST 2:  priceTag(905)  ->  "$9.05"
// TEST 3:  priceTag(1299) ->  "$12.99"
/* ============================================================
   LESSON 6 â€” LOOPS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: for / while, % , Math.floor, strings, if. NO arrays.
   Each function RETURNS its answer (a number, string, or boolean).

   Run:  node 6-loops.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Sum to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n.
// your code here
function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sumTo(5));
console.log(sumTo(1));
console.log(sumTo(10));
// TEST 1:  sumTo(5)    ->  15
// TEST 2:  sumTo(1)    ->  1
// TEST 3:  sumTo(10)   ->  55

// ----- 2. Count multiples of 4 -----
// Write `countFours(max)` that RETURNS how many numbers 1..max divide by 4.
// your code here
function countFours(max) {
  let count = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 4 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countFours(20));
console.log(countFours(7));
console.log(countFours(3));
// TEST 1:  countFours(20)  ->  5
// TEST 2:  countFours(7)   ->  1
// TEST 3:  countFours(3)   ->  0

// ----- 3. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n.
// your code here
function factorial(n) {
  let total1 = 1;
  for (let i = 1; i <= n; i++) {
    total1 *= i;
  }
  return total1;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(1)  ->  1

// ----- 4. Power without ** -----
// Write `power(base, exp)` that RETURNS base multiplied by itself exp times,
// using a loop. (power(2,3) = 8.) exp is 0 or more; exp 0 -> 1.
// your code here
function power(base, exp) {
  let total2 = 1;
  for (let i = 0; i < exp; i++) {
    total2 = total2 * base;
  }
  return total2;
}
console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(7, 0));
// TEST 1:  power(2, 3)   ->  8
// TEST 2:  power(5, 2)   ->  25
// TEST 3:  power(7, 0)   ->  1

// ----- 5. Count the digits -----
// Write `digitCount(n)` (n >= 0) that RETURNS how many digits n has,
// using Math.floor(n / 10) in a loop.
// your code here
function digitCount(n) {
  if (n === 0) {
    return 1;
  }
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(digitCount(7384));
console.log(digitCount(50));
console.log(digitCount(0));
// TEST 1:  digitCount(7384)  ->  4
// TEST 2:  digitCount(50)    ->  2
// TEST 3:  digitCount(0)     ->  1

// ----- 6. Sum of digits -----
// Write `digitSum(n)` that RETURNS the sum of n's digits.
// your code here
function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(digitSum(1234));
console.log(digitSum(999));
console.log(digitSum(5));
// TEST 1:  digitSum(1234)  ->  10
// TEST 2:  digitSum(999)   ->  27
// TEST 3:  digitSum(5)     ->  5

// ----- 7. Count a letter -----
// Write `countLetter(text, letter)` that RETURNS how many times letter
// appears in text.
// your code here
function countLetter(text, letter) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("banana", "a"));
console.log(countLetter("hello", "l"));
console.log(countLetter("dog", "z"));
// TEST 1:  countLetter("banana", "a")  ->  3
// TEST 2:  countLetter("hello", "l")   ->  2
// TEST 3:  countLetter("dog", "z")     ->  0

// ----- 8. Reverse a string -----
// Write `reverse(text)` that RETURNS text backwards, building it in a loop.
// your code here
function reverse(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;
  }
  return result;
}
console.log(reverse("code"));
console.log(reverse("abc"));
console.log(reverse("x"));
// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

// ----- 9. Count vowels -----
// Write `countVowels(text)` that RETURNS how many vowels (a,e,i,o,u) are in text.
// your code here
function countVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));
console.log(countVowels("aeiou"));
console.log(countVowels("xyz"));
// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 10. Is it prime? -----
// Write `isPrime(n)` (n >= 2) that RETURNS true when n has no divisor
// between 2 and n-1.
// your code here
function isPrime(n) {
  let isPrime = true;
  for (let i = 2; i < n - 1; i++) {
    if (i % n === 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(2));
// TEST 1:  isPrime(13)  ->  true
// TEST 2:  isPrime(15)  ->  false
// TEST 3:  isPrime(2)   ->  true

// ----- 11. Steps to zero -----
// Write `stepsToZero(n)`. While n > 0: if even, halve it; if odd, subtract 1.
// RETURN the number of steps to reach 0.
// your code here
// function stepsToZero(n){
// while(n>0){

//   return n
// }
// }
// console.log(stepsToZero(14));
// TEST 1:  stepsToZero(14)  ->  6
// TEST 2:  stepsToZero(8)   ->  4
// TEST 3:  stepsToZero(1)   ->  1

// ----- 12. Number palindrome -----
// Write `isNumPalindrome(n)` (n >= 0) that RETURNS true when n reads the same
// forwards and backwards. Build the reverse with a loop, then compare.
// your code here
function isNumPalindrome(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result = n + result;
    if (n === n) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isNumPalindrome(121));
console.log(isNumPalindrome(123));
console.log(isNumPalindrome(7));
// TEST 1:  isNumPalindrome(121)  ->  true
// TEST 2:  isNumPalindrome(123)  ->  false
// TEST 3:  isNumPalindrome(7)    ->  true
/* ============================================================
   LESSON 7 â€” FUNCTIONS: FRESH EXERCISES
   ------------------------------------------------------------
   Focus: parameters, return, default values, and CALLING one
   function from inside another (composition). Tools: everything
   from lessons 1-6. NO arrays.

   Run:  node 7-functions.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Add three -----
// Write `addThree(a, b, c)` that RETURNS the sum of all three.
// your code here
function addThree(a, b, c) {
  return a + b + c;
}
console.log(addThree(1, 2, 3));
console.log(addThree(10, 0, 5));
console.log(addThree(-1, 1, 0));
// TEST 1:  addThree(1, 2, 3)   ->  6
// TEST 2:  addThree(10, 0, 5)  ->  15
// TEST 3:  addThree(-1, 1, 0)  ->  0

// ----- 2. Greet with default -----
// Write `greet(name)` that RETURNS "Hello, " + name. If name is not given,
// default it to "friend". (Use a default parameter.)
// your code here
function greet(name) {
  if (name) {
    return "Hello ," + name;
  } else {
    return "Hello ," + "friend";
  }
}
console.log(greet("Sam"));
console.log(greet());
console.log(greet("Ada"));
// TEST 1:  greet("Sam")  ->  "Hello, Sam"
// TEST 2:  greet()       ->  "Hello, friend"
// TEST 3:  greet("Ada")  ->  "Hello, Ada"

// ----- 3. Max of two -----
// Write `maxTwo(a, b)` that RETURNS the larger of the two.
// your code here
function maxTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxTwo(3, 9));
console.log(maxTwo(10, 2));
console.log(maxTwo(5, 5));
// TEST 1:  maxTwo(3, 9)    ->  9
// TEST 2:  maxTwo(10, 2)   ->  10
// TEST 3:  maxTwo(5, 5)    ->  5

// ----- 4. Max of three (compose #3) -----
// Write `maxThree(a, b, c)` that RETURNS the largest, by CALLING maxTwo twice.
// your code here
function maxThree(a, b, c) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return c;
  }
}
console.log(maxThree(3, 9, 5));
console.log(maxThree(8, 2, 4));
console.log(maxThree(1, 1, 7));
// TEST 1:  maxThree(3, 9, 5)    ->  9
// TEST 2:  maxThree(8, 2, 4)    ->  8
// TEST 3:  maxThree(1, 1, 7)    ->  7

// ----- 5. Is even (helper) -----
// Write `even(n)` that RETURNS true when n is even.
// your code here
function even(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(even(4));
console.log(even(7));
console.log(even(0));
// TEST 1:  even(4)  ->  true
// TEST 2:  even(7)  ->  false
// TEST 3:  even(0)  ->  true

// ----- 6. Label parity (compose #5) -----
// Write `parityLabel(n)` that RETURNS "even" or "odd" by CALLING even(n).
// your code here
function parityLabel(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(parityLabel(7));
console.log(parityLabel(4));
console.log(parityLabel(0));
// TEST 1:  parityLabel(7)  ->  "odd"
// TEST 2:  parityLabel(4)  ->  "even"
// TEST 3:  parityLabel(0)  ->  "even"

// ----- 7. Rectangle area -----
// Write `area(w, h)` that RETURNS w * h.
// your code here
function area(w, h) {
  return w * h;
}
console.log(area(3, 4));
console.log(area(5, 5));
console.log(area(1, 9));
// TEST 1:  area(3, 4)  ->  12
// TEST 2:  area(5, 5)  ->  25
// TEST 3:  area(1, 9)  ->  9

// ----- 8. Total cost (compose #7) -----
// Write `tileCost(w, h, pricePerTile)` that RETURNS area(w, h) * pricePerTile.
// your code here
function tileCost(w, h, pricePerTile) {
  return area(w, h) * pricePerTile;
}
console.log(tileCost(2, 3, 5));
console.log(tileCost(4, 4, 2));
console.log(tileCost(1, 1, 10));
// TEST 1:  tileCost(2, 3, 5)   ->  30
// TEST 2:  tileCost(4, 4, 2)   ->  32
// TEST 3:  tileCost(1, 1, 10)  ->  10

// ----- 9. Clamp -----
// Write `clamp(n, low, high)` that RETURNS low if n < low, high if n > high,
// otherwise n.
// your code here
function clamp(n, low, high) {
  if (n < low) {
    return low;
  }
  if (n > high) {
    return high;
  } else {
    return n;
  }
}
console.log(clamp(15, 0, 10));
console.log(clamp(-3, 0, 10));
console.log(clamp(5, 0, 10));
// TEST 1:  clamp(15, 0, 10)  ->  10
// TEST 2:  clamp(-3, 0, 10)  ->  0
// TEST 3:  clamp(5, 0, 10)   ->  5

// ----- 10. Count down to string -----
// Write `countdown(n)` that RETURNS a string of n down to 1 joined by spaces,
// using a loop inside the function. countdown(3) -> "3 2 1".
// your code here
function countdown(n) {
  for (let i = 1; i < n; i--) {
    return i;
  }
}
console.log(countdown(3));
console.log(countdown(5));
console.log(countdown(1));
// TEST 1:  countdown(3)  ->  "3 2 1"
// TEST 2:  countdown(5)  ->  "5 4 3 2 1"
// TEST 3:  countdown(1)  ->  "1"
/* ============================================================
   LESSON 8 â€” OBJECTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: obj.key / obj[key], "key" in obj, delete, for..in,
   Object.keys / Object.values, { ...spread }. Plus everything before.

   Run:  node 8-objects.js
   Comparing objects: two objects are never === even when equal.
   To check in code, compare JSON.stringify(yours) to the expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Make a book -----
// Write `makeBook()` (no input) that RETURNS { title: "Dune", pages: 412 }.
// your code here
function makeBook(title, pages) {
  return {
    title: title,
    pages: pages,
  };
}
const obj = makeBook("Dune", 412, "object");
console.log(obj.title);
console.log(obj.pages);
console.log(typeof obj);
// TEST 1:  makeBook().title       ->  "Dune"
// TEST 2:  makeBook().pages       ->  412
// TEST 3:  typeof makeBook()      ->  "object"

// ----- 2. Read a key -----
// Write `getTitle(book)` that RETURNS the title property.
// your code here
function getTitle(book) {
  return book.title;
}
console.log(getTitle({ title: "1984", pages: 328 }));
console.log(getTitle({ title: "It" }));
console.log(getTitle({ title: "" }));
// TEST 1:  getTitle({ title: "1984", pages: 328 })  ->  "1984"
// TEST 2:  getTitle({ title: "It" })                ->  "It"
// TEST 3:  getTitle({ title: "" })                  ->  ""

// ----- 3. Read by variable key -----
// Write `field(obj, key)` that RETURNS the value behind key (use brackets).
// your code here
function field(obj, key) {
  return obj[key];
}
console.log(field({ a: 1, b: 2 }, "b"));
console.log(field({ city: "NYC" }, "city"));
console.log(field({ a: 1 }, "missing"));
// TEST 1:  field({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  field({ city: "NYC" }, "city")    ->  "NYC"
// TEST 3:  field({ a: 1 }, "missing")        ->  undefined

// ----- 4. Set a price (mutate) -----
// Write `setPrice(item, price)` that sets item.price = price and RETURNS item.
// your code here
function setPrice(item, price) {
  item.price = price;
  return item;
}
console.log(setPrice({ name: "pen" }, 3).price);
console.log(setPrice({ price: 1 }, 9).price);
console.log(setPrice({ name: "x" }, 0).price);
// TEST 1:  setPrice({ name: "pen" }, 3).price  ->  3
// TEST 2:  setPrice({ price: 1 }, 9).price     ->  9
// TEST 3:  setPrice({ name: "x" }, 0).price    ->  0

// ----- 5. Has key? -----
// Write `hasKey(obj, key)` that RETURNS true when key exists in obj.
// your code here
function hasKey(obj, key) {
  if (obj[key]) {
    return true;
  } else {
    return false;
  }
}
console.log(hasKey({ a: 1 }, "a"));
console.log(hasKey({ a: 1 }, "b"));
console.log(hasKey({ name: "x" }, "name"));
// TEST 1:  hasKey({ a: 1 }, "a")        ->  true
// TEST 2:  hasKey({ a: 1 }, "b")        ->  false
// TEST 3:  hasKey({ name: "x" }, "name") ->  true

// ----- 6. Remove a key (mutate) -----
// Write `removeKey(obj, key)` that deletes key from obj and RETURNS obj.
// your code here
function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log("b" in removeKey({ a: 1, b: 2 }, "b"));
console.log("a" in removeKey({ a: 1, b: 2 }, "b"));
console.log(removeKey({ x: 9 }, "x").x);
// TEST 1:  "b" in removeKey({ a: 1, b: 2 }, "b")  ->  false
// TEST 2:  "a" in removeKey({ a: 1, b: 2 }, "b")  ->  true
// TEST 3:  removeKey({ x: 9 }, "x").x             ->  undefined

// ----- 7. Count the keys -----
// Write `keyCount(obj)` that RETURNS how many keys obj has.
// your code here
function keyCount(obj) {
  let count = 0;
  for (const k in obj) {
    count++;
  }
  return count;
}
console.log(keyCount({ a: 1, b: 2, c: 3 }));
console.log(keyCount({}));
console.log(keyCount({ only: true }));
// TEST 1:  keyCount({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  keyCount({})                    ->  0
// TEST 3:  keyCount({ only: true })        ->  1

// ----- 8. Sum the values -----
// Write `sumValues(obj)` (all values are numbers) that RETURNS their total.
// your code here
function sumValues(obj) {
  let total3 = 0;
  for (const k in obj) {
    total3 += obj[k];
  }
  return total3;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ x: 10, y: 5 }));
console.log(sumValues({ only: 7 }));
// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10, y: 5 })       ->  15
// TEST 3:  sumValues({ only: 7 })           ->  7

// ----- 9. Merge two objects (copy) -----
// Write `merge(a, b)` that RETURNS a NEW object with both, b winning on
// shared keys. Do not change a or b.
// your code here
function merge(a, b) {
  if (a === b) {
    return a;
  } else {
    return b;
  }
}
console.log(merge({ a: 1 }, { b: 2 }).b);
console.log(merge({ a: 1 }, { a: 9 }).a);
console.log(merge({ a: 1 }, { b: 2 }));
// TEST 1:  merge({ a: 1 }, { b: 2 }).b         ->  2
// TEST 2:  merge({ a: 1 }, { a: 9 }).a         ->  9
// TEST 3:  keyCount(merge({ a: 1 }, { b: 2 })) ->  2

// ----- 10. Highest value key -----
// Write `topKey(scores)` (values are numbers) that RETURNS the key with the
// biggest value.
// your code here
// function topKey(scores){

// }
// console.log(topKey({ sam: 5, ada: 9, bo: 3 }));
// TEST 1:  topKey({ sam: 5, ada: 9, bo: 3 })  ->  "ada"
// TEST 2:  topKey({ a: 1, b: 2 })             ->  "b"
// TEST 3:  topKey({ only: 7 })                ->  "only"
/* ============================================================
   LESSON 9 â€” ARRAYS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: [ ], arr[i], arr.length, push/pop/unshift/shift,
   includes/indexOf, and a for loop over the items. Plus before.

   Run:  node 9-arrays.js
   Comparing arrays by eye: the test shows the expected list.
   To check in code, compare JSON.stringify(yours) to expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. First item -----
// Write `firstItem(arr)` that RETURNS the item at index 0.
// your code here
function firstItem(arr) {
  return arr[0];
}
console.log(firstItem([10, 20, 30]));
console.log(firstItem(["a", "b"]));
console.log(firstItem([7]));
// TEST 1:  firstItem([10, 20, 30])  ->  10
// TEST 2:  firstItem(["a", "b"])    ->  "a"
// TEST 3:  firstItem([7])           ->  7

// ----- 2. Sum all -----
// Write `sumAll(arr)` (numbers) that RETURNS the total of every item.
// your code here
function sumAll(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll([1, 2, 3, 4]));
// TEST 1:  sumAll([1, 2, 3, 4])  ->  10
// TEST 2:  sumAll([])            ->  0
// TEST 3:  sumAll([5])           ->  5

// ----- 3. Biggest number -----
// Write `maxOf(arr)` (numbers) that RETURNS the largest item.
// your code here
// function maxOf(arr){
//   return arr.filter((item)=> item.)
// }
// console.log(maxOf([3, 9, 5]));
// TEST 1:  maxOf([3, 9, 5])      ->  9
// TEST 2:  maxOf([-1, -5, -2])   ->  -1
// TEST 3:  maxOf([7])            ->  7

// ----- 4. Count occurrences -----
// Write `countOf(arr, target)` that RETURNS how many items equal target.
// your code here
function countOf(arr, target) {
  return arr.filter((item) => item === target).length;
}
console.log(countOf([1, 2, 2, 3, 2], 2));
console.log(countOf(["a", "b", "a"], "a"));
console.log(countOf([1, 2, 3], 9));
// TEST 1:  countOf([1, 2, 2, 3, 2], 2)        ->  3
// TEST 2:  countOf(["a", "b", "a"], "a")      ->  2
// TEST 3:  countOf([1, 2, 3], 9)              ->  0

// ----- 5. Add to end -----
// Write `append(arr, item)` that pushes item and RETURNS arr.
// your code here
function append(arr, item) {
  arr.push(item);
  return arr;
}
console.log(append([1, 2], 3));
console.log(append([], "hi").length);
console.log(append(["a"], "b"));
// TEST 1:  append([1, 2], 3)          ->  [1, 2, 3]
// TEST 2:  append([], "hi").length    ->  1
// TEST 3:  append(["a"], "b")         ->  ["a", "b"]

// ----- 6. Remove first -----
// Write `removeFirst(arr)` that shifts off the first item and RETURNS arr.
// your code here
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1, 2, 3]));
console.log(removeFirst([9]).length);
console.log(removeFirst(["a", "b", "c"]));
// TEST 1:  removeFirst([1, 2, 3])        ->  [2, 3]
// TEST 2:  removeFirst([9]).length       ->  0
// TEST 3:  removeFirst(["a", "b", "c"])  ->  ["b", "c"]

// ----- 7. Contains -----
// Write `contains(arr, item)` that RETURNS true when item is in arr.
// your code here
function contains(arr, item) {
  return arr.includes(item);
}
console.log(contains(["cat", "dog"], "dog"));
console.log(contains([1, 2, 3], 9));
console.log(contains([], "x"));
// TEST 1:  contains(["cat", "dog"], "dog")   ->  true
// TEST 2:  contains([1, 2, 3], 9)            ->  false
// TEST 3:  contains([], "x")                 ->  false

// ----- 8. Count even numbers -----
// Write `countEven(arr)` (numbers) that RETURNS how many items are even.
// your code here
function countEven(arr) {
  return arr.filter((item) => item % 2 === 0).length;
}
console.log(countEven([1, 2, 3, 4, 6]));
console.log(countEven([1, 3, 5]));
console.log(countEven([2, 4]));
// TEST 1:  countEven([1, 2, 3, 4, 6])  ->  3
// TEST 2:  countEven([1, 3, 5])        ->  0
// TEST 3:  countEven([2, 4])           ->  2

// ----- 9. Join with dashes -----
// Write `dashJoin(arr)` that RETURNS the items joined into one string with
// "-" between them, built with a loop. dashJoin(["a","b","c"]) -> "a-b-c".
// your code here
// function dashJoin(arr){
//   for(let i=0; i<arr.length; i++){

//   }
// }
// console.log(dashJoin(["a", "b", "c"]));
// TEST 1:  dashJoin(["a", "b", "c"])  ->  "a-b-c"
// TEST 2:  dashJoin(["one"])          ->  "one"
// TEST 3:  dashJoin([1, 2])           ->  "1-2"

// ----- 10. Average -----
// Write `average(arr)` (numbers) that RETURNS the mean of the items.
// your code here
function average(arr) {
  return arr.reduce((acc, n) => acc + n, 0) / arr.length;
}
console.log(average([2, 4, 6]));
console.log(average([10, 20]));
console.log(average([5]));
// TEST 1:  average([2, 4, 6])    ->  4
// TEST 2:  average([10, 20])     ->  15
// TEST 3:  average([5])          ->  5

// ----- 11. Reverse into a new array -----
// Write `reverseArr(arr)` that RETURNS a NEW array with the items reversed.
// Do not change the original.
// your code here
function reverseArr(arr) {
  arr.sort((a, b) => b - a);
  return arr;
}
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr(["a", "b"]));
console.log(reverseArr([7]));
// TEST 1:  reverseArr([1, 2, 3])        ->  [3, 2, 1]
// TEST 2:  reverseArr(["a", "b"])       ->  ["b", "a"]
// TEST 3:  reverseArr([7])              ->  [7]

// ----- 12. Only the evens (build a new array) -----
// Write `evensOnly(arr)` that RETURNS a NEW array with only the even numbers,
// in the same order.
// your code here
function evensOnly(arr) {
  return arr.filter((item) => item % 2 === 0);
}
console.log(evensOnly([1, 2, 3, 4, 5, 6]));
console.log(evensOnly([1, 3, 5]));
console.log(evensOnly([2, 4]));
// TEST 1:  evensOnly([1, 2, 3, 4, 5, 6])  ->  [2, 4, 6]
// TEST 2:  evensOnly([1, 3, 5])           ->  []
// TEST 3:  evensOnly([2, 4])              ->  [2, 4]
