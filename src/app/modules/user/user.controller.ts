import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  getAllFromDB,
  createStudent,
  createFaculty,
  createAdmin,
  getByIdFromDB
};
