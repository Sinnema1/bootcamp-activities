import { School, Class, Professor } from '../models/index.js';

// TODO: Define an interface for the class resolver arguments
// Define types for the arguments
// interface ClassArgs {
//   id: string;
// }
interface ClassArgs {
  id: string;
}

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },

    // TODO: Add a new resolver for a single Class object
    getClass: async (_parent: any, things: ClassArgs) => {
      try{
        return await Class.findById(things.id).populate('professor')
      } catch (error) {
        console.error('Error fetching data: ', error);
        throw new Error('Failed to fetch data');
      }
    },

    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
};

export default resolvers;
