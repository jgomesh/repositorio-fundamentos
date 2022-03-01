let peça = "Paw";

if (peça.toLowerCase() === "bishop" ){
    console.log("diagonals.");
}
else if (peça.toLowerCase() === "pawn" ){
    console.log("1 square forward.");
}
else if (peça.toLowerCase() === "knight" ){
    console.log("L-shape.");
}
else if (peça.toLowerCase() === "rook" ){
    console.log("forward, backward or sideways.");
}
else if (peça.toLowerCase() === "queen" ){
    console.log("1-7 squares in any direction.");
}
else if (peça.toLowerCase() === "king" ){
    console.log("1 square forward, backward or sideways.");
}
else{
    console.log("ERRO, peça não identificada.");
}