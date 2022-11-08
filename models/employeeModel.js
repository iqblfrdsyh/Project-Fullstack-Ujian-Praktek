import mongoose from "mongoose";

const Employee = mongoose.Schema(
    {
        employeeName: String,
        position: String,
        salary: Number,
    },
    {
        collection: "employees"
    }
)

export default mongoose.model("employee", Employee);
