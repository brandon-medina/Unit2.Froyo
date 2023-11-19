const froyo = {
flavors: ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"],
}
console.log(froyo.flavors)

function countValue(froyo){
    return froyo * 1;
}


function mapOrder(elements) {
    const map = {};
    for (let i = 0; i < elements.length; i++) {
      if (map[elements[i]]) {
        map[elements[i]]++;
      } else {
        map[elements[i]] = 1;
      }
    }
    return map;
  }
  
  console.log("mapOrder result: ", mapOrder(froyo.flavors));

  let inputFroyo = prompt('enter the flavors of froyo that you would like to have');
  let flavors = mapOrder(froyo);
  let output = createMessage(froyo, flavors);
  console.log(output);
