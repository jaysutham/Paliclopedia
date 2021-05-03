const monsterData = require('../../Data/monsters.json');

exports.seed = function (knex) {
    const monsterArr = [];
    for (const monster of monsterData){
        const id = monster.id
        const name = monster.name
        const description = monster.description

        const ailment = []
        if (monster.ailments[0] !== undefined){
        for(const ail of monster.ailments){
            if (ail.recovery.items[0] !== undefined){
                ailment.push(`Ailment: ${ail.name}. Recovery: ${ail.recovery.items[0].name}`)
            } else {
                ailment.push(`Ailment: ${ail.name}. Recovery: N/A`)
            }
            
        }}

        const resistance = []
        if (monster.resistances[0] !== undefined){
        for(const res of monster.resistances){
            resistance.push(`Element: ${res.element}. Condition: ${res.condition}`)
        }}

        const weakness = []
        if (monster.weaknesses[0] !== undefined){
        for(const weak of monster.weaknesses){
            weakness.push(`Element: ${weak.element}, ${weak.stars}`)
        }}

        // const ailment = JSON.stringify(ailmentArr);
        // const resistance = JSON.stringify(resistanceArr);
        // const weakness = JSON.stringify(weaknessArr);

        monsterArr.push({
            id,
            name,
            description,
            ailment,
            resistance,
            weakness,
        })
    }

    return knex('monster')
    .del()
    .then(function () {
        return knex('monster').insert(monsterArr)
    })
}