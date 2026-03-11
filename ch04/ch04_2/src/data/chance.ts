import {Chance} from 'chance'

const chance = new Chance()

export const randomUuid = () => chance.guid()
export const randomName = () => chance.name()
export const randomEmail = () => chance.email()
// 페이스북 ID
export const randomId = () => chance.fbid()
export const randomJobTitle = () => chance.profession()
export const randomCompanyName = () => chance.company()
export const randomSentence = (words = 5) => chance.sentence({words})
export const randomTitleText = (words = 3) => chance.sentence({words})
export const randomParagraphs = (sentences = 3) => chance.paragraph({sentences})
