const mongodb = require('mongodb')

const BootcampSchema = new mongoose.Schema({


    name: {
        type:String ,
        required: [true,"Please add a name"],
        unique:true,
        trim:true,
        maxlength:[50,"NO MOre than 50"]
    },
    slug:String,
    

    description:{
        type :String,
        required : true,

        maxlength:[500,"No 500 or more"]
    },
    

    url:{
        type :String,
     
        match:[]

     
    },
    pohne:{
        type :String,
     maxlength:[13,"Invlaid "]

     
    },
    email:{
        type :String,
       
        match:[]

     
    },
    address:{
        type :String,
        required :[ true,"Insert please"],
       

     
    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true,
            index:'2dsphere'
          },
          formattedAddress:String,
          street:String,
          zipcode:String

       
     
    },
    careers:{
        type:[String],
        required:true,
        enum:[
            'Web',
            'Mobile',
            'UI/UX',
            'Data',
            'Business',
            'Other'

        ]
    },

    averageRating:{
        type:Number,
        minlength:[1,"Atleast 1"],
        maxlength:[10,'Max 10']

    },

    averageCost:String,

    photo:{
        type:String,
        default:"nodefault.png"
    },
    housing: {
        type: Boolean,
        default: false
      },
      jobAssistance: {
        type: Boolean,
        default: false
      },
      jobGuarantee: {
        type: Boolean,
        default: false
      },
      acceptGi: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    //   user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: true
    //   }
    // },
    // {
    //   toJSON: { virtuals: true },
    //   toObject: { virtuals: true }
    // }
    });
    module.exports = mongoose.model('Bootcamp',BootcampSchema)
  


    




