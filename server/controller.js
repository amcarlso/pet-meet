module.exports = {
  getAllAnimals: (req, res) => {
    const db = req.app.get('db')

    db.get_animals()
    .then(response => res.status(200).send(response))
    .catch( err => {
      res.status(500).send({errorMessage: 'could not get animals'})
      console.log(err)
    })
  },
  newAnimal: (req, res) => {
    const db = req.app.get('db')
    let {name, price, url} = req.body

    db.new_animal({name: name, price: price, url: url})
    .then(response => {res.status(200).send(response)})
    .catch(err => {
      res.status(500).send({errorMessage: 'could not add animal'})
      console.log(err)
    })
  },
  getUser: (req, res) => {
    const db = req.app.get('db')
    let {id} = req.params;
    db.get_user({id})
    .then(response => {res.status(200).send(response)})
    .catch(err => {
      res.status(500).send({errorMessage: 'could not get user'})
      console.log(err)
    })
  },
  getUsers: (req, res) => {
    const db = req.app.get('db')

    db.get_users()
    .then(response => {res.status(200).send(response)})
    .catch(err => {
      res.status(500).send({errorMessage: 'could not get users'})
      console.log(err)
    })
  }
}