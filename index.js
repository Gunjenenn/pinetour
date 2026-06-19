// const age = 0
// if(age >= 1&&age<=5){
//     console.log("tsetserleg")
// }else if (age>=6&&age<=17){
//     console.log("surguuli")
// }else if(age>=18&&age<=22){
//     console.log("oyutan")
// }else if(age>=22&&age<=65){
//     console.log("ajilchin angi")
// }else if(age>65){
//     console.log("tetgever")
// }else{
//     console.log("medehgui")
// } 

/* ========================= EASY ========================= */

// E1. A person can enter the club only if age is 18 or older
//     AND hasID is true. Print "Welcome" or "Denied".
const age1 = 10;
const hasID = true;
if(age1>= 18 && hasID){
    console.log("welcome")
}else{
    console.log("Denied")
}
// Expected: Welcome
// your code here


// E2. It is a day off if isWeekend is true OR isHoliday is true.
//     Print "Day off" or "Work day".
const isWeekend = false;
const isHoliday = true;
if(isWeekend || isHoliday){
    console.log("Day off")
}else{
    console.log("Work day")
}
// Expected: Day off
// your code here


// E3. Go to the beach only if temperature is above 30 AND isSunny.
//     Print "Beach" or "Stay home".
const temperature = 33;
const isSunny = true;
if(temperature>30 && isSunny){
    console.log("Beach")
}else{
    console.log("Stay home")
}
// Expected: Beach
// your code here


// E4. Grant admin access if username is "admin" OR username is "root".
//     Print "Admin access" or "Regular user".
const username = "admin";
if(username=="admin" || username=="root"){
    console.log('Admin access')
}else{
    console.log("regular user")
}
// Expected: Admin access
// your code here


// E5. A number is "good" if it is positive (> 0) AND even (n % 2 === 0).
//     Print "Good" or "Not good".
const number = 8;
if(number>0 && number %2===0){
    console.log("Good")
}else{
    console.log("Not good")
}
// Expected: Good
// your code here


/* ======================== MEDIUM ======================== */
/* Combine && and || together, or chain several conditions. */

// M1. Login succeeds if the username is "elbeg" AND password is "1234".
//     Print "Login OK" or "Wrong credentials".
const user = "elbeg";
const password = "1234";
if( user=="elbeg" && password=="1234"){
    console.log("Login Ok")
}else{
    console.log("Wrong credentials")
}
// Expected: Login OK
// your code here


// M2. A customer gets a discount if they are a member (isMember)
//     OR they spent more than 100000.
//     Print "Discount" or "Full price".
const isMember = false;
const totalSpent = 120000;
if(isMember || totalSpent>100000){
    console.log("Discount")
}else{
    console.log("Full price")
}
// Expected: Discount
// your code here


// M3. Entry is free if age is under 5 OR over 65. Otherwise paid.
//     Print "Free" or "Paid".
const age3 = 70;
if(age3<5 || age3>65){
    console.log("Free")
}else{
    console.log("Paid")
}
// Expected: Free
// your code here


// M4. A person may drive only if ALL are true:
//     age is 18+, hasLicense is true, AND isSober is true.
//     Print "Can drive" or "Cannot drive".
const age4 = 25;
const hasLicense = true;
const isSober = false;
if(age4>18 && hasLicense && isSober){
    console.log("Can drive")
}else{
    console.log("Cannot drive")
}
// Expected: Cannot drive
// your code here


// M5. Bring an umbrella if it isRaining,
//     OR if it isCloudy AND humidity is above 80.
//     Print "Umbrella" or "No umbrella".
const isRaining = false;
const isCloudy = true;
const humidity = 85;
if((isRaining || isCloudy) && humidity>80){
    console.log("Umbrella")
}else{
    console.log("No umbrella")
}
// Expected: Umbrella
// your code here


/* ========================= HARD ========================= */
/* Operator precedence, ranges, and multi-part logic.
   Tip: when mixing && and ||, use parentheses to be explicit. */

// H1. Leap year. A year is a leap year if:
//     it is divisible by 4 AND not by 100,
//     OR it is divisible by 400.
//     Print "Leap year" or "Not a leap year".
//     After it works, mentally test: 1900 (no), 2000 (yes), 2023 (no).
const year = 2023;
if((year % 4 === 0 && year % 100 !== 0)|| year % 400 ===0){
    console.log("Leap year")
}else{
    console.log("Not a leap year")
}
// Expected: Leap year
// your code here

// H2. A grade is "valid B" if score is at least 80 AND below 90.
//     Print "Grade B" or "Not B".
const score = 84;
if(score>=80 && score<90){
    console.log("Grade B")
}else{
    console.log("Not B")
}
// Expected: Grade B
// your code here


// H3. Access the control panel only if the user isLoggedIn
//     AND (role is "admin" OR role is "moderator").
//     Print "Access granted" or "Access denied".
const isLoggedIn = true;
const role = "moderator";
if(isLoggedIn && (role=="admin" || role=="moderator")){
    console.log("Access granted")
}else{
    console.log("Access denied")
}
// Expected: Access granted
// your code here


// H4. Three side lengths form a valid triangle only if EVERY pair
//     of sides sums to more than the third side:
//     a+b > c AND b+c > a AND a+c > b.
//     Print "Valid triangle" or "Invalid triangle".
const a = 3;
const b = 4;
const c = 5;
if(a+b>c && b+c>a && a+c>b){
    console.log("Valid triangle")
}else{
    console.log("Invalid triangle")
}
// Expected: Valid triangle
// your code here


// H5. A password is "strong" if its length is at least 8
//     AND it contains a number OR a symbol.
//     (hasNumber and hasSymbol are given as booleans.)
//     Print "Strong" or "Weak".
const pwLength = 10;
const hasNumber = false;
const hasSymbol = true;
if(pwLength>=8 && (hasNumber || hasSymbol)){
    console.log("Strong")
}else{
    console.log("Weak")
}
// Expected: Strong
// your code here













// 1. Print every element of the array, each on its own line.
const fruits = ["apple", "banana", "cherry"];
for(let i = 0 ; i < 3 ; i++) {
    console.log(fruits[i])
}
// Expected:
//   apple
//   banana
//   cherry
// your code here


// 2. Add up all the numbers and print the total.
const nums = [4, 8, 15, 16, 23, 42];
let sum = 0
for(let i=0; i<6; i++){
    console.log(sum+nums[i])
    sum= sum+nums[i]
}
console.log( sum)

// Expected: 108
// your code here


// 3. Count how many numbers in the array are even, and print the count.
const values = [3, 6, 9, 12, 15, 18];
let sums=0
for(let i=0; i<6; i++){
    if(values[i]%2===0){
        sums = sums + 1
        console.log(sums, values[i])
    }
}
// Expected: 3
// your code here


// 4. Find and print the largest number in the array.
const scores = [42, 17, 99, 23, 56];
let max = scores[0]
for(i=0; i<5;i++){
    if( max< scores[i]) {
        max= scores[i]
        console.log(max)
    }
}
// Expected: 99
// your code here


// 5. Find the smallest number AND the index where it sits.
//    Print:  smallest <value> at index <i>
const temps = [12, 5, 8, 3, 20];

let min = temps[0]
let index= 0
for(let i=0; i<5; i++){
    if(min>temps[i]){
        min=temps[i]
        index= i
    }
}
console.log(min, index)
// Expected: smallest 3 at index 3
// your code here



// 6. Build a NEW array where every number is doubled, then print it.
const base = [1, 2, 3, 4];

for( let i=0; i<4; i++) {
    base[i] = base[i] * 2
    
}
console.log(base)

// Expected: [ 2, 4, 6, 8 ]
// your code here


// 7. Count how many times the target value appears in the array.
const items = [1, 2, 2, 3, 2, 4];
const target = 2;
let too=0
for( let i=0; i<6; i++){
    if(target===items[i]){
        too=too+1
    }
}
console.log(too)
// Expected: 3
// your code here


// 8. Calculate and print the average of the numbers.
const data = [10, 20, 30, 40];
let smth = 0
let average=0
for(let i=0; i<4; i++){
    smth=smth+ data[i]
}
average=smth/data.length
console.log(average)

// Expected: 25
// your code here


// 9. Build a NEW array containing only the numbers greater than 10,
//    then print it.
const list = [5, 12, 8, 20, 3, 15];
let greater=[]
for(let i=0; i<6; i++){
    if(list[i]>10){
        greater.push(list[i])
    }
}
console.log(greater)
// Expected: [ 12, 20, 15 ]
// your code here


// 10. Reverse the array into a NEW array WITHOUT using .reverse().
//     Then print the new array.
const letters = ["a", "b", "c", "d"];

let new1 = [];

for (let i = 3; i >= 0; i--) {
    new1.push(letters[i]);
}

console.log(new1);

// Expected: [ 'd', 'c', 'b', 'a' ]
// your code here










// 1. Print each character of the word on its own line.
const word = "code";
for(let i=0; i<4; i++){
    console.log(word[i])
}
// Expected:
//   c
//   o
//   d
//   e
// your code here


// 2. Count the characters using a loop (increment a counter).
//    Do NOT just print .length — count them one by one.
const text = "javascript";
let length=0
for(i=0; i<10; i++){
    if([i]){
        length=length+1
    }
}
console.log(length)
// Expected: 10
// your code here


// 3. Count how many vowels (a, e, i, o, u) are in the string.
const phrase = "education";
let vowels=0
for(i=0;i<9;i++){
    if(phrase[i]==='a'|| phrase[i]==='e'|| phrase[i]==='i'||phrase[i]==='u'||phrase[i]==='o'){
        vowels=vowels+1
    }
}
console.log(vowels)
// Expected: 5
// your code here


// 4. Count how many times the letter "a" appears.
const sentence = "banana";
let letter=0
for(i=0;i<6;i++){
    if(sentence[i]==='a'){
        letter=letter+1
    }
}
console.log(letter)
// Expected: 3
// your code here


// 5. Reverse the string into a NEW string (don't use a built-in reverse).
//    Build it character by character, then print it.
const name1 = "elbeg";
let newstring=""
for(let i=4; i>=0; i--){
    newstring=newstring+name1[i]
  
}
console.log(newstring)
// Expected: geble
// your code here


// 6. Build a NEW string with all the spaces removed, then print it.
const spaced = "h e l l o";
let removed=""
for(i=0;i<spaced.length;i++){
    if(spaced[i]!==' '){
        removed=removed+spaced[i]   
    }
}
console.log(removed)
// Expected: hello
// your code here


// 7. Build a NEW string where every space is replaced with a dash "-".
const title = "learn java script";
let replaced = ""

for(let i=0; i<title.length;i++){
    if(title[i] === ' '){
        replaced = replaced + "-"
    }
    else {
        replaced = replaced + title[i]
    }
}
console.log(replaced)
// Expected: learn-java-script
// your code here


// 8. Check if the word is a palindrome (reads the same forwards and
//    backwards). Print true or false.
const candidate = "level";
let palindrome=''
for(let i=4;i>=0;i--){
    palindrome=palindrome+candidate[i] 
}
if(palindrome=candidate){
            console.log("True")
        }else(
            console.log("False")
        )    
// Expected: true
// your code here


// 9. Count how many words are in the sentence.
//    Hint: words are separated by spaces.
const line = "I love javascript a lot";
let space=0
let space1=0
for(let i=0; i<line.length; i++){
    if(line[i]===" "){
        space=space+1
    }
    space1=space+1
}
console.log(space1)
// Expected: 5
// your code here


// 10. Count how many UPPERCASE letters are in the string.
//     Hint: a character ch is uppercase when  ch >= "A" && ch <= "Z"
const mixed = "HelloWorldJS";
let uppercase=0
for(let i=0; i<mixed.length; i++){
    if(mixed[i]>='A' && mixed[i]<="Z"){
        uppercase=uppercase+1
    }
}
console.log(uppercase)
// Expected: 4
// your code here








// 1. FizzBuzz. Loop from 1 to 20 and print:

//    "Fizz" if divisible by 3, "Buzz" if divisible by 5,
//    "FizzBuzz" if divisible by BOTH, otherwise the number itself.
//    Hint: check the BOTH case first.
// Expected: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14
//           FizzBuzz 16 17 Fizz 19 Buzz   (each on its own line)
// your code here


// 2. Add up ONLY the even numbers in the array and print the total.
const nums1 = [4, 7, 10, 13, 6, 9];
let only= 0
for(i=0; i<6; i++){
    if(nums1[i]%2===0){
        only= only+nums1[i]
    }
}
console.log(only)
// Expected: 20
// your code here


// 3. In a SINGLE loop, count how many numbers are positive,
//    negative, and zero. Print all three counts.
const values1 = [3, -1, 0, 8, -5, 0, 2];
let values2=0
let values3=0
let values4=0
for(let i=0; i<7; i++){
    if(values1[i]>0){
        values2=values2+1
    }else if(values1[i]===0){
        values3=values3+1
    } else if (values1[i]<0){
        values4=values4+1
    }
}
console.log("positives:" , values2 , "negatives:", values4  , "zeros:" , values3)

// Expected: positives 3, negatives 2, zeros 2
// your code here


// 4. Find the largest EVEN number in the array and print it.
//    (Ignore odd numbers completely.)
const data1 = [3, 8, 5, 12, 7, 10];
let largesteven=data1[0]

for(let i=0; i<6; i++){
    if(data1[i]%2===0 && largesteven<data1[i]){
        largesteven=data1[i]
    }
}
console.log(largesteven)



// Expected: 12
// your code here


// 5. Check whether the array is sorted in ascending order.
//    Print true or false.
const arr = [1, 3, 5, 7, 9];
let result = true
for( let i=0; i<4; i++){
    if(arr[i] < arr[i + 1]) { } else{
        console.log(arr[i] , arr[i+1])
        result = false
    }
}
console.log(result)

// Expected: true
// your code here


// 6. Find the SECOND largest number in the array and print it.
const scores1 = [42, 17, 99, 23, 56];
let largest1=scores1[1]
let largest2=largest1[0]; scores1[0]
for(i=0;i<5;i++){
    if(largest1<scores1)
        largest1=scores1;
    (largest2<largest1 && largest2>scores1)
    
    
    

}
console.log(largest2)
// Expected: 56
// your code here


// 7. Count how many numbers fall within the range 10 to 50 inclusive.
//    (Use a range check: n >= 10 && n <= 50)
const lis1t = [5, 12, 50, 9, 33, 60, 10];
let numbers=0
for(let i=0; i<7; i++){
    if(lis1t[i]>=10 && lis1t[i]<=50){
        numbers=numbers+1
    }

}
console.log(numbers)
// Expected: 4
// your code here


// 8. Find the longest word in the array and print it.
const words = ["sun", "banana", "cat", "elephant", "dog"];
let longest=
// Expected: elephant
// your code here


// 9. Count vowels and consonants in the string (letters only).
//    Print both counts.
const text1 = "javascript";
// Expected: vowels 3, consonants 7
// your code here


// 10. Remove duplicates: build a NEW array containing each value
//     only once, keeping first-seen order. Print it.
const items1 = [1, 2, 2, 3, 4, 4, 4, 5];
// Expected: [ 1, 2, 3, 4, 5 ]
// your code here