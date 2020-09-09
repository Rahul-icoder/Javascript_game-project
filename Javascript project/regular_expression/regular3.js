console.log("Welcome to Charater sets");

let regex = /r[a-z]hul/;  
 regex = /r[abc]hu/;
str = "rchul";
regex = /r[a-zA-Z]hu[0-9]/;
str = "rAhu8";
regex = /rah{2}/;
str = "rahhul";

regex = /(rah){2}/
str = "rahrahul";

regex = /(rah){0,2}/
str = "rahul";          // match success  
if(regex.test(str))
{
    console.log(`match the ${regex.source} in ${str}`);
}
else{
    console.log(`not match regex ${regex.source}`);
}