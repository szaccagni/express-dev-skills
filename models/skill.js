const skills = [
    {id: 1, skill: 'strategizing', level: 10, description: 'devise a strategy or strategies'},
    {id: 2, skill: 'problem solving', level: 10, description: 'the process of finding solutions to difficult or complex issues'},
    {id: 3, skill: 'public speaking', level: 1, description: 'the act or process of making speeches in public'},
    {id: 4, skill: 'JavaScript', level: 6, description: 'an object-oriented computer programming language commonly used to create interactive effects within web browsers'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = skills[skills.length - 1].id+1
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx,1)
}