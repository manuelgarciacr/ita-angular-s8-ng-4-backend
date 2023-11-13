const {Schema, model, Types} = require('mongoose');

// Workaround bug. An empty String causes validation error when the field is required
Schema.Types.String.checkRequired(v => v != null);

const featureSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    feature: {
        type: Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Feature', featureSchema);