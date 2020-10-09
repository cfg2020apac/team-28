var express = require('express');
var router = express.Router();
const {db} = require('../db');
// const cors = require("cors");
// app.use(cors());



router.post('/applyevent', async function (req,res) {
    var description=req.body.description;
    var owner=req.body.owner;
    var startdate=req.body.startdate;
    var enddate= req.body.enddate;
    var agemin=req.body.agemin;
    var eventname=req.body.eventname;
    var eventstatus="pending";

    await db.collection("Events").doc().set({
            description: description,
            owner: owner,
            startdate: startdate,
            enddate:enddate,
            agemin:agemin,
            eventstatus:eventstatus,
            eventname:eventname
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        returnObj.success = false;
        console.error("Error adding document: ", error);
    });






})
router.post('/applyvolunteer', async function (req,res) {
    var owner=req.body.owner;

    await db.collection("EventVolunteer").doc().set({
        owner: owner,
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        returnObj.success = false;
        console.error("Error adding document: ", error);
    });

});

router.post('/applyitems', async function (req,res) {
    var owner=req.body.owner;

    await db.collection("EventItems").doc().set({
        owner: owner,
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        returnObj.success = false;
        console.error("Error adding document: ", error);
    });

});
router.get('/manage', async function (req, res){
    const eventCollection = db.collection('Events');
    const pendingEvents = await eventCollection.where("eventstatus", "=", "pending");

    if(pendingEvents.empty){
        console.log('No matching document');
    } else {
        return res.send("No matching event is found!").status(200);
    }

    var eventList = {
        success: ture,
        list: []
    }

    pendingEvents.forEach(doc=>{
            const data={
                description:  doc.description,
                owner:        doc.owner,
                startdate:    doc.startdate,
                enddate:      doc.enddate,
                agemin:       doc.agemin,
                eventstatus:  doc.eventstatus,
                eventname:    doc.eventname
            };

            eventList.list.concat(data);
        }
    )

    return eventList;
});




module.exports = router;