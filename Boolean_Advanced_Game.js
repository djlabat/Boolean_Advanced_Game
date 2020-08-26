let Num = +(Math.round(Math.random() * 100)) - 50
let Num_101 = Math.round(Math.random() * 3) - 1
let Str = Math.random().toString(36).slice(2, 7)
let Bol = !!(Math.round(Math.random()))

const vrednosti = [
  Num_101,
  Num,
  Infinity,
  -Infinity,
  "" + Num_101,
  "" + Num,
  "" + Infinity,
  "" + -Infinity,
  Str,
  [Num],
  [Num_101],
  [Infinity],
  [-Infinity],
  ["" + Num_101],
  ["" + Num],
  ["" + Infinity],
  ["" + -Infinity],
  [[Num]],
  [[Num_101]],
  [[Infinity]],
  [[-Infinity]],
  [["" + Num_101]],
  [["" + Num]],
  [["" + Infinity]],
  [["" + -Infinity]],
  Bol,
  "" + Bol,
  [Bol],
  ["" + Bol],
  [[Bol]],
  [["" + Bol]],
  null,
  undefined,
  NaN,
  "" + null,
  "" + undefined,
  "" + NaN,
  [null],
  [undefined],
  [NaN],
  [[null]],
  [[undefined]],
  [[NaN]],
  [],
  [[]],
  [""],
  [" "],
  [[""]],
  [[" "]],
  "",
  " ",
  {},
  { Num_101 },
  { Num },
  /*{Infinity},
  { -Infinity},
  {""+Num_101},
  {""+Num},
  {"Infinity"},
  {"-Infinity"},*/
  { Str },
  /*{[Num]},
  {[Num_101]},
  {[Infinity]},
  {[-Infinity]},
  {[""+Num_101]},
  {[""+Num]},
  {[""+Infinity]},
  {[""+ -Infinity]},
  {[[Num]]},
  {[[Num_101]]},
  {[[Infinity]]},
  {[[-Infinity]]},
  {[[""+Num_101]]},
  {[[""+Num]]},
  {[[""+Infinity]]},
  {[[""+ -Infinity]]},*/
  { Bol },
  /*{""+Bol},
  {[Bol]},
  {[""+Bol]},
  {[[Bol]]},
  {[[""+Bol]]},
  {null},
  {undefined},
  {NaN},
  {""+null},
  {""+undefined},
  {""+NaN},
  {[null]},
  {[undefined]},
  {[NaN]},
  {[[null]]},
  {[[undefined]]},
  {[[NaN]]},
  {[]},
  {[[]]},
  {[""]},
  {[" "]},
  {[[""]]},
  {[[" "]]},
  {""},
  {" "},*/
]

let vred = [
  -1+true, '-1+true', false+1, 'false+1', true-1, 'true-1',
  -false, '-false', false, 'false', false, 'false',  
  
  // 0, '0', 0, '0', 0, '0', 0, '0',
  // 1, '1',
  // -1, '-1',
  // 0.5, '0.5',
  // -0.5, '-0.5',
  ~~(Math.random()*200-100), ""+~~(Math.random()*200-100),
  // 0**0, '0**0', // 1
  // 0**Infinity, '0**Infinity', // 0
  // 1/Infinity, '1/Infinity', // 0
  // 1/0 , '1/0', // Infinity - 1
  // Infinity, 'Infinity',
  // -Infinity, '-Infinity',
  // Infinity / Infinity, 'Infinity / Infinity', // NaN - 0

  // [0], '[0]',
  // ['0'], '["0"]',
  // [false], '[false]',
  // [''], '[""]',
  // [], '[]',
  // [[]], '[[]]',
  // ['false'], '["false"]',
  // [null], '[null]',
  // [undefined], '[undefined]',
  // [-Infinity], '[-Infinity]',

  // '0', '"0"',
  // 'abc', '"abc"',
  // 'false', '"false"',
  // 'undefined', '"undefined"',
  // 'null', '"null"',
  // 'NaN', '"NaN"',
  // "  ", '"  "',
  // !'true', '!"true"',
  // "", '""', "", '""', "", '""', "", '""',
  
  NaN==NaN, 'NaN == NaN', NaN == undefined, 'NaN == undefined', NaN, 'NaN', 
  undefined, 'undefined', !(undefined-1), '!(undefined-1)', !undefined-1, '!undefined-1', 
  null == undefined, 'null == undefined', null == NaN, 'null == NaN', null, 'null', 
  1+NaN, '1+NaN', NaN>undefined, 'NaN>undefined', undefined+1, 'undefined+1',
  undefined==NaN, 'undefined == NaN',

  // {}+false, '{}+false', {}, '{}', {}, '{}', 
  // {null:null}, '{null:null}',
  // {undefined: null}, '{undefined: null}',
  // {undefined: undefined}, '{undefined: undefined}',
  // {0: false}, '{0: false}',
  // {0: NaN}, '{0: NaN}',
  // {0: null}, '{0: null}',
  // {0: ""}, '{0: ""}', 
  // {0: undefined}, '{0: undefined}', 
]

let nxtBtn = document.getElementById("next-btn")
  .addEventListener('click', next);
  
function next () {
    
  // Clear screen
  document.querySelector("#ans").innerHTML = " "
  document.querySelector("#res-disp-1").innerHTML = " "
  document.querySelector("#res-disp-2").innerHTML = " "
  
  // Randoms
  let rndX = 2 * Math.floor ( Math.random() * (vred.length/2) )
  let rndOper = Boolean(Math.round(Math.random())) 
  let rndY = 2 * Math.floor ( Math.random() * (vred.length/2) )
  
  // Values
	const X = vred [ rndX ] 
	const operator = rndOper ? "||" : "&&"
	const Y = vred [ rndY ]

  // Prints
  printX = document.getElementById('btn-a')
    .innerHTML = vred [ rndX +1 ]
  printOper = document.getElementById('oper')
    .innerHTML = operator
  printY = document.getElementById('btn-b')
    .innerHTML = vred [ rndY +1 ]
  
  // Console Loging
  console.clear()
  console.log('rndX:', rndX)
  // console.log('rndOper:', rndOper)
  console.log('rndY:', rndY)
  
  console.log('X:', X, !!X)
  // console.log('operator:', operator)
  console.log('Y:', Y, !!Y)
  
  console.log('printX:', printX)
  // console.log('printOper:', printOper)
  console.log('printY:', printY)
  

  // Events
  const aBtn = document.getElementById('btn-a')
    .addEventListener("click", check);
  const bBtn = document.getElementById('btn-b')
    .addEventListener("click", check);
  
  // Function check
	function check (event) {
   
    function res () {
       return operator === '&&' ?
        (!!X) === true ? 
          document.querySelector("#btn-b").id :
          document.querySelector("#btn-a").id
      : 
        (!!X) === true ?
          document.querySelector("#btn-a").id :
          document.querySelector("#btn-b").id
    }
    
    if (event.target.id === res()) {
      document.querySelector("#ans").innerHTML = "Correct!"
      document.querySelector("#ans").style.color = "#8f8"
    } else {
      document.querySelector("#ans").innerHTML = "No! It's falsy! It's a bad luck! Try other one!"
      document.querySelector("#ans").style.color = "#f88"
    }
  
    // function resDisplay () {
      document.querySelector("#res-disp-1").innerHTML = !!X
      document.querySelector("#res-disp-2").innerHTML = !!Y
    
    // resDisplay()
  }
}

next()

// Development ideas:
// Define more questions
// Difficalty levels, from easy to hard, with time ticking
// 
// Niz sa resenjima treba da bude poslagan od najlaksih pitanja do najtezih.
// treba da se napravi jedan loop, koji prolazeci kroz nivioe, prolazi kroz ceo niz, a pitanja se postavljaju sa lokalnim random.
// broj dugmadi ce da raste
// Negacije
// Atritetika
// moze posle da se ubaci i ?? nullish operator + opciono povezivanje ?.

// opcija za vezbanje: easy, normal, hard, filozofiranje.