const mongoose = require('mongoose');
const slugify = require('slugify');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        require: [
            true,
            'Please add a name'
        ],
        maxLength: [
            500,
            'Name can not be more than 500 characters'
        ]
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please usr a valid url with HTTP orHTTPS'
        ]
    },
    phone: {
        type: String,
        maxLength: [20, 'Name can not be more than 20 characters']
    },
    email: {
        type: String,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            'Please add a valid email'
        ]
    },
    address: {
        type: String,
        require: [
            true,
            'Please add an address'
        ],
    },
    // location : {
    //     // GeoJSON Point
    //     type: {
    //         type: String, // Don't do `{ location: { type: String } }`
    //         enum: ['Point'], // 'location.type' must be 'Point'
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true,
    //         index : '2dsphere'
    //     },
    //     formattedAddress: String,
    //     street: String,
    //     city: String,
    //     state: String,
    //     zipcode: String,
    //     country: String,
    // },
    careers: {
        // Array of Strings
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Business'
        ]

    },
    averageRating: {
        type: String,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating can not be more than 10'],
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false,
    },
    jobAssistance: {
        type: Boolean,
        default: false,
    },
    jobGuarantee: {
        type: Boolean,
        default: false,
    },
    acceptGi: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

// Create bootcamp slug from the name
BootcampSchema.pre('save', function (next) {
    console.log('Slugify ran', this.name);
    this.slug = slugify(this.name, {lower: true})
    next();
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
