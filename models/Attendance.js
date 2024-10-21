const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "employee", 
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now 
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late'], 
    required: true
  },
  checkInTime: {
    type: Date 
  },
  checkOutTime: {
    type: Date
  },
  notes: {
    type: String 
  }
});

module.exports = Attendance = mongoose.model("attendance", AttendanceSchema);
