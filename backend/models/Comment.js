const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
