import db from '../config/connection.js';
import { School, Class, Professor } from '../models/index.js';
import cleanDb from './cleanDb.js';
import schoolData from './schoolData.json' with { type: 'json' };
import classData from './classData.json' with { type: 'json' };
import professorData from './professorData.json' with { type: 'json' };
const seedDatabase = async () => {
    try {
        await db();
        console.log('Database connected.');
        await cleanDb();
        console.log('Database cleaned.');
        // Bulk create each model
        const schools = await School.insertMany(schoolData);
        console.log('Schools inserted.');
        const classes = await Class.insertMany(classData);
        console.log('Classes inserted.');
        const professors = await Professor.insertMany(professorData);
        console.log('Professors inserted.');
        for (const newClass of classes) {
            // Randomly add each class to a school
            const tempSchool = schools[Math.floor(Math.random() * schools.length)];
            tempSchool.classes.push(newClass._id);
            await tempSchool.save();
            console.log(`Class ${newClass._id} added to School ${tempSchool._id}.`);
            // Randomly add a professor to each class
            const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
            newClass.professor = tempProfessor._id;
            await newClass.save();
            console.log(`Professor ${tempProfessor._id} added to Class ${newClass._id}.`);
        }
        console.log('Database seeding completed.');
    }
    catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};
seedDatabase();
