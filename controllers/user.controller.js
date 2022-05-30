//3rd page -- 
const { User } = require('../models'); //model used for how data are stroded into data base 

const createUser = async (req, res) => { //here we shows the response as a json formate after calling api
    console.log(req.body);
    await User.create(req.body).then((response) => {
        console.log("respon se ", response)//below this i have to write the things that i want to show as a response
        res.sendStatus(201);  //it is mandatory otherwise api request will not ended
    }).catch(error => {
        console.log("respon se ", error)
        res.sendStatus(400);
    })
}

const getAllUser = async (req, res) => { //here we shows the response as a json formate after calling api
    console.log(req.body);
    await User.findAll().then((response) => {
        console.log("respon se ", response)//below this i have to write the things that i want to show as a response
        res.json(response); 
    }).catch(error => {
        console.log("respon se ", error)
        res.sendStatus(400);
    })
}

const getUserByID = async (req, res) => { //this is path param
    console.log(req.body);
    await User.findOne({
        where: {
            userId: req.params.id // ---- id   path param (taking input from api url)
        }
    }).then((response) => {
        console.log("respon se ", response)//below this i have to write the things that i want to show as a response
        res.json(response); 
    }).catch(error => {
        console.log("respon se ", error)
        res.sendStatus(400);
    })
}

const updateUserByID = async (req, res) => { 
    console.log(req.body);
    await User.findOne(
        { where: { userId: req.params.id }} // ---- id   path param (taking input from api url)
        ).then(record => {
  
            if (!record) {
              throw new Error('No record found')
            }

            let values = {
                // lastName: req.body.lastName,
                ...req.body
               
              }

              record.update(values).then( updatedRecord => {
                console.log(`updated record ${JSON.stringify(updatedRecord)}`)
                // Go into your DB and confirm update
                res.json({message: "data successfully updated", data: updatedRecord}); 
              })

        })
    
    .catch(error => {
        console.log("respon se ", error)
        res.status(400).send({message: error.message});
    })
}


const deleteUserByID = async (req, res) => { 
    console.log(req.body);

    await User.destroy({
        where: {
            userId: req.params.id
        }
    }).then( deletedRecord => {

        if (!deletedRecord) {
                      throw new Error('No record found')
                    }

                console.log(`Deleted record ${JSON.stringify(deletedRecord)}`)
                // Go into your DB and confirm Deleted data
                res.json({message: "Data Deleted successfully", data: deletedRecord}); 
              })
    
    .catch(error => {
        console.log("respon se ", error)
        res.status(400).send({message: error.message});
    })
}



const isUserExist = async (req, res) => { 

    console.log(req.query)
    const phoneNumber = req.query.phone; // passing as query params
    const email = req.query.email;
    let whereCond = {}
    if(phoneNumber) {
        whereCond = {
            phoneNumber: phoneNumber
        }
    }
    if(email) {
        whereCond = {
            email: email
        }
    }
       await User.count({ where: whereCond })
        .then(count => {
            console.log(count)
            if(count > 0) {
                res.json({success: true, message: "user exist"}); 
            } else {
                res.json({success: false, message: "user not exist"}); 
            }
        }).catch(error => {
            console.log("respon se ", error)
            res.status(400).send({message: error.message});
        })

}




module.exports = {
    createUser,
    getAllUser,
    getUserByID,
    updateUserByID,
    deleteUserByID,
    isUserExist
}