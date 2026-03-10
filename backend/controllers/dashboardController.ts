import { Request, Response } from "express";
import { Employee } from "../models/Employee";
import { Attendance } from "../models/Attendance";

export const getDashboardSummary = async (req: Request, res: Response) => {
  try {
    const totalEmployees = await Employee.countDocuments();
    
    // Get today's date in YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    
    const todayAttendance = await Attendance.find({ date: today });
    const presentToday = todayAttendance.filter(a => a.status === "Present").length;
    const absentToday = todayAttendance.filter(a => a.status === "Absent").length;

    res.json({
      totalEmployees,
      presentToday,
      absentToday,
      unmarkedToday: totalEmployees - (presentToday + absentToday)
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dashboard summary" });
  }
};
