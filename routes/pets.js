const router = require('express').Router()
const path = require('path')
const { writeFileSync, readFileSync } = require('fs')
const dataPath = path.join(__dirname, '..', 'data', 'pets.json')
const { generateId } = require('../utils/generateId')
const readAndParseFile = require('../utils/readAndParseFile')

console.log('dataPath', dataPath)

// API Routes
router.get('/all-pets', (req, res) => {
  const pets = readAndParseFile(dataPath)
  res.json(pets)
})

// ?name=Ivy Query Parameter
router.get('/search-pets', (req, res) => {
  const pets = readAndParseFile(dataPath)
  const searchedName = req.query.name
  const results = pets.filter(pet => {
    const formattedSearchedName = searchedName.toLowerCase().trim()
    const formattedPetName = pet.name.toLowerCase().trim()
    return formattedPetName.includes(formattedSearchedName)
  })
  res.json(results)
})

// URL parameter
router.get('/pet/:id', (req, res) => {
  const id = parseFloat(req.params.id)
  const foundPet = pets.find(pet => pet.id === id)
  res.json(foundPet)
})

router.post('/create-pet', async (req, res) => {
  if (!req.body || !req.body.name || !req.body.age || !req.body.type) {
    return res.status(400).json('We need a name, age, and type')
  }

  // read and parse the file contens
  const pets = readAndParseFile(dataPath)

  console.log(pets)

  // add new data to the array
  const newPet = {
    ...req.body,
    id: generateId()
  }

  pets.push(newPet)
  
  // save file
  writeFileSync(dataPath, JSON.stringify(pets, null, 2))

  res.status(201).json(newPet)
})

module.exports = router