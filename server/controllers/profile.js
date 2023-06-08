const firebase = require("./../config/firebase")
const admin = require("../config/admin");
const db = admin.firestore();
const fs = require('fs')
const shortid = require("shortid");
const axios = require('axios')
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'zeitgeist.pr@iitrpr.ac.in', // generated ethereal user
        pass: 'jozukfptllgqkvop'  // generated ethereal password
    }
});

exports.addUserDetail = async(req, res) => {
    try {
        const id = req.body.email;
        const userJson = {
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            YearOfPassing: req.body.YearOfPassing,
            gender: req.body.gender,
            phone: req.body.phone,
            collegeName: req.body.collegeName,
            collegeState: req.body.collegeState,
            referral_code: "CA-" + shortid.generate(),
            invites: 0,
            points: 0
        };
        const doc = await db.collection("CA").doc(id).get();
        if (doc.exists) {
            return res.status(200).json({ "message": "You have already registered for CAMPUS AMBASSADOR program" });
        }

        const response = await db.collection("CA").doc(id).set(userJson);
        console.log("updated successfully");

        let mailOptions = {
            from: '"Zeitgeist" <zeitgeist.pr@iitrpr.ac.in>',
            to: req.body.email,
            subject: 'Successful Registeration for Campus Ambassador Program',
            html: `
              <p>Dear ${req.body.name},</p>
              <p>Congratulations on your successful registration for the Campus Ambassador program for Zeitgeist 2k23! We are thrilled to have you on board and look forward to your journey with us.</p>
              <p>We wish you the best of luck and encourage you to give your best and earn exciting prizes. </p>
              <p>Best regards,</p>
              <p><b>Zeitgeist 2022 Public Relations Team</b></p>
            `
          };
          
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
        res.status(200).json({"Message": "You are registered for CAMPUS AMBASSADOR program" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getUserDetail = async(req, res) => {
    try {
        const snapshot = await db.collection("CA").get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        list.sort((a, b) => (a.points > b.points ? -1 : 1));
        var temp
        list.forEach(async(element, i) => {
            if (element.email === req.body.id) {
                temp = element;
                const element2 = {...element, rank: i + 1 };
                res.status(200).json(element2);
            }
        })
        if (temp === undefined || temp === null) { res.status(400).json("not found") }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.leaderBoard = async(req, res) => {
    try {
        const snapshot = await db.collection("CA").get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(list);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
exports.phoneUpdate = async(req, res) => {
    try {
        db.collection("CA").doc(req.body.email).update({ 'phone': req.body.phone });
        res.status(200).send("Phone Updated successfully");
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}