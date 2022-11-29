const Bootcamp = require('../models/Bootcamp');

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
    const bootcamps = await Bootcamp.find()

    res.status(200).json(
        {
            success: true,
            data: bootcamps,
        }
    )

    // res.status(200).send({'success': true, 'msg': 'Show all Bootcamps',});

}

// @desc Get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {

    res.status(200).send({'success': true, 'msg': 'Show Bootcamp'});
}

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamps = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp,
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            data: e.toString()
        });
    }


}

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).send({'success': true, 'msg': `Update Bootcamp ${req.params.id}`});
}

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).send({'success': true, 'msg': `Delete Bootcamp ${req.params.id}`});
}
