// function color(a,b,c,d,e,f,g){
//     console.log(a,b,c,d,e,f,g)
// }
// color("black", "white", "orange", "purple", "brown", "blue", "darkblue");
// ________________


function color(a, ...restColors){
    console.log(a, restColors);
}
color("black", "white", "orange", "purple", "brown", "blue", "darkblue");