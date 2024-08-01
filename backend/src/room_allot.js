const express = require('express');
const router = express.Router();
const db = require('./db'); 

/*
Schema:
CREATE TABLE rooms (
    room_no VARCHAR(5) NOT NULL PRIMARY KEY, -- Primary key in the format A123
    lan_status BOOLEAN,
    electrical BOOLEAN,
    furniture BOOLEAN,
    occupied BOOLEAN,
    leave_room BOOLEAN
);
create table hostel_blocks (
    block_id VARCHAR(255) primary key,
    block_name varchar(255) not null,
    hr_id VARCHAR(255) not null,
    -- store ratings of the block
    rating DECIMAL(3, 1) DEFAULT 0.0
);
*/

// get the block_id's,names in which rooms are available
// for each block_id, 

// function given a block_id,block_name, return the complete JSON object for that block ane 6 floors,each floor in the block has 32 rooms
function getBlockDetails(block_id,block_name){
    let block = {
        block_id: block_id,
        block_name: block_name,
        floor1: [],
        floor2: [],
        floor3: [],
        floor4: [],
        floor5: [],
        floor6: []
    }
    for(let i=1;i<=6;i++){
        let floor = "floor"+i;
        for(let j=1;j<=32;j++){
            // if j is less than 10, add a 0 before it
            if(j<10){
                j = "0"+j;
            }
            let room_no = block_id + i + j;
            block[floor].push(room_no);
        }
    }
    return block;
}

router.get('/',(req,res)=>{
    // return JSON like this , fixed 6 floors
    /**
     * [
     *  {
     *    block_id: "A",
     *    block_name: "A Block",
     *    floor1: [ "A101", "A102", "A103", "A104", "A105" ], //available rooms in floor 1
     *   floor2: [ "A201", "A202", "A203", "A204", "A205" ] //available rooms in floor 2
     *   floor3: [ "A301", "A302", "A303", "A304", "A305" ] //available rooms in floor 3
     *  floor4: [ "A401", "A402", "A403", "A404", "A405" ] //available rooms in floor 4
     * floor5: [ "A501", "A502", "A503", "A504", "A505" ] //available rooms in floor 5
     *   floor6: [ "A601", "A602", "A603", "A604", "A605" ] //available rooms in floor 6
     * },
     * {
     *  block_id: "B",
     * block_name: "B Block",
     * floor1: [ "B101", "B102", "B103", ],
     * floor2: [ "B201", "B202", "B203", ],
     * }
     * ]
     */
    /**
     * For each block_id, get the rooms that are available
     * A1-first floor,each floor has 32 rooms
     * A2-second floor,each floor has 32 rooms
     * so the room_no will be A101,A102,A103,...,A132, starting with block ID,next 2 digits are floor number,next 2 digits are room number
     */
    console.log("Room allotted page visited");
    let blocks = [];
    let block_ids = [];
    // get all the block id's and names, pass them to getBlockDetails function, append the result to blocks array
    db.query("SELECT block_id,block_name FROM hostel_blocks",(err,rows)=>{
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else{
            rows.forEach(row=>{
                blocks.push(getBlockDetails(row.block_id,row.block_name));
            });
            // res.json(blocks);
        }
    });
    // the rooms contain that are occupied, so remove them from the list
    db.query("SELECT room_no FROM rooms WHERE occupied=1",(err,rows)=>{
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else{
            rows.forEach(row=>{
                let room_no = row.room_no;
                let block_id = room_no[0];
                let floor = room_no[1];
                let room = room_no.slice(2);
                // remove the room from the block
                blocks.forEach(block=>{
                    if(block.block_id == block_id){
                        let floor_no = "floor"+floor;
                        let index = block[floor_no].indexOf(room_no);
                        if(index!=-1){
                            block[floor_no].splice(index,1);
                        }
                    }
                });
            });
            res.json(blocks);
        }
    });
})

// post request to allot a room to a student, first delete the room_no from the rooms table, then insert new entry. Then update the users db
router.post('/',(req,res)=>{
    let id = req.body.id;
    let room_no = req.body.roomNumber;
    console.log(req.body)
    // delete the room_no from the rooms table
    db.query("DELETE FROM rooms WHERE room_no=?",[room_no],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else{
            // insert the new entry
            db.query("INSERT INTO rooms (room_no,lan_status,electrical,furniture,occupied,leave_room) VALUES (?,?,?,?,?,?)",[room_no,1,1,1,1,0],(err,result)=>{
                if(err){
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                }
                else{
                    // update the users table
                    db.query("UPDATE users SET room_number=? WHERE id=?",[room_no,id],(err,result)=>{
                        if(err){
                            console.log(err);
                            res.status(500).send("Internal Server Error");
                        }
                        else{
                            res.json({message: "Room allotted successfully"});
                        }
                    });
                }
            });
        }
    });
});


module.exports = router;