// console.log(true + (new Date()));
// console.log(1+{});

var msgObj = "Everything is practice."
// console.log(msgObj.length);
// console.log(msgObj.charAt(3));

var msg = "Everythin is practice.";
// console.log(msg);

var msg = new String("Everyting is practice.");
// console.log(msg);

var msg = new String("Everything is practice.").valueOf();
// console.log(msg);
// console.log(msg.substring(7, 10));  // 7번째에서 9번째 까지 
// console.log(msg.substr(7,10));      // 7번째부터 문자 10개
// console.log(msg.slice(7, 10));
// console.log(msg.slice(-3));
// console.log(msg.slice(-9, -6));
// console.log(msg.indexOf("t"));
// console.log(msg.indexOf("i", 10));
// console.log(msg.lastIndexOf("t"));
// console.log(msg.split(" "));
// console.log(msg.replace("p", "P"));
// console.log(msg.toUpperCase());
// console.log(msg.endsWith("."));
// console.log(msg.includes("thing"));
// console.log(msg.charCodeAt(0));
// console.log(msg.codePointAt(0));

// console.log(String.fromCharCode(0xAE38));
// console.log(String.fromCharCode(65,66,76));
// console.log(String.fromCharCode(0xd83d, 0xdcd6));
// console.log(String.fromCharCode(0x1f4d6));
// console.log(String.fromCodePoint(0x1f4d6));
// console.log("\u{1f4d6}");

// console.log(msg[3]);
// console.log(msg[msg.length-1]);
// msg[3] = "R"
// console.log(msg);

var s = "\u{1f4d6}";
console.log(s.codePointAt(0).toString(16));
console.log(s[0].codePointAt(0).toString(16));
console.log(s[1].codePointAt(0).toString(16));
console.log(s[0]+s[1]);















