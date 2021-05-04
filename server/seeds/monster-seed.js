const monsterData = require('../../Data/monsters.json');

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

exports.seed = function (knex) {
    const monsterArr = [];
    for (const monster of monsterData){
        const id = monster.id
        const name = monster.name
        const type = monster.species
        const description = monster.description

        const ailment = []
        if (monster.ailments[0] !== undefined){
        for(const ail of monster.ailments){
            if (ail.recovery.items[0] !== undefined){
                ailment.push(` ${ail.name}, Bring: ${ail.recovery.items[0].name}`)
            } else {
                ailment.push(`${ail.name}, Bring: N/A`)
            }
            
        }}

        const resistance = []
        if (monster.resistances[0] !== undefined){
        for(const res of monster.resistances){
            resistance.push(`${capitalize(res.element)}, Condition: ${res.condition}`)
        }}

        const weakness = []
        if (monster.weaknesses[0] !== undefined){
        for(const weak of monster.weaknesses){
            weakness.push(`${capitalize(weak.element)} ${weak.stars}`)
        }}

        const location = []
        for(const local of monster.locations){
            location.push(`${local.name} - ${local.zoneCount}`)
        }

        // const ailment = JSON.stringify(ailmentArr);
        // const resistance = JSON.stringify(resistanceArr);
        // const weakness = JSON.stringify(weaknessArr);

        monsterArr.push({
            id,
            name,
            type,
            description,
            ailment,
            resistance,
            weakness,
            location,
        })
    }

    return knex('monster')
    .del()
    .then(function () {
        return knex('monster').insert(monsterArr)
    })
}