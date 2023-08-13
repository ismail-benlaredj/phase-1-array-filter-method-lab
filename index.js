// Code your solution here
const findMatching = (drivers, name) => drivers.filter(e => e.toLowerCase() === name.toLowerCase())
const fuzzyMatch = (drivers, str) => drivers.filter(e => e.slice(0, str.length) === str)
const matchName = (drivers, name) => drivers.filter(e => e.name === name)