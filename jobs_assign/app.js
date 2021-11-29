const express = require('express')
const mongoose = require('mongoose')


const connect=()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/Jobs")
} 

const app = express()
app.use(express.json())


//--------------CITY SCHEMA----------------

const citySchema = new mongoose.Schema({
    city_name:{type:String , required:true},
})

const City = mongoose.model("city",citySchema)

//-----------JOBS SCHEMA---------------------

const job_det_Schema = new mongoose.Schema({
    job_name:{type:String , required:true},

    city_id:{
        type:mongoose.Schema.Types.ObjectId,
       ref:"city",
       required:true
    },
   company_id:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"company",
       required:true
   },
   rating_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rating",
        required:true 
   },
   skill_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"skill",
        required:true
   },
   work_from_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"job_type",
        required:true
   },
   notice_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"notice",
        required:true 
   }
})
const Job = mongoose.model("job_detail",job_det_Schema)

//-----------COMPANY SCHEMA------------------

const companySchema = new mongoose.Schema({
    company_name:{type:String , required:true},
    comapany_details:{type:String , required:true},
    Openings:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"opening",
        required:true
    }
})

const Company = mongoose.model("company",companySchema)

//--------------JOB-type-SCHEMA--------------------

const job_type_schema = new mongoose.Schema({
    job_type:{type:String   , required:true}
}) 
const Job_type = mongoose.model("job_type",job_type_schema)

//--------------SKILL-SCHEMA--------------------

const skillSchema = new mongoose.Schema({
    skill_name:{type:String , required:true},
})
const Skill = mongoose.model("skill",skillSchema)

//---------------NOTICE-SCHEMA-----------------

const noticeSchema = new mongoose.Schema({
    notice_period_month:{type:Number , required:true}
})
const Notice = mongoose.model("notice", noticeSchema)

//----------------JOB-OPEINGS-SCHEMA---------------------

const opening_schema = new mongoose.Schema({
    Openings:{type:Number , required:true}
})
const Opening = mongoose.model("opening",opening_schema)

//------------------RATING-SCHEMA------------

const ratingSchema = new mongoose.Schema({
    Rating:{type:Number , required:true}
})
const Rating = mongoose.model("rating",ratingSchema)

//----------CRUD OPERATION BEGINS-------------------------------------------------------------------


//CITY CRUD----

app.post("/city",async(req,res)=>{
    try {
        const city = await City.create(req.body)
        res.status(201).send(city)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/city",async(req,res)=>{
    try {
        const city = await City.find().lean().exec()
        res.status(201).send(city)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/city/:id",async(req,res)=>{
    try {
        const city = await City.findById(req.params.id).lean().exac()
        res.status(201).send(city)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/city/:id",async(req,res)=>{
    try {
        const city = await City.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(city)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/city/:id",async(req,res)=>{
    try {
        const city = await City.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(city)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

//----JOBS_det_CRUD------


app.post("/jobs",async(req,res)=>{
    try {
        const job = await Job.create(req.body)
        res.status(201).send(job)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/jobs",async(req,res)=>{
    try {
        const job = await Job.find().populate(["city_id","company_id","rating_id","skill_id","work_from_id","notice_id"]).lean().exec()
        res.status(201).send(job)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/jobs/:id",async(req,res)=>{
    try {
        const job = await Job.findById(req.params.id).lean().exac()
        res.status(201).send(job)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/jobs/:id",async(req,res)=>{
    try {
        const job = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(job)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/jobs/:id",async(req,res)=>{
    try {
        const job = await Job.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(job)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

//----Company Crud---


app.post("/company",async(req,res)=>{
    try {
        const company = await Company.create(req.body)
        res.status(201).send(company)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/company",async(req,res)=>{
    try {
        const company = await Company.find().lean().exec()
        res.status(201).send(company)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/company/:id",async(req,res)=>{
    try {
        const company = await Company.findById(req.params.id).lean().exac()
        res.status(201).send(company)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/company/:id",async(req,res)=>{
    try {
        const company = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(company)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/company/:id",async(req,res)=>{
    try {
        const company= await Company.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(company)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

//----JOB-type-CRUD-----


app.post("/jobType",async(req,res)=>{
    try {
        const jobType = await Job_type.create(req.body)
        res.status(201).send(jobType)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/jobType",async(req,res)=>{
    try {
        const jobType = await Job_type.find().lean().exec()
        res.status(201).send(jobType)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/jobType/:id",async(req,res)=>{
    try {
        const jobType = await Job_type.findById(req.params.id).lean().exac()
        res.status(201).send(jobType)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/jobType/:id",async(req,res)=>{
    try {
        const jobType = await Job_type.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(jobType)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/jobType/:id",async(req,res)=>{
    try {
        const jobType = await Job_type.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(jobType)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})
//---SKILL CRUD---

app.post("/skill",async(req,res)=>{
    try {
        const skill = await Skill.create(req.body)
        res.status(201).send(skill)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/skill",async(req,res)=>{
    try {
        const skill = await Skill.find().lean().exec()
        res.status(201).send(skill)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/skill/:id",async(req,res)=>{
    try {
        const skill = await Skill.findById(req.params.id).lean().exac()
        res.status(201).send(skill)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/skill/:id",async(req,res)=>{
    try {
        const skill = await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(skill)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/skill/:id",async(req,res)=>{
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(skill)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

//----notice Crud---

app.post("/notice",async(req,res)=>{
    try {
        const notice = await Notice.create(req.body)
        res.status(201).send(notice)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/notice",async(req,res)=>{
    try {
        const notice = await Notice.find().lean().exec()
        res.status(201).send(notice)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/notice/:id",async(req,res)=>{
    try {
        const notice = await Notice.findById(req.params.id).lean().exac()
        res.status(201).send(notice)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/notice/:id",async(req,res)=>{
    try {
        const notice = await Notice.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(notice)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/notice/:id",async(req,res)=>{
    try {
        const notice = await Notice.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(notice)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

//------rating crud---------

app.post("/rating",async(req,res)=>{
    try {
        const rating = await Rating.create(req.body)
        res.status(201).send(rating)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/rating",async(req,res)=>{
    try {
        const rating = await Rating.find().lean().exec()
        res.status(201).send(rating)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/rating/:id",async(req,res)=>{
    try {
        const rating = await Rating.findById(req.params.id).lean().exac()
        res.status(201).send(rating)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/rating/:id",async(req,res)=>{
    try {
        const rating = await Rating.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(rating)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/rating/:id",async(req,res)=>{
    try {
        const rating = await Rating.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(rating)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

//-------job opening crud-----

app.post("/openings",async(req,res)=>{
    try {
        const openings = await Opening.create(req.body)
        res.status(201).send(openings)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/openings",async(req,res)=>{
    try {
        const openings = await Opening.find().lean().exec()
        res.status(201).send(openings)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.get("/openings/:id",async(req,res)=>{
    try {
        const openings = await Opening.findById(req.params.id).lean().exac()
        res.status(201).send(openings)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.patch("/openings/:id",async(req,res)=>{
    try {
        const openings = await Opening.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(201).send(openings)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

app.delete("/openings/:id",async(req,res)=>{
    try {
        const openings = await Opening.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(openings)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})


//-------custom api ---

app.get("/getMatchedJobs", async(req,res)=>{
    const ans = await Job.find({},{job_name:1}).lean().exec()
    res.send(ans)
})

app.get("/workfrmhome", async(req,res)=>{
    const ans = await Job.find({},{work_from_id:1}).populate("work_from_id").lean().exec()
    res.send(ans)
})

app.get("/noticePeriod", async(req,res)=>{
    const ans = await Job.find({},{notice_id:1}).populate("notice_id").lean().exec()
    res.send(ans)
})

app.get("/sortedJobs", async(req,res)=>{
    const ans = await Job.find().populate({path:"rating_id",options:{sort:"Rating"}}).lean().exec()
    res.send(ans)
})

app.get("/companyDetails", async(req,res)=>{
    const ans = await Company.find({},{Openings:0}).lean().exec()
    res.send(ans)
})

app.get("/MostJobs", async(req,res)=>{
    const ans = await Opening.find().lean().exec()
    res.send(ans)
})
























app.listen(2333,async(req,res)=>{
    await connect()
    console.log("listening on port 2333")
})
