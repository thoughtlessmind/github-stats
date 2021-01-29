/**
 * Extracts and return the languages of the repos from the repos object
 * @param {Array<Object>} repoObj Object of the use repos
 * @returns {Array<String>} Array of languages
 */
const getLanguagesOfRepos = (repoObj = []) => {
  const arr = repoObj.map((repo) => repo.language)
  const filteredArr = [...new Set(arr)].filter(
    (item) => typeof item === 'string'
  )
  return filteredArr || []
}

export default getLanguagesOfRepos
