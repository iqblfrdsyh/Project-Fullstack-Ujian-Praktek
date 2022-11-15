import mongoose from "mongoose";

const Employee = mongoose.Schema(
    {
        employeeName: String,
        position: String,
        skill: String,
    }
)

export default mongoose.model("employee", Employee);
