import "./styles/index.scss"

const elvenShieldRecipe ={
    letherStrips:2,
    ironIngor:1,
    refinedMoonstone: 4
}

const elvenGaunletsRecipe ={
    ...elvenShieldRecipe,
    leather : 1,
    refinedMoonstone: 4,

}

console.log(elvenShieldRecipe)
console.log(elvenGaunletsRecipe)

