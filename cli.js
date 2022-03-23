#!/usr/bin/env node
const { default: caz } = require('caz')
// template root
const template = __dirname
// project directory
const project = process.argv[2]
// scaffolding by caz...
caz(template, project).catch(console.error)
