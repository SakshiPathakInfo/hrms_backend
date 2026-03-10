import { Request, Response } from "express";
import { Attendance } from "../models/Attendance";
import { Employee } from "../models/Employee";

export const getAttendance = async (req: Request, res: Response) => {
  try {
    const { date, employeeId } = req.query;
    const filter: any = {};
    if (date) filter.date = date;
    if (employeeId) filter.employeeId = employeeId;

    const records = await Attendance.find(filter).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendance records" });
  }
};

export const markAttendance = async (req: Request, res: Response): Promise<any> => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if employee exists
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    // Upsert attendance record
    const record = await Attendance.findOneAndUpdate(
      { employeeId, date },
      { status },
      { new: true, upsert: true }
    );

    res.json(record);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to mark attendance" });
  }
};
