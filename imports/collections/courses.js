import { Mongo } from 'meteor/mongo';

// const uri = "mongodb+srv://rdoherty@lions.molloy.edu:10547238@advisingmolloydb-b0iqm.mongodb.net/test?retryWrites=true&w=majority";

 export const Courses = new Mongo.Collection('courses');
