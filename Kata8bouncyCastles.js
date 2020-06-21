// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  let vSphere = 0;
  vSphere = (4/3)*PI*(radius*radius*radius)
  return vSphere
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let vCone = 0;
  vCone = PI*(radius*radius)*(height/3)
  return vCone
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let vPrism = 0;
  vPrism = height*width*depth
  return vPrism
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total = 0;
  for(const solid of solids) {
  if (solid.type === 'sphere') {
     total += sphereVolume(solid.radius)
  } else if (solid.type === 'cone') {
    total += coneVolume(solid.radius, solid.height)
  } else {
    total += prismVolume(solid.height, solid.width, solid.depth)
  }
  }
  return total
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
