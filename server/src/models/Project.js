const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true, index: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: '' },
    status: {
      type: String,
      enum: ['planning', 'active', 'on_hold', 'completed'],
      default: 'planning',
    },
    startDate: { type: Date, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

projectSchema.virtual('client', {
  ref: 'Client',
  localField: 'clientId',
  foreignField: '_id',
  justOne: true,
});

module.exports = mongoose.model('Project', projectSchema);