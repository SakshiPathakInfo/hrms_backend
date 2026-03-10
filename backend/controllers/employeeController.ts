import { Request, Response } from "express";
import { Employee } from "../models/Employee";
import { Attendance } from "../models/Attendance";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

export const createEmployee = async (req: Request, res: Response): Promise<any> => {
  try {
    const { employeeId, fullName, email, department } = req.body;
    
    // Basic validation
    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existing = await Employee.findOne({ employeeId });
    if (existing) {
      return res.status(400).json({ error: "Employee ID already exists" });
    }

    const employee = new Employee({ employeeId, fullName, email, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Employee ID already exists" });
    }
    res.status(400).json({ error: error.message || "Failed to add employee" });
  }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<any> => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    // Delete associated attendance records
    await Attendance.deleteMany({ employeeId: employee.employeeId });
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete employee" });
  }
};
