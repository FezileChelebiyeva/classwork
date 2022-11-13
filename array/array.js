// // olkeleri cap et
// let countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
// let lenght = countries.length

// for(i=0; i<=countries.length; i++){
//     console.log(countries[i])
// }


// // c ile baslayanlar
// for(i=0; i<countries.length; i++){
//     if(countries[i][0] == "C")
//     console.log(countries[i])
// }

// // bas herfler
// for(i=0; i<countries.length; i++){
//     console.log(countries[i][0])
// }


// // 3 bas herf
// for(i=0; i<countries.length; i++){
//     console.log(`${countries[i][0]}${countries[i][1]}${countries[i][2]}`.toUpperCase())
// }


// array e elave etmek 
// let cities = ["Baku", "London", "Kiyev"]
// cities[cities.length] = "Paris"
// cities[3] = "Odessa"
// cities.push("Istanbul")
// console.log(cities)


// array copy
// let cities1 = ["Baku", "London", "Kiyev"]
// let cities2 = cities1;
//     console.log(cities2);


// array sum
// let numbers = [ -1, 2, 0, -3, 5]
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum)


// hasil - cem
// let numbers = [ -1, 2, 1, -3, 5]
// let sum = 0;
// let hasil = 1;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//     hasil *= numbers[i];
// }
// console.log(hasil - sum)


// 6 menfi ededler
// let numbers = [ -1, 2, 1, -3, 5]
// for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] < 0) {
//          console.log(numbers[i])  
//         }
//     }


 
// 7 2 array birlesdirme
// let array1 = ["Fezile", "Seher", "Leyla"]
// let array2 = ["Sunay", "Shamil"]
// for (i = 0; i < array2.length; i++){
//     array1.push(array2[i])
// }
// console.log(array1)


 
// 2 arrayden ortaq olanlari basqa array e cap et
// arrray3 ile
// let array1 = [12, 15, 8, 9]
// let array2 = [8, 11, 9, 7]
// let array3 = [];
// for(i = 0; i < array1.length; i++){
//     for(j = 0; j < array2.length; j++) {
//         if( array1[i] === array2[j]){
//             array3.push(array1[i])
//         }
//     }
// }
// console.log(array3);


// arrayde ortaqlari tapmaq
// let array1 = [12, 15, 8, 9]
// let array2 = [8, 11, 9, 7]
// for(i = 0; i < array1.length; i++){
//     for(j = 0; j < array2.length; j++) {
//         if( array1[i] === array2[j]) {
//             console.log(array1[i])        
//         }
//     }
// }



// 2. max number
let number = [12, 15, 8, 9, 4, 8, 11, 2]
let max;
max = number[0]
for(i = 1; i < number.length; i++)
{
    if(number[i] > max)
    {
       max = number[i]
    }
}
    console.log(max)


//  en cox simvol olan sozu tap
let arr = ['Russian', 'Azerbaijan', 'Fransa'];
 
let lgth = 0;
let longest;
 
for(let i = 0; i < arr.length; i++)
{
if (arr[i].length > lgth)
{
    lgth = arr[i].length;
    longest = arr[i];
}
}
console.log(longest);
