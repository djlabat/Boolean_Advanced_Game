Num = +(Math.round(Math.random() * 100)) - 50
Num_101 = Math.round(Math.random() * 3) - 1
Str = Math.random().toString(36).slice(2, 7)
Bol = !!(Math.round(Math.random()))

vrednosti = [
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

// console.clear()

X = vrednosti[Math.round(Math.random() * vrednosti.length)]
Y = vrednosti[Math.round(Math.random() * vrednosti.length)]

Xb = Boolean(X)
Yb = Boolean(Y)

operator = Boolean(Math.round(Math.random())) ?
  "X || Y" : "X && Y"


console.log("Value of X: ", X)
console.log("Value of Y: ", Y)
console.log("Result of : ", operator, " ?")
setTimeout(() => console.log("Boolean of X: ", Boolean(X)), 1000 * 2)
setTimeout(() => console.log("Boolean of Y: ", Boolean(Y)), 1000 * 3)
setTimeout(() => console.log(operator, "=", eval(operator) === X ? "X" : "Y"), 1000 * 5)
