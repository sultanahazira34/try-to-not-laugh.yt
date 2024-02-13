let name = prompt(" Enter your name ");
let arr = [
  `Initializing hack program . . .`,
  `Hacking ${name}'s phone username . . .`,
  `Username found ${name} . . .`,
  `DOB:29 December 1997...`,
  `Connecting to instagram . . .`,
  `Will complete instagram hacking after 10 sec`,
  `Successfully hacked`,
  `Thank you ${name}`,
];
let fun = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
let fun2 = async (src) => {
  await fun(2);
  text = document.getElementById("body");
  text.innerHTML = text.innerHTML + src + "<br>";
};
(async () => {
  for (let i = 0; i < arr.length; i++) {
    await fun2(arr[i]);
  }
})();