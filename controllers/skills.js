const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new : newSkill,
    create,
    delete : deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Detail'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add a Skill'
    })
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        title: 'Edit'
    })
}

function update(req, res) {
    Skill.updateOne(req.body)
    res.redirect(`/skills/%20${req.params.id}`)
}