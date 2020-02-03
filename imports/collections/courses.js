import { Mongo } from 'meteor/mongo';
import { DDP } from 'meteor/ddp-client';

export const Courses = new Mongo.Collection('courses');
