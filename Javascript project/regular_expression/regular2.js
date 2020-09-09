console.log('this is tutorial of meta character');
let regex = /rahul/i;  // i stands for case instetive
// regex = /Ra?hul?/;  // for quessing a and l
 regex  = /^Raj/;  // check the first three character for matching 
 regex = /ul$/;   // check the last element of character for matching
 regex = /R..ul/ // matches any one character as a  // and match success
//  regex = /R*hul/  // matches any 0 or more character
 regex = /R\*hul/;
let str = "R*hul";  // match success
if(regex.test(str))
{
    console.log(`match the ${regex.source} in ${str}`);
}
else{
    console.log(`not match regex ${regex.source}`);
}