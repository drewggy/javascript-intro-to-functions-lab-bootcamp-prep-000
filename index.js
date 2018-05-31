function shout(string) {
  return (string.toUpperCase())
}
function whisper(string) {
  return (string.toLowerCase())
}
function logShout(string) {
  console.log(string.toUpperCase())
  return
}
function logWhisper(string) {
  console.log(string.toLowerCase())
  return
}
function sayHiToGrandma(string){
  var grandMaResponse = `Eh?`;
  if (string === `I love you, Grandma.`) {
    grandMaResponse = `I love you, too.`;
    //return grandMaResponse;
  }
  return grandMaResponse;

}
