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
  // true, 'true',
  // false, 'false', false, 'false', false, 'false',  
  
  // 0, '0', 0, '0', 0, '0', 0, '0',
  // 1, '1',
  // -1, '-1',
  // 0.5, '0.5',
  // -0.5, '-0.5',
  0**0, '0**0', // 1
  0**Infinity, '0**Infinity', // 0
  1/Infinity, '1/Infinity', // 0
  1/0 , '1/0' // Infinity - 1

  // [0], '[0]',
  // [false], '[false]',
  // [''], '[""]',
  // [], '[]',
  // ['false'], '["false"]',
  // [null], '[null]',

  // 'abc', '"abc"',
  // '0', '"0"',
  // "", '""', "", '""', "", '""', "", '""',
  // "  ", '"  "',
  // 'false', '"false"',

  // -Infinity, '-Infinity',
  // Infinity, 'Infinity',
  // !!NaN, 'NaN',
  // !!undefined, 'undefined',
  // !!null, 'null',

  // {}, '{}',
  // {null:null}, '{null:null}',
  // {undefined: null}, '{undefined: null}',
  // {0: false}, '{0: false}',
  // {0: ""}, '{0: ""}', 

]

let nxtBtn = document.getElementById("next-btn")
  .addEventListener('click', next);
  
function next () {
    
  // Clear screen
  document.querySelector("#ans").innerHTML = " "

  
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
  // console.log('rndX:', rndX)
  // console.log('rndOper:', rndOper)
  // console.log('rndY:', rndY)
  
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
    // console.log('click target: ', event.target.innerHTML);
    // console.log('res: ', res());
    
    function res () {
       let trueAns = operator === '&&' ?
      
        (!!X) === true ? 
          vred[rndY+1] : // nije vrednost rez, nego id=btn-b,
          vred[rndX+1]
      : 
        (!!X) === true ?
          vred[rndX+1] :
          vred[rndY+1]

      return trueAns
    }
    
    if (event.target.innerHTML === res()) {
      document.querySelector("#ans").innerHTML = "Right!"
      document.querySelector("#ans").style.color = "#8f8"
    } else {
      document.querySelector("#ans").innerHTML = "WRONG!"
      document.querySelector("#ans").style.color = "#f88"
    }
	}
}

next()

// Definisati jos pitanja
// Napraviti tri dugmeta za biranje tezine pitanja: easy, normal, hard