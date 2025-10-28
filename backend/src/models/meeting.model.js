import mongoose, { Schema } from 'mongoose'

const meetingSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    meetingCode: {
      type: String,
    },
    date: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true }
)

const Meeting = mongoose.model('meeting', meetingSchema)

export { Meeting }
